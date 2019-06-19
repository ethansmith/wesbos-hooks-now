import { Query, Mutation } from "react-apollo"
import gql from "graphql-tag"
import { useState } from "react"
import Table from "./styles/Table"
import Error from "./ErrorMessage"
import SickButton from "./styles/SickButton"
import PropTypes from "prop-types"

const possiblePermissions = [
  "ADMIN",
  "USER",
  "ITEMCREATE",
  "ITEMUPDATE",
  "ITEMDELETE",
  "PERMISSIONUPDATE"
]

const ALL_USERS_QUERY = gql`
  query ALL_USERS_QUERY {
    users {
      id
      name
      email
      permissions
    }
  }
`
const UPDATE_PERMISSIONS_MUTATION = gql`
  mutation updatePermissions($permissions: [Permission!]!, $userId: ID!) {
    updatePermissions(permissions: $permissions, userId: $userId) {
      id
      permissions
      name
      email
    }
  }
`

const UserRow = props => {
  const [state, setState] = useState({ permissions: props.user.permissions })

  return (
    <Mutation
      mutation={UPDATE_PERMISSIONS_MUTATION}
      variables={{
        permissions: state.permissions,
        userId: props.user.id
      }}
    >
      {(updatePermissions, { data, loading, error }) => (
        <tr>
          <td>{props.user.name}</td>
          <td>{props.user.email}</td>
          {possiblePermissions.map(permission => (
            <td key={permission}>
              <label htmlFor={`${props.user.name}-permission-${permission}`}>
                <input
                  id={`${props.user.name}-permission-${permission}`}
                  checked={state.permissions.includes(permission)}
                  type="checkbox"
                  value={permission}
                  onChange={(e) => {
                    const checkbox = e.target;
                    // take a copy of the current permissions
                    let updatedPermissions = [...state.permissions]
                    // figure out if we need to remove or add this permission
                    if (checkbox.checked) {
                      // add it in!
                      updatedPermissions.push(checkbox.value);
                    } else {
                      updatedPermissions = updatedPermissions.filter(permission => permission !== checkbox.value);
                    }
                    setState({ permissions: updatedPermissions });
                  }}
                />
              </label>
            </td>
          ))}
          <td>
            <SickButton
              type="button"
              disabled={loading}
              onClick={updatePermissions}
            >
              Updat{loading ? 'ing' : 'e'}
            </SickButton>
          </td>
        </tr>
      )}
    </Mutation>
  )
}

UserRow.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    id: PropTypes.string,
    permissions: PropTypes.array
  }).isRequired
}

const Permissions = props => (
  <Query query={ALL_USERS_QUERY}>
    {({ error, loading, data }) => {
      console.log(data)

      return (
        <div>
          <Error error={error} />
          <div>
            <h2>Manage Permissions</h2>
            <Table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  {possiblePermissions.map(perm => (
                    <th key={perm}>{perm}</th>
                  ))}
                  <th>👇</th>
                </tr>
              </thead>
              <tbody>
                {data.users.map(user => (
                  <UserRow key={user.id} user={user} />
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      )
    }}
  </Query>
)

export default Permissions
