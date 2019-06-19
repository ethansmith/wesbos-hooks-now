import { useState } from "react"
import Downshift, {resetIdCounter} from "downshift"
import { ApolloConsumer } from "react-apollo"
import debounce from "lodash.debounce"
import gql from "graphql-tag"
import Router from "next/router"
import { DropDown, DropDownItem, SearchStyles } from "./styles/DropDown"

const SEARCH_ITEMS_QUERY = gql`
  query SEARCH_ITEMS_QUERY($searchTerm: String!) {
    items(
      where: {
        OR: [
          { title_contains: $searchTerm }
          { description_contains: $searchTerm }
        ]
      }
    ) {
      id
      image
      title
    }
  }
`

const routeToItem = item => {
    Router.push({
        pathname: '/item',
        query: {
            id: item.id
        }
    })
}

const AutoComplete = props => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)

  const onChange = debounce(async (e, client) => {
    setLoading(true)

    // manually query apollo client
    const res = await client.query({
      query: SEARCH_ITEMS_QUERY,
      variables: { searchTerm: e.target.value }
    })
    setItems(res.data.items)
    setLoading(false)
  }, 100)
  
  resetIdCounter()
  return (
    <SearchStyles>
      <Downshift onChange={routeToItem} itemToString={item => (item === null) ? "" : item.title}>
        {({
          getInputProps,
          getItemProps,
          isOpen,
          inputValue,
          highlightedIndex
        }) => (
          <div>
            <ApolloConsumer>
              {client => (
                <input
                  {...getInputProps({
                    type: "search",
                    placeholder: "Search for An Item",
                    id: "search",
                    className: loading ? "loading" : "",
                    onChange: e => {
                      e.persist()
                      onChange(e, client)
                    }
                  })}
                />
              )}
            </ApolloConsumer>
            {isOpen && (
              <DropDown>
                {items.map((item, index) => (
                  <DropDownItem 
                  {...getItemProps({item})}
                  key={item.id} highlighted={index === highlightedIndex}>
                    <img width="50" src={item.image} alt={item.title} />
                    <p>{item.title}</p>
                  </DropDownItem>
                ))}
                {!items.length && (loading === false) && <DropDownItem>Nothing found for {inputValue}</DropDownItem>}
              </DropDown>
            )}
          </div>
        )}
      </Downshift>
    </SearchStyles>
  )
}

export default AutoComplete
