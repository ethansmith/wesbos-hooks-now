"use strict";

exports.__esModule = true;
exports.objToKey = objToKey;
exports.isPromiseLike = isPromiseLike;
exports.compact = compact;

var _isPlainObject = _interopRequireDefault(require("lodash/isPlainObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function objToKey(obj) {
  if (!(0, _isPlainObject.default)(obj)) {
    return obj;
  }

  var sortedObj = Object.keys(obj).sort().reduce(function (result, key) {
    result[key] = objToKey(obj[key]);
    return result;
  }, {});
  return JSON.stringify(sortedObj);
}

function isPromiseLike(value) {
  return value != null && typeof value.then === 'function';
}

function compact(obj) {
  return Object.keys(obj).reduce(function (acc, key) {
    if (obj[key] !== undefined) {
      acc[key] = obj[key];
    }

    return acc;
  }, {});
}