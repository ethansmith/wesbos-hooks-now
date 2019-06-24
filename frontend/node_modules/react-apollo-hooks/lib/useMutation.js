"use strict";

exports.__esModule = true;
exports.useMutation = useMutation;

var _ApolloContext = require("./ApolloContext");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function useMutation(mutation, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      overrideClient = _ref.client,
      baseOptions = _objectWithoutPropertiesLoose(_ref, ["client"]);

  var client = (0, _ApolloContext.useApolloClient)(overrideClient);
  return function (options) {
    return client.mutate(_extends({
      mutation: mutation
    }, baseOptions, options));
  };
}