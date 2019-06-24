import gql from "graphql-tag"
// import { Query } from "react-apollo"
import { useQuery } from "react-apollo-hooks"
// import { useQuery } from "@apollo/react-hooks"
import Head from "next/head"
import Error from "./ErrorMessage"
import styled from "styled-components"

const SingleItemStyles = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  box-shadow: ${props => props.theme.bs};
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  min-height: 800px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .details {
    margin: 3rem;
    font-size: 2rem;
  }
`

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      price
      description
      image
      largeImage
    }
  }
`

const SingleItem = props => {
  const { error, loading, data } = useQuery(SINGLE_ITEM_QUERY, {
    variables: { id: props.id },
  })

  if (error) return <Error error={error} />
  if (loading) return <p>Loading...</p>
  if (!data.item) return <p>No Item Found for {props.id}</p>
  const item = data.item

  console.log(item)

  console.log(process.browser)

  return (
    <SingleItemStyles>
      <Head>
        <title>Sick Fits | {item.title}</title>
      </Head>
      <img src={item.largeImage} alt={item.title} />
      <div className="details">
        <h2>Viewing {item.title}</h2>
        <p>{item.description}</p>
      </div>
    </SingleItemStyles>
  )
}

export default SingleItem
