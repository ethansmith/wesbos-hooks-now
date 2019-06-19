import { Mutation } from "react-apollo"
import gql from "graphql-tag"
import Form from "./styles/Form"
import Error from "./ErrorMessage"
import { useState } from "react"
import { CURRENT_USER_QUERY } from './User'

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $name: String!
    $password: String!
  ) {
      signup (email: $email, name: $name, password: $password) {
        id
        name
        email
        password
  }
  }
`



const Signup = props => {
  const [state, setState] = useState({name: "", email: "", password: ""})

  const handleChange = e => {
    const { name, value } = e.target
    setState({
      ...state,
      [name]: value
    })
  }

  return (
    <Mutation
      mutation={SIGNUP_MUTATION}
      variables={state}
      refetchQueries={[{query: CURRENT_USER_QUERY}]}
    >
      {(signup, { error, loading }) => {
        if (error) return <Error error={error} />

        return (
          <Form
            method="post"
            onSubmit={async e => {
              e.preventDefault()
              await signup()
              await setState({name: "", email: "", password: ""})
            }}
          >
            <fieldset method="post" disabled={loading} aria-busy={loading}>
              <h2>Sign Up for an Account</h2>
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
              <label htmlFor="name">
                Name
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  autoComplete="off"
                  value={state.name}
                  onChange={e => handleChange(e)}
                />
              </label>
              <label htmlFor="password">
                password
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  autoComplete="off"
                  value={state.password}
                  onChange={e => handleChange(e)}
                />
              </label>
              <button type="submit">Sign up!</button>
            </fieldset>
          </Form>
        )
      }}
    </Mutation>
  )
}

export default Signup
