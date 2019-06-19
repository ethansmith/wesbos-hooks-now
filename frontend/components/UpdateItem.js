import { Mutation, Query } from "react-apollo"
import gql from "graphql-tag"
import Router from "next/router"
import Form from "./styles/Form"
import formatMoney from "../lib/formatMoney"
import { useState } from "react"
import ErrorMessage from "./ErrorMessage"

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      description
      price
    }
  }
`

const UPDATE_ITEM_MUTATION = gql`
  mutation UPDATE_ITEM_MUTATION(
    $id: ID!
    $title: String
    $description: String
    $price: Int
  ) {
    updateItem(
      id: $id
      title: $title
      description: $description
      price: $price
    ) {
      id
      title
      description
      price
    }
  }
`

const UpdateItem = props => {
  const [state, setState] = useState(props)

  const handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    setState({...state, [name]: val });
  };


  const runUpdateItem = async (e, updateItemMutation) => {
    e.preventDefault()

    const res = await updateItemMutation({
      variables: {
        id: props.id,
        title: state.title,
        price: state.price,
        description: state.description
      }
    })

  }

  return (
    <Query query={SINGLE_ITEM_QUERY} variables={{ id: props.id }}>
      {({ data, loading }) => {
        if (loading) return <p>Loading...</p>
        if (!data.item) return <p>No Item Found for ID {this.props.id}</p>

        return (
          <Mutation mutation={UPDATE_ITEM_MUTATION}>
            {(updateItem, { loading, error }) => (
              <Form onSubmit={e => runUpdateItem(e, updateItem)}>
                <ErrorMessage error={error} />

                <fieldset disabled={loading} aria-busy={loading}>
                  <label htmlFor="title">
                    Title
                    <input
                      type="text"
                      id="title"
                      name="title"
                      placeholder="Title"
                      autoComplete="off"
                      defaultValue={data.item.title}
                      onChange={(e) => handleChange(e)}
                    />
                  </label>

                  <label htmlFor="Price">
                    Price
                    <input
                      type="number"
                      id="Price"
                      name="price"
                      placeholder="Price"
                      defaultValue={data.item.price}
                      onChange={(e) => handleChange(e)}
                    />
                  </label>

                  <label htmlFor="Description">
                    Description
                    <textarea
                      id="Description"
                      name="description"
                      placeholder="Enter a Description"
                      defaultValue={data.item.description}
                      onChange={(e) => handleChange(e)}
                    />
                  </label>
                  <button type="submit">Submit!</button>
                </fieldset>
              </Form>
            )}
          </Mutation>
        )
      }}
    </Query>
  )
}

export default UpdateItem

export { UPDATE_ITEM_MUTATION }
