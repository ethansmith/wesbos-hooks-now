import { Mutation } from "react-apollo"
import gql from "graphql-tag"
import Form from "./styles/Form"
import Error from "./ErrorMessage"
import { useState } from "react"
import {CURRENT_USER_QUERY} from '../components/User'


const RESET_PASSWORD = gql`
  mutation RESET_PASSWORD($password: String!, $confirmPassword: String!, $resetToken: String!) {
    resetPassword(password: $password, confirmPassword: $confirmPassword, resetToken: $resetToken) {
      id
      name
    }
  }
`

const ResetPassword = props => {
  const [state, setState] = useState({password: "", confirmPassword: "", resetToken: props.resetToken})

  const handleChange = e => {
    const { name, value } = e.target
    setState({
      ...state,
      [name]: value
    })
  }

  return (
    <Mutation 
        mutation={RESET_PASSWORD} 
        variables={state}
        refetchQueries={[{query: CURRENT_USER_QUERY}]}
        >
      {(requestReset, { error, loading, called }) => {
        if (error) return <Error error={error} />


        return (
          <Form
            method="post"
            onSubmit={async e => {
              e.preventDefault()
              await requestReset()
              await setState({password: "", confirmPassword: ""})
            }}
          >
            <fieldset method="post" disabled={loading} aria-busy={loading}>
              <h2>Reset your password</h2>
              {!error && !loading && called && <p>Awesome! Your password has been changed</p>}
              
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
              <label htmlFor="confirmPassword">
                Confirm Password
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="confirmPassword"
                  autoComplete="off"
                  value={state.confirmPassword}
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

export default ResetPassword
