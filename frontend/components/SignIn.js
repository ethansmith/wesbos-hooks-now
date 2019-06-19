import { Mutation } from "react-apollo"
import gql from "graphql-tag"
import Form from "./styles/Form"
import Error from "./ErrorMessage"
import { useState } from "react"
import {CURRENT_USER_QUERY} from './User'

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      email
      password
    }
  }
`

const SignIn = props => {
  const [state, setState] = useState({ email: "", password: "" })

  const handleChange = e => {
    const { name, value } = e.target
    setState({
      ...state,
      [name]: value
    })
  }

  return (
    <Mutation 
        mutation={SIGNIN_MUTATION} 
        variables={state}
        refetchQueries={[{query: CURRENT_USER_QUERY}]}
        >
      {(signin, { error, loading }) => {
        if (error) return <Error error={error} />

        return (
          <Form
            method="post"
            onSubmit={async e => {
              e.preventDefault()
              await signin()
              await setState({ email: "", password: "" })
            }}
          >
            <fieldset method="post" disabled={loading} aria-busy={loading}>
              <h2>Sign In to your Account</h2>
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

              <label htmlFor="password">
                Password
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  autoComplete="off"
                  value={state.password}
                  onChange={e => handleChange(e)}
                />
              </label>
              <button type="submit">Sign in!</button>
            </fieldset>
          </Form>
        )
      }}
    </Mutation>
  )
}

export default SignIn
