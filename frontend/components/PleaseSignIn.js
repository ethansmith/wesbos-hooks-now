import { Query } from 'react-apollo';
import SignIn from './SignIn';
import { CURRENT_USER_QUERY } from './User';

// Use this component to surround anything that requires user authentication.

const PleaseSignIn = props => (
  <Query query={CURRENT_USER_QUERY}>
    {({ error, loading, data }) => {
      if (!data.me) {
        return (
          <>
            <p>Please Sign In before continuing! </p>
            <SignIn />
          </>
        );
      }

      return props.children;
    }}
  </Query>
);

export default PleaseSignIn;
