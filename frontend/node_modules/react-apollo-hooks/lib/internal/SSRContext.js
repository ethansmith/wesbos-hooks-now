"use strict";

exports.__esModule = true;
exports.createSSRManager = createSSRManager;
exports.SSRContext = void 0;

var _react = require("react");

function createSSRManager() {
  var promiseSet = new Set();
  return {
    hasPromises: function hasPromises() {
      return promiseSet.size > 0;
    },
    register: function register(promise) {
      promiseSet.add(promise);
    },
    consumeAndAwaitPromises: function consumeAndAwaitPromises() {
      var promises = Array.from(promiseSet);
      promiseSet.clear();
      return Promise.all(promises);
    }
  };
}

var SSRContext = (0, _react.createContext)(null);
exports.SSRContext = SSRContext;