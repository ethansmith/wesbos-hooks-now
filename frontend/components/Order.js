import { Query } from "react-apollo"
import moment from "moment"
import Head from "next/head"
import gql from "graphql-tag"
import formatMoney from "../lib/formatMoney"
import Error from "./ErrorMessage"
import OrderStyles from "./styles/OrderStyles"

const SINGLE_ORDER_QUERY = gql`
  query($id: ID!) {
    order(id: $id) {
      id
      items {
        title
        description
        price
        id
        image
        quantity
      }
      total
      createdAt
      user {
        id
      }
      charge
    }
  }
`

const Order = props => (
  <Query query={SINGLE_ORDER_QUERY} variables={{ id: props.id }}>
    {({ data, error, loading }) => {
      //   if (error.message.contains('poo')) return <p>No order found with that ID!</p>
      if (error) return <Error error={error} />
      if (loading) return <p>loading</p>

      console.log("data is", data)

      const { order } = data
      return (
        <OrderStyles>
          <Head>
            <title>Sick Fits - Order ID: {order.id}</title>
          </Head>
          <p>
            <span>Order ID:</span>
            <span>{props.id}</span>
          </p>
          <p>
            <span>Order total:</span>
            <span>{formatMoney(order.total)}</span>
          </p>
          <p>
            <span>Charge ID:</span>
            <span>{order.charge}</span>
          </p>
          <p>
            <span>Created at: </span>
            <span>{moment(order.createdAt).format("MMM Do YY [at] h:mm")}</span>
          </p>
          <p>
            <span>Item count: </span>
            <span>{order.items.reduce((tally, item) => tally + item.quantity, 0) }</span>
          </p>
          <div className="items">
              {order.items.map(item => (
                  <div className="order-item" key={item.id}>
                      <img src={item.image} alt={item.title}/>
                      <div className="item-details">
                    <h2>{item.title}</h2>
                    <p>Qty: {item.quantity}</p>
                    <p>Each: {formatMoney(item.price)}</p>
                    <p>SubTotal: {formatMoney(item.price * item.quantity)}</p>
                    <p>Description: {item.description}</p>
                    </div>
                  </div>
              ))}
          </div>
        </OrderStyles>
      )
    }}
  </Query>
)

export default Order
