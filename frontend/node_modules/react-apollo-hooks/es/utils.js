import isPlainObject from 'lodash/isPlainObject';
export function objToKey(obj) {
  if (!isPlainObject(obj)) {
    return obj;
  }

  var sortedObj = Object.keys(obj).sort().reduce(function (result, key) {
    result[key] = objToKey(obj[key]);
    return result;
  }, {});
  return JSON.stringify(sortedObj);
}
export function isPromiseLike(value) {
  return value != null && typeof value.then === 'function';
}
export function compact(obj) {
  return Object.keys(obj).reduce(function (acc, key) {
    if (obj[key] !== undefined) {
      acc[key] = obj[key];
    }

    return acc;
  }, {});
}