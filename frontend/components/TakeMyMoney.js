import StripeCheckout from "react-stripe-checkout"
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

const TakeMyMoney = props => {
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
      pathname: '/order',
      query: {id: order.data.createOrder.id}
    })
  }

  return (
    <User>
      {({ data: { me } }) => (
        <Mutation
            mutation={CREATE_ORDER_MUTATION}
            refetchQueries={[{query: CURRENT_USER_QUERY}]}
        >
          {createOrder => (
            <StripeCheckout
              amount={calcTotalPrice(me.cart)}
              name="Sick Fits"
              description={`Your order of ${totalItems(me)} items`}
              stripeKey="pk_test_s5G4igMtK9KvmQtbRd0L18yR00ALa4imnQ"
              image={me.cart.length && me.cart[0].item && me.cart[0].item.image }
              currency="USD"
              email={me.email}
              token={res => onToken(res, createOrder)}
            >
              {props.children}
            </StripeCheckout>
          )}
        </Mutation>
      )}
    </User>
  )
}

export default TakeMyMoney
