import * as React from 'react';
import { SSRContext, createSSRManager } from './internal/SSRContext';
import { isPromiseLike } from './utils';
export function getMarkupFromTree(_ref) {
  var tree = _ref.tree,
      onBeforeRender = _ref.onBeforeRender,
      renderFunction = _ref.renderFunction;
  var ssrManager = createSSRManager();

  function process() {
    try {
      if (onBeforeRender) {
        onBeforeRender();
      }

      var html = renderFunction(React.createElement(SSRContext.Provider, {
        value: ssrManager
      }, tree));

      if (!ssrManager.hasPromises()) {
        return html;
      }
    } catch (e) {
      if (!isPromiseLike(e)) {
        throw e;
      }

      ssrManager.register(e);
    }

    return ssrManager.consumeAndAwaitPromises().then(process);
  }

  return Promise.resolve().then(process);
}