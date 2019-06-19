import { Mutation } from "react-apollo"
import gql from "graphql-tag"
import { CURRENT_USER_QUERY } from "./User"

const ADD_TO_CART_MUTATION = gql`
  mutation ADD_TO_CART_MUTATION($id: ID!) {
    addToCart(id: $id) {
      id
      item {
        description
        id
        image
        price
        title
      }
      quantity
    }
  }
`

const AddToCart = props => {
  const update = (cache, payload) => {
    const data = cache.readQuery({ query: CURRENT_USER_QUERY })

    const cartItem = payload.data.addToCart

    if (!data.me.cart.find(eachItem => eachItem.item.id === props.item.id)) {
      cartItem.quantity = 1
      data.me.cart.push(cartItem)
    } 
    
    else {
    //   data.me.cart.find(eachItem => eachItem.item.id === props.item.id)
    //     .quantity++
    }

    cache.writeQuery({
      query: CURRENT_USER_QUERY,
      data: data
    })
  }

  return (
    <Mutation
      optimisticResponse={{
        __typename: "Mutation",
        addToCart: {
          __typename: "CartItem",
          id: props.item.id,
          item: {
            __typename: "Item",
            description: props.item.description,
            id: props.item.id,
            image: props.item.image,
            price: props.item.price,
            title: props.item.title
          },
          quantity: 1
        }
      }}
      update={update}
      mutation={ADD_TO_CART_MUTATION}
      refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      variables={{ id: props.item.id }}
    >
      {(addToCart, { data, error, loading }) => (
        <button disabled={loading} onClick={addToCart}>
          Add{loading && "ing"} to Cart 🛒
        </button>
      )}
    </Mutation>
  )
}

export default AddToCart
