"use strict";

exports.__esModule = true;
exports.ApolloProvider = ApolloProvider;
exports.useApolloClient = useApolloClient;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var ApolloContext = _react.default.createContext(null);

function ApolloProvider(_ref) {
  var client = _ref.client,
      children = _ref.children;
  return _react.default.createElement(ApolloContext.Provider, {
    value: client
  }, children);
}

function useApolloClient(overrideClient) {
  var client = (0, _react.useContext)(ApolloContext); // Ensures that the number of hooks called from one render to another remains
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