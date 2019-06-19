import gql from "graphql-tag"
import { Query } from "react-apollo"
import PaginationStyles from "./styles/PaginationStyles"
import { perPage } from "../config"
import Head from "next/head"
import Link from "next/link"

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    itemsConnection {
      aggregate {
        count
      }
    }
  }
`

const Pagination = props => (
  <Query query={PAGINATION_QUERY}>
    {({ error, loading, data }) => {
      if (loading) return <p>Loading...</p>

      const itemsCount = data.itemsConnection.aggregate.count

      const totalPages = Math.ceil(itemsCount / perPage)

      const currentPage = props.page

      return (
        <PaginationStyles>
          <Head>
            <title>
              Sick Fits - Page {props.page} of {totalPages}{" "}
            </title>
          </Head>
          <Link
            prefetch
            href={{
              pathname: "items",
              query: { page: currentPage - 1 }
            }}
          >
            <a className="prev" aria-disabled={currentPage <= 1}>Prev</a>
          </Link>

          <p>
            {currentPage || 1} of {totalPages}
          </p>

          <p>
           {itemsCount} items total
          </p>

          <Link
            prefetch
            href={{
              pathname: "items",
              query: { page: currentPage + 1 }
            }}
          >
            <a className="next" aria-disabled={currentPage >= totalPages}>Next</a>
          </Link>

        </PaginationStyles>
      )
    }}
  </Query>
)

export default Pagination
