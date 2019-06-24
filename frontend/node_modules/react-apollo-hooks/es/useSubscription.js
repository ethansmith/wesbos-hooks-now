function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import { useEffect, useRef, useState } from 'react';
import { useApolloClient } from './ApolloContext';
import actHack from './internal/actHack';
import { objToKey } from './utils';
export function useSubscription(query, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      onSubscriptionData = _ref.onSubscriptionData,
      overrideClient = _ref.client,
      options = _objectWithoutPropertiesLoose(_ref, ["onSubscriptionData", "client"]);

  var client = useApolloClient(overrideClient);
  var onSubscriptionDataRef = useRef(null);

  var _useState = useState({
    loading: true
  }),
      result = _useState[0],
      setResultBase = _useState[1];

  onSubscriptionDataRef.current = onSubscriptionData;

  function setResult(newResult) {
    // A hack to get rid React warnings during tests.
    actHack(function () {
      setResultBase(newResult);
    });
  }

  useEffect(function () {
    if (options.skip === true) {
      return;
    }

    var subscription = client.subscribe(_extends({}, options, {
      query: query
    })).subscribe(function (nextResult) {
      var newResult = {
        data: nextResult.data,
        error: undefined,
        loading: false
      };
      setResult(newResult);

      if (onSubscriptionDataRef.current) {
        onSubscriptionDataRef.current({
          client: client,
          subscriptionData: newResult
        });
      }
    }, function (error) {
      setResult({
        loading: false,
        data: result.data,
        error: error
      });
    });
    return function () {
      setResult({
        loading: true
      });
      subscription.unsubscribe();
    };
  }, [query, options && objToKey(options)]);
  return result;
}