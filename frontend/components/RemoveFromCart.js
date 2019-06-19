import { Mutation } from "react-apollo"
import gql from "graphql-tag"
import styled from "styled-components"
import { CURRENT_USER_QUERY } from "./User"

const REMOVE_FROM_CART_MUTATION = gql`
  mutation REMOVE_FROM_CART_MUTATION($id: ID!) {
    removeFromCart(id: $id) {
      id
    }
  }
`

const BigButton = styled.button`
  font-size: 3rem;
  background: none;
  border: 0;
  &:hover {
    color: ${props => props.theme.red};
    cursor: pointer;
  }
`

const RemoveFromCart = props => {
  // this gets called as soon as we get a response back from the server after a mutation has been performed
  const update = (cache, payload) => {
    // read cache

    const data = cache.readQuery({ query: CURRENT_USER_QUERY })

    // remove item from the cart

    const cartItemId = payload.data.removeFromCart.id // what we get back from the mutation

    data.me.cart = data.me.cart.filter(
      eachCartItem => eachCartItem.id != cartItemId
    )

    // write it back to the cache

    cache.writeQuery({
        query: CURRENT_USER_QUERY,
        data: data
    })
  }

  return (
    <Mutation
        optimisticResponse={{
            __typename: 'Mutation',
            removeFromCart: {
                __typename: 'CartItem',
                id: props.id
            }
        }}
      update={update}
      variables={{ id: props.id }}
      mutation={REMOVE_FROM_CART_MUTATION}
    >
      {(removeFromCart, { data, error, loading }) => (
        <BigButton
          disabled={loading}
          onClick={() => removeFromCart()}
          title="Delete Item"
        >
          &times;
        </BigButton>
      )}
    </Mutation>
  )
}

export default RemoveFromCart
