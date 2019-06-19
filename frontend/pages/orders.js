import { Query } from "react-apollo"
import gql from "graphql-tag"
import User, { CURRENT_USER_QUERY } from "../components/User"
import PleaseSignIn from "../components/PleaseSignIn"
import OrdersList from "../components/OrdersList"
import Error from "../components/ErrorMessage"

const ALL_ORDERS_QUERY = gql`
  query ALL_ORDERS_QUERY($userId: ID!) {
    orders(userId: $userId) {
      id
      items {
        title
        quantity
        image
        price
      }
      total
      createdAt
    }
  }
`

const Orders = props => (
  <User>
    {({ data, loading, error }) => {
      return (
        <PleaseSignIn>
          <Query query={ALL_ORDERS_QUERY} variables={{ userId: data.me.id }}>
            {({ data, loading, error }) => {
              console.log("orders data", data)
              return (
                <>
                  <Error error={error} />
                  <OrdersList orders={data.orders}/>
                </>
              )
            }}
          </Query>
        </PleaseSignIn>
      )
    }}
  </User>
)

export default Orders
