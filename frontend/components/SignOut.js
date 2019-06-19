import gql from "graphql-tag"
import { Mutation } from "react-apollo"
import { CURRENT_USER_QUERY } from "./User"

const SIGN_OUT_MUTATION = gql`
  mutation SIGN_OUT_MUTATION {
    signout {
      message
    }
  }
`

const SignOut = props => (
  <Mutation
    mutation={SIGN_OUT_MUTATION}
    refetchQueries={[{ query: CURRENT_USER_QUERY }]}
  >
    {(signout) => <button onClick={signout}>Log Out!</button>}
  </Mutation>
)

export default SignOut
