webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./node_modules/@apollo/react-common/lib/react-common.esm.js":
false,

/***/ "./node_modules/@apollo/react-common/node_modules/ts-invariant/lib/invariant.esm.js":
false,

/***/ "./node_modules/@apollo/react-common/node_modules/tslib/tslib.es6.js":
false,

/***/ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js":
false,

/***/ "./node_modules/@apollo/react-hooks/node_modules/apollo-utilities/lib/bundle.esm.js":
false,

/***/ "./node_modules/@apollo/react-hooks/node_modules/ts-invariant/lib/invariant.esm.js":
false,

/***/ "./node_modules/@apollo/react-hooks/node_modules/tslib/tslib.es6.js":
false,

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getPrototype.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getPrototype.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isPlainObject.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/isPlainObject.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),

/***/ "./node_modules/react-apollo-hooks/es/ApolloContext.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-apollo-hooks/es/ApolloContext.js ***!
  \*************************************************************/
/*! exports provided: ApolloProvider, useApolloClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApolloProvider", function() { return ApolloProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useApolloClient", function() { return useApolloClient; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var ApolloContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);
function ApolloProvider(_ref) {
  var client = _ref.client,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ApolloContext.Provider, {
    value: client
  }, children);
}
function useApolloClient(overrideClient) {
  var client = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(ApolloContext); // Ensures that the number of hooks called from one render to another remains
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

/***/ }),

/***/ "./node_modules/react-apollo-hooks/es/SuspenseSSR.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-apollo-hooks/es/SuspenseSSR.js ***!
  \***********************************************************/
/*! exports provided: unstable_SuspenseSSR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_SuspenseSSR", function() { return unstable_SuspenseSSR; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _internal_SSRContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/SSRContext */ "./node_modules/react-apollo-hooks/es/internal/SSRContext.js");


function unstable_SuspenseSSR(_ref) {
  var children = _ref.children,
      fallback = _ref.fallback;
  var ssrManager = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_internal_SSRContext__WEBPACK_IMPORTED_MODULE_1__["SSRContext"]);
  return ssrManager ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, children) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: fallback
  }, children);
}

/***/ }),

/***/ "./node_modules/react-apollo-hooks/es/getMarkupFromTree.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-apollo-hooks/es/getMarkupFromTree.js ***!
  \*****************************************************************/
/*! exports provided: getMarkupFromTree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMarkupFromTree", function() { return getMarkupFromTree; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _internal_SSRContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/SSRContext */ "./node_modules/react-apollo-hooks/es/internal/SSRContext.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/react-apollo-hooks/es/utils.js");



function getMarkupFromTree(_ref) {
  var tree = _ref.tree,
      onBeforeRender = _ref.onBeforeRender,
      renderFunction = _ref.renderFunction;
  var ssrManager = Object(_internal_SSRContext__WEBPACK_IMPORTED_MODULE_1__["createSSRManager"])();

  function process() {
    try {
      if (onBeforeRender) {
        onBeforeRender();
      }

      var html = renderFunction(react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_internal_SSRContext__WEBPACK_IMPORTED_MODULE_1__["SSRContext"].Provider, {
        value: ssrManager
      }, tree));

      if (!ssrManager.hasPromises()) {
        return html;
      }
    } catch (e) {
      if (!Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isPromiseLike"])(e)) {
        throw e;
      }

      ssrManager.register(e);
    }

    return ssrManager.consumeAndAwaitPromises().then(process);
  }

  return Promise.resolve().then(process);
}

/***/ }),

/***/ "./node_modules/react-apollo-hooks/es/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-apollo-hooks/es/index.js ***!
  \*****************************************************/
/*! exports provided: useQuery, useMutation, ApolloProvider, useApolloClient, unstable_SuspenseSSR, getMarkupFromTree, useSubscription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useQuery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useQuery */ "./node_modules/react-apollo-hooks/es/useQuery.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useQuery", function() { return _useQuery__WEBPACK_IMPORTED_MODULE_0__["useQuery"]; });

/* harmony import */ var _useMutation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useMutation */ "./node_modules/react-apollo-hooks/es/useMutation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMutation", function() { return _useMutation__WEBPACK_IMPORTED_MODULE_1__["useMutation"]; });

/* harmony import */ var _ApolloContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ApolloContext */ "./node_modules/react-apollo-hooks/es/ApolloContext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloProvider", function() { return _ApolloContext__WEBPACK_IMPORTED_MODULE_2__["ApolloProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useApolloClient", function() { return _ApolloContext__WEBPACK_IMPORTED_MODULE_2__["useApolloClient"]; });

/* harmony import */ var _SuspenseSSR__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SuspenseSSR */ "./node_modules/react-apollo-hooks/es/SuspenseSSR.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unstable_SuspenseSSR", function() { return _SuspenseSSR__WEBPACK_IMPORTED_MODULE_3__["unstable_SuspenseSSR"]; });

/* harmony import */ var _getMarkupFromTree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getMarkupFromTree */ "./node_modules/react-apollo-hooks/es/getMarkupFromTree.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMarkupFromTree", function() { return _getMarkupFromTree__WEBPACK_IMPORTED_MODULE_4__["getMarkupFromTree"]; });

/* harmony import */ var _useSubscription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useSubscription */ "./node_modules/react-apollo-hooks/es/useSubscription.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSubscription", function() { return _useSubscription__WEBPACK_IMPORTED_MODULE_5__["useSubscription"]; });








/***/ }),

/***/ "./node_modules/react-apollo-hooks/es/internal/SSRContext.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-apollo-hooks/es/internal/SSRContext.js ***!
  \*******************************************************************/
/*! exports provided: createSSRManager, SSRContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSSRManager", function() { return createSSRManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SSRContext", function() { return SSRContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

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
var SSRContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);

/***/ }),

/***/ "./node_modules/react-apollo-hooks/es/internal/actHack.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-apollo-hooks/es/internal/actHack.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return actHack; });
function actHack(callback) {
  callback();
}

/***/ }),

/***/ "./node_modules/react-apollo-hooks/es/queryCache.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-apollo-hooks/es/queryCache.js ***!
  \**********************************************************/
/*! exports provided: getCachedObservableQuery, invalidateCachedObservableQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCachedObservableQuery", function() { return getCachedObservableQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invalidateCachedObservableQuery", function() { return invalidateCachedObservableQuery; });
/* harmony import */ var graphql_language_printer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql/language/printer */ "./node_modules/graphql/language/printer.mjs");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/react-apollo-hooks/es/utils.js");
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var cachedQueriesByClient = new WeakMap();
function getCachedObservableQuery(client, options) {
  var queriesForClient = getCachedQueriesForClient(client);
  var cacheKey = getCacheKey(options);
  var observableQuery = queriesForClient.get(cacheKey);

  if (observableQuery == null) {
    observableQuery = client.watchQuery(options);
    queriesForClient.set(cacheKey, observableQuery);
  }

  return observableQuery;
}
function invalidateCachedObservableQuery(client, options) {
  var queriesForClient = getCachedQueriesForClient(client);
  var cacheKey = getCacheKey(options);
  queriesForClient.delete(cacheKey);
}

function getCachedQueriesForClient(client) {
  var queriesForClient = cachedQueriesByClient.get(client);

  if (queriesForClient == null) {
    queriesForClient = new Map();
    cachedQueriesByClient.set(client, queriesForClient);
  }

  return queriesForClient;
}

function getCacheKey(_ref) {
  var query = _ref.query,
      options = _objectWithoutPropertiesLoose(_ref, ["query"]);

  return Object(graphql_language_printer__WEBPACK_IMPORTED_MODULE_0__["print"])(query) + "@@" + Object(_utils__WEBPACK_IMPORTED_MODULE_1__["objToKey"])(options);
}

/***/ }),

/***/ "./node_modules/react-apollo-hooks/es/useMutation.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-apollo-hooks/es/useMutation.js ***!
  \***********************************************************/
/*! exports provided: useMutation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMutation", function() { return useMutation; });
/* harmony import */ var _ApolloContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApolloContext */ "./node_modules/react-apollo-hooks/es/ApolloContext.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


function useMutation(mutation, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      overrideClient = _ref.client,
      baseOptions = _objectWithoutPropertiesLoose(_ref, ["client"]);

  var client = Object(_ApolloContext__WEBPACK_IMPORTED_MODULE_0__["useApolloClient"])(overrideClient);
  return function (options) {
    return client.mutate(_extends({
      mutation: mutation
    }, baseOptions, options));
  };
}

/***/ }),

/***/ "./node_modules/react-apollo-hooks/es/useQuery.js":
/*!********************************************************!*\
  !*** ./node_modules/react-apollo-hooks/es/useQuery.js ***!
  \********************************************************/
/*! exports provided: useQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useQuery", function() { return useQuery; });
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-client */ "./node_modules/apollo-client/bundle.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ApolloContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ApolloContext */ "./node_modules/react-apollo-hooks/es/ApolloContext.js");
/* harmony import */ var _internal_SSRContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./internal/SSRContext */ "./node_modules/react-apollo-hooks/es/internal/SSRContext.js");
/* harmony import */ var _internal_actHack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./internal/actHack */ "./node_modules/react-apollo-hooks/es/internal/actHack.js");
/* harmony import */ var _queryCache__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./queryCache */ "./node_modules/react-apollo-hooks/es/queryCache.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./node_modules/react-apollo-hooks/es/utils.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








function useQuery(query, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$ssr = _ref.ssr,
      ssr = _ref$ssr === void 0 ? true : _ref$ssr,
      _ref$skip = _ref.skip,
      skip = _ref$skip === void 0 ? false : _ref$skip,
      _ref$suspend = _ref.suspend,
      suspend = _ref$suspend === void 0 ? false : _ref$suspend,
      pollInterval = _ref.pollInterval,
      _ref$notifyOnNetworkS = _ref.notifyOnNetworkStatusChange,
      notifyOnNetworkStatusChange = _ref$notifyOnNetworkS === void 0 ? false : _ref$notifyOnNetworkS,
      overrideClient = _ref.client,
      context = _ref.context,
      metadata = _ref.metadata,
      variables = _ref.variables,
      actualCachePolicy = _ref.fetchPolicy,
      errorPolicy = _ref.errorPolicy,
      fetchResults = _ref.fetchResults;

  var client = Object(_ApolloContext__WEBPACK_IMPORTED_MODULE_2__["useApolloClient"])(overrideClient);
  var ssrManager = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_internal_SSRContext__WEBPACK_IMPORTED_MODULE_3__["SSRContext"]);
  var ssrInUse = ssr && ssrManager; // Skips when `skip: true` or SSRContext passed but `ssr: false`

  var shouldSkip = skip || ssrManager != null && !ssr;
  var fetchPolicy = ssrInUse && ( // Taken from https://github.com/apollographql/react-apollo/blob/2d7e48b7d0c26e792e1ed26e98bb84d8fba5bb8a/src/Query.tsx#L167-L169
  actualCachePolicy === 'network-only' || actualCachePolicy === 'cache-and-network') ? 'cache-first' : actualCachePolicy;
  var watchQueryOptions = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_6__["compact"])({
      context: context,
      errorPolicy: errorPolicy,
      fetchPolicy: fetchPolicy,
      fetchResults: fetchResults,
      metadata: metadata,
      notifyOnNetworkStatusChange: notifyOnNetworkStatusChange,
      pollInterval: pollInterval,
      query: query,
      variables: variables
    });
  }, [query, pollInterval, notifyOnNetworkStatusChange, context && Object(_utils__WEBPACK_IMPORTED_MODULE_6__["objToKey"])(context), metadata && Object(_utils__WEBPACK_IMPORTED_MODULE_6__["objToKey"])(metadata), variables && Object(_utils__WEBPACK_IMPORTED_MODULE_6__["objToKey"])(variables), fetchPolicy, errorPolicy, fetchResults]);
  var observableQuery = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return Object(_queryCache__WEBPACK_IMPORTED_MODULE_5__["getCachedObservableQuery"])(client, watchQueryOptions);
  }, [client, watchQueryOptions]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      responseId = _useState[0],
      setResponseId = _useState[1];

  var currentResult = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    var helpers = {
      fetchMore: observableQuery.fetchMore.bind(observableQuery),
      refetch: observableQuery.refetch.bind(observableQuery),
      startPolling: observableQuery.startPolling.bind(observableQuery),
      stopPolling: observableQuery.stopPolling.bind(observableQuery),
      updateQuery: observableQuery.updateQuery.bind(observableQuery)
    };
    var result = observableQuery.currentResult(); // return the old result data when there is an error

    var data = result.data;

    if (result.error || result.errors) {
      data = _extends({}, result.data, (observableQuery.getLastResult() || {}).data);
    }

    if (shouldSkip) {
      // Taken from https://github.com/apollographql/react-apollo/blob/5cb63b3625ce5e4a3d3e4ba132eaec2a38ef5d90/src/Query.tsx#L376-L381
      return _extends({}, helpers, {
        data: undefined,
        error: undefined,
        loading: false,
        networkStatus: undefined
      });
    }

    return _extends({}, helpers, {
      data: data,
      error: result.errors && result.errors.length > 0 ? new apollo_client__WEBPACK_IMPORTED_MODULE_0__["ApolloError"]({
        graphQLErrors: result.errors
      }) : result.error,
      errors: result.errors,
      loading: result.loading,
      // don't try to return `networkStatus` when suspense it's used
      // because it's unreliable in that case
      // https://github.com/trojanowski/react-apollo-hooks/pull/68
      networkStatus: suspend ? undefined : result.networkStatus,
      partial: result.partial
    });
  }, [shouldSkip, responseId, observableQuery]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (shouldSkip) {
      return;
    }

    var invalidateCurrentResult = function invalidateCurrentResult() {
      // A hack to get rid React warnings during tests. The default
      // implementation of `actHack` just invokes the callback immediately.
      // In tests, it's replaced with `act` from react-testing-library.
      // A better solution welcome.
      Object(_internal_actHack__WEBPACK_IMPORTED_MODULE_4__["default"])(function () {
        setResponseId(function (x) {
          return x + 1;
        });
      });
    };

    var subscription = observableQuery.subscribe(invalidateCurrentResult, invalidateCurrentResult);
    Object(_queryCache__WEBPACK_IMPORTED_MODULE_5__["invalidateCachedObservableQuery"])(client, watchQueryOptions);
    return function () {
      subscription.unsubscribe();
    };
  }, [shouldSkip, observableQuery]);
  ensureSupportedFetchPolicy(suspend, fetchPolicy);

  if (currentResult.partial) {
    if (suspend) {
      // throw a promise - use the react suspense to wait until the data is
      // available
      throw observableQuery.result();
    }

    if (ssrInUse) {
      ssrManager.register(observableQuery.result());
    }
  }

  return currentResult;
}

function ensureSupportedFetchPolicy(suspend, fetchPolicy) {
  if (suspend && fetchPolicy && fetchPolicy !== 'cache-first') {
    throw new Error("Fetch policy " + fetchPolicy + " is not supported without 'suspend: false'");
  }
}

/***/ }),

/***/ "./node_modules/react-apollo-hooks/es/useSubscription.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-apollo-hooks/es/useSubscription.js ***!
  \***************************************************************/
/*! exports provided: useSubscription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSubscription", function() { return useSubscription; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ApolloContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ApolloContext */ "./node_modules/react-apollo-hooks/es/ApolloContext.js");
/* harmony import */ var _internal_actHack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/actHack */ "./node_modules/react-apollo-hooks/es/internal/actHack.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./node_modules/react-apollo-hooks/es/utils.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





function useSubscription(query, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      onSubscriptionData = _ref.onSubscriptionData,
      overrideClient = _ref.client,
      options = _objectWithoutPropertiesLoose(_ref, ["onSubscriptionData", "client"]);

  var client = Object(_ApolloContext__WEBPACK_IMPORTED_MODULE_1__["useApolloClient"])(overrideClient);
  var onSubscriptionDataRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    loading: true
  }),
      result = _useState[0],
      setResultBase = _useState[1];

  onSubscriptionDataRef.current = onSubscriptionData;

  function setResult(newResult) {
    // A hack to get rid React warnings during tests.
    Object(_internal_actHack__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
      setResultBase(newResult);
    });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
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
  }, [query, options && Object(_utils__WEBPACK_IMPORTED_MODULE_3__["objToKey"])(options)]);
  return result;
}

/***/ }),

/***/ "./node_modules/react-apollo-hooks/es/utils.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-apollo-hooks/es/utils.js ***!
  \*****************************************************/
/*! exports provided: objToKey, isPromiseLike, compact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objToKey", function() { return objToKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPromiseLike", function() { return isPromiseLike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compact", function() { return compact; });
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isPlainObject */ "./node_modules/lodash/isPlainObject.js");
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_0__);

function objToKey(obj) {
  if (!lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_0___default()(obj)) {
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

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Page */ "./components/Page.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var react_apollo_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-apollo-hooks */ "./node_modules/react-apollo-hooks/es/index.js");
/* harmony import */ var _lib_withData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/withData */ "./lib/withData.js");

var _jsxFileName = "C:\\Users\\Bruno\\Documents\\Mosh Node\\wesbos\\Advanced-React\\sick-fits\\frontend\\pages\\_app.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



 // import { ApolloProvider } from '@apollo/react-hooks'




var MyApp =
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  function MyApp() {
    _classCallCheck(this, MyApp);

    return _possibleConstructorReturn(this, _getPrototypeOf(MyApp).apply(this, arguments));
  }

  _createClass(MyApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          apollo = _this$props.apollo,
          pageProps = _this$props.pageProps;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_4__["ApolloProvider"], {
        client: apollo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Page__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, _extends({}, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      })))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var Component, ctx, pageProps;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;
                pageProps = {};

                if (!Component.getInitialProps) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return Component.getInitialProps(ctx);

              case 5:
                pageProps = _context.sent;

              case 6:
                // this exposes the query to the user
                pageProps.query = ctx.query;
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_2___default.a);

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_withData__WEBPACK_IMPORTED_MODULE_6__["default"])(MyApp));
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/_app")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=_app.js.c9208f1ef9084d87f178.hot-update.js.map