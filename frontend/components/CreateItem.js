import { Mutation } from "react-apollo"
import gql from "graphql-tag"
import Router from "next/router"
import Form from "./styles/Form"
import formatMoney from "../lib/formatMoney"
import { useState } from "react"
import ErrorMessage from "./ErrorMessage"

const CREATE_ITEM_MUTATION = gql`
  mutation CREATE_ITEM_MUTATION(
    $title: String!
    $description: String!
    $price: Int!
    $image: String
    $largeImage: String
  ) {
    createItem(
      title: $title
      description: $description
      price: $price
      image: $image
      largeImage: $largeImage
    ) {
      id
    }
  }
`

const CreateItem = props => {
  const [theTitle, setTheTitle] = useState("")
  const [thePrice, setThePrice] = useState("")
  const [theDescription, setTheDescription] = useState("")
  const [theImage, setTheImage] = useState("")
  const [theLargeImage, setTheLargeImage] = useState("")
  const [uploading, setUploading] = useState(false)

  const uploadFile = async e => {
    const data = new FormData()

    data.append("file", e.target.files[0])
    data.append("upload_preset", "sickfits")

    setUploading(true)

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dxegnq95q/image/upload",
      {
        method: "POST",
        body: data
      }
    )

    const theFile = await res.json()

    setUploading(false)

    setTheImage(theFile.url)

    setTheLargeImage(theFile.eager[0].url)
  }

  return (
    <Mutation mutation={CREATE_ITEM_MUTATION}>
      {(createItem, { loading, error }) => (
        <Form
          onSubmit={async e => {
            // Stop the form from submitting
            e.preventDefault()
            // call the mutation
            const res = await createItem({
              variables: {
                title: theTitle,
                price: parseInt(thePrice),
                description: theDescription,
                image: theImage,
                largeImage: theLargeImage
              }
            })
            // change them to the single item page
            console.log(res)
            Router.push({
              pathname: "/item",
              query: { id: res.data.createItem.id }
            })
          }}
        >
          <ErrorMessage error={error} />

          <fieldset disabled={loading} aria-busy={loading}>
            <label htmlFor="file">
              Image
              <input
                type="file"
                id="file"
                name="file"
                placeholder="Upload an image"
                required
                onChange={e => uploadFile(e)}
              />
              {uploading && <p>Uploading...</p>}
              {theImage && (
                <img width="200" src={theImage} alt="Upload Preview" />
              )}
            </label>

            <label htmlFor="title">
              Title
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Title"
                autoComplete="off"
                required
                value={theTitle}
                onChange={e => setTheTitle(e.target.value)}
              />
            </label>

            <label htmlFor="Price">
              Price
              <input
                type="number"
                id="Price"
                name="Price"
                placeholder="Price"
                required
                value={thePrice}
                onChange={e => setThePrice(e.target.value)}
              />
            </label>

            <label htmlFor="Description">
              Description
              <textarea
                id="Description"
                name="Description"
                placeholder="Enter a Description"
                required
                value={theDescription}
                onChange={e => setTheDescription(e.target.value)}
              />
            </label>
            <button type="submit">Submit!</button>
          </fieldset>
        </Form>
      )}
    </Mutation>
  )
}

export default CreateItem

export { CREATE_ITEM_MUTATION }
