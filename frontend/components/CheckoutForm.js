import { useState } from "react"
import { injectStripe } from "react-stripe-elements-universal"
import { CardElement } from "react-stripe-elements-universal"
import { Mutation } from "react-apollo"
import Router from "next/router"
import NProgress from "nprogress"
import gql from "graphql-tag"
import calcTotalPrice from "../lib/calcTotalPrice"
import Error from "./ErrorMessage"
import User, { CURRENT_USER_QUERY } from "./User"

const CREATE_ORDER_MUTATION = gql`
  mutation CREATE_ORDER_MUTATION($token: String!) {
    createOrder(token: $token) {
      id
      charge
      total
      items {
        id
        title
      }
    }
  }
`

function CheckoutForm({ totalPrice, stripe, clearCart }) {
  const [status, setStatus] = useState("default")

  async function handleSubmit(e, createOrder) {
    e.preventDefault()
    setStatus("submitting")

    const { token } = await stripe.createToken()
    console.log("STRIPE TOKEN:", token)

    NProgress.start()
    const order = await createOrder({
        variables: {
          token: token.id
        }
      }).catch(err => {
        alert(err.message)
      })
  
      Router.push({
        pathname: "/order",
        query: { id: order.data.createOrder.id }
      })
  }


  const totalItems = me =>
    me.cart.reduce((tally, cartItem) => tally + cartItem.quantity, 0)


  const onToken = async (res, createOrder) => {
    NProgress.start()
    // manually call the mutation once we have the stripe token

    const order = await createOrder({
      variables: {
        token: res.id
      }
    }).catch(err => {
      alert(err.message)
    })

    Router.push({
      pathname: "/order",
      query: { id: order.data.createOrder.id }
    })
  }

  return (
    <User>
      {({ data: { me } }) => (
        <Mutation
          mutation={CREATE_ORDER_MUTATION}
          refetchQueries={[{ query: CURRENT_USER_QUERY }]}
        >
          {createOrder => (
            <form onSubmit={(e) => handleSubmit(e, createOrder)}>
              <CardElement
                style={{
                  base: { fontFamily: "Space Mono, monospace", color: "black" }
                }}
              />
              <button
                type="submit"
                disabled={status === "submitting"}
                className={`Cart__checkout button ${
                  status === "success" ? "success" : ""
                } `}
              >
                {status === "default" && "Checkout"}
                {status === "submitting" && "Submitting ..."}
                {status === "success" && "Payment Complete!"}
                {status === "error" && "Error!"}
              </button>
            </form>
          )}
        </Mutation>
      )}
    </User>
  )
}

export default injectStripe(CheckoutForm)
