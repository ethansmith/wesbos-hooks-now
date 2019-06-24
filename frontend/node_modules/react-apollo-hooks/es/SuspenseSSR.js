import React, { Suspense, useContext } from 'react';
import { SSRContext } from './internal/SSRContext';
export function unstable_SuspenseSSR(_ref) {
  var children = _ref.children,
      fallback = _ref.fallback;
  var ssrManager = useContext(SSRContext);
  return ssrManager ? React.createElement(React.Fragment, null, children) : React.createElement(Suspense, {
    fallback: fallback
  }, children);
}