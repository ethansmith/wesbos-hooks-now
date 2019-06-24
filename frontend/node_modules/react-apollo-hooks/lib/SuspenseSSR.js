"use strict";

exports.__esModule = true;
exports.unstable_SuspenseSSR = unstable_SuspenseSSR;

var _react = _interopRequireWildcard(require("react"));

var _SSRContext = require("./internal/SSRContext");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function unstable_SuspenseSSR(_ref) {
  var children = _ref.children,
      fallback = _ref.fallback;
  var ssrManager = (0, _react.useContext)(_SSRContext.SSRContext);
  return ssrManager ? _react.default.createElement(_react.default.Fragment, null, children) : _react.default.createElement(_react.Suspense, {
    fallback: fallback
  }, children);
}