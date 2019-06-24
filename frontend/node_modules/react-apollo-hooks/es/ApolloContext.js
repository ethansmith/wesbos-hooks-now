import React, { useContext } from 'react';
var ApolloContext = React.createContext(null);
export function ApolloProvider(_ref) {
  var client = _ref.client,
      children = _ref.children;
  return React.createElement(ApolloContext.Provider, {
    value: client
  }, children);
}
export function useApolloClient(overrideClient) {
  var client = useContext(ApolloContext); // Ensures that the number of hooks called from one render to another remains
  // constant, despite the Apollo client read from context being swapped for
  // one passed directly as prop.

  if (overrideClient) {
    return overrideClient;
  }

  if (!client) {
    // https://github.com/apollographql/react-apollo/blob/5cb63b3625ce5e4a3d3e4ba132eaec2a38ef5d90/src/component-utils.tsx#L19-L22
    throw new Error('Could not find "client" in the context or passed in as a prop. ' + 'Wrap the root component in an <ApolloProvider>, or pass an ' + 'ApolloClient instance in via props.');
  }

  return client;
}