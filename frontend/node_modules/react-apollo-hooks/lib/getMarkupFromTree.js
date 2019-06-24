"use strict";

exports.__esModule = true;
exports.getMarkupFromTree = getMarkupFromTree;

var React = _interopRequireWildcard(require("react"));

var _SSRContext = require("./internal/SSRContext");

var _utils = require("./utils");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function getMarkupFromTree(_ref) {
  var tree = _ref.tree,
      onBeforeRender = _ref.onBeforeRender,
      renderFunction = _ref.renderFunction;
  var ssrManager = (0, _SSRContext.createSSRManager)();

  function process() {
    try {
      if (onBeforeRender) {
        onBeforeRender();
      }

      var html = renderFunction(React.createElement(_SSRContext.SSRContext.Provider, {
        value: ssrManager
      }, tree));

      if (!ssrManager.hasPromises()) {
        return html;
      }
    } catch (e) {
      if (!(0, _utils.isPromiseLike)(e)) {
        throw e;
      }

      ssrManager.register(e);
    }

    return ssrManager.consumeAndAwaitPromises().then(process);
  }

  return Promise.resolve().then(process);
}