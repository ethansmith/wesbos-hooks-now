import { Mutation } from "react-apollo"
import gql from "graphql-tag"
import Form from "./styles/Form"
import Error from "./ErrorMessage"
import { useState } from "react"

const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    requestReset(email: $email) {
      message
    }
  }
`

const RequestReset = props => {
  const [state, setState] = useState({ email: ""})

  const handleChange = e => {
    const { name, value } = e.target
    setState({
      ...state,
      [name]: value
    })
  }

  return (
    <Mutation 
        mutation={REQUEST_RESET_MUTATION} 
        variables={state}
        >
      {(requestReset, { error, loading, called }) => {
        if (error) return <Error error={error} />


        return (
          <Form
            method="post"
            onSubmit={async e => {
              e.preventDefault()
              await requestReset()
              await setState({ email: ""})
            }}
          >
            <fieldset method="post" disabled={loading} aria-busy={loading}>
              <h2>Request a password reset</h2>
              {!error && !loading && called && <p>Thanks, please check your email for further instructions</p>}
              <label htmlFor="email">
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  autoComplete="off"
                  value={state.email}
                  onChange={e => handleChange(e)}
                />
              </label>

              <button type="submit">Request Password!</button>
            </fieldset>
          </Form>
        )
      }}
    </Mutation>
  )
}

export default RequestReset
