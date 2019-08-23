module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CURRENT_USER_QUERY; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query CURRENT_USER_QUERY {\n    me {\n      id\n      email\n      name\n      permissions\n      cart {\n        id\n        quantity\n        item {\n          id\n          title\n          price\n          image\n          description\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var CURRENT_USER_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());

var User = function User(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], _extends({}, props, {
    query: CURRENT_USER_QUERY
  }), function (payload) {
    return props.children(payload);
  });
};

/* harmony default export */ __webpack_exports__["b"] = (User);


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);



var ErrorStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ErrorMessage__ErrorStyles",
  componentId: "sc-11u5fgj-0"
})(["padding:2rem;background:white;margin:2rem 0;border:1px solid rgba(0,0,0,0.05);border-left:5px solid red;p{margin:0;font-weight:100;}strong{margin-right:1rem;}"]);

var DisplayError = function DisplayError(_ref) {
  var error = _ref.error;
  if (!error || !error.message) return null;

  if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {
    return error.networkError.result.errors.map(function (error, i) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ErrorStyles, {
        key: i
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        "data-test": "graphql-error"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Shoot!"), error.message.replace('GraphQL error: ', '')));
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ErrorStyles, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    "data-test": "graphql-error"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Shoot!"), error.message.replace('GraphQL error: ', '')));
};

DisplayError.defaultProps = {
  error: {}
};
/* harmony default export */ __webpack_exports__["a"] = (DisplayError);

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 9 */,
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (amount) {
  var options = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }; // if its a whole, dollar amount, leave off the .00

  if (amount % 100 === 0) options.minimumFractionDigits = 0;
  var formatter = new Intl.NumberFormat('en-US', options);
  return formatter.format(amount / 100);
});

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export endpoint */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return prodEndpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return perPage; });
// This is client side config only - don't put anything in here that shouldn't be public!
var endpoint = "http://localhost:4444";
var prodEndpoint = "https://backend.ethansmith.now.sh";
var perPage = 4;

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),
/* 17 */,
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return calcTotalPrice; });
function calcTotalPrice(cart) {
  return cart.reduce(function (tally, cartItem) {
    if (!cartItem.item) return tally;
    return tally + cartItem.quantity * cartItem.item.price;
  }, 0);
}

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-apollo-hooks");

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var SickButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "SickButton",
  componentId: "l04z44-0"
})(["background:red;color:white;font-weight:500;border:0;border-radius:0;text-transform:uppercase;font-size:2rem;padding:0.8rem 1.5rem;transform:skew(-2deg);display:inline-block;transition:all 0.5s;&[disabled]{opacity:0.5;}"]);
/* harmony default export */ __webpack_exports__["a"] = (SickButton);

/***/ }),
/* 21 */,
/* 22 */,
/* 23 */
/***/ (function(module, exports) {

module.exports = require("grommet");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("downshift");

/***/ }),
/* 26 */,
/* 27 */
/***/ (function(module, exports) {

module.exports = require("react-stripe-checkout");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("lodash.debounce");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("next-with-apollo");

/***/ }),
/* 31 */,
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(51);


/***/ }),
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(5);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "grommet"
var external_grommet_ = __webpack_require__(23);

// EXTERNAL MODULE: external "next/app"
var app_ = __webpack_require__(24);
var app_default = /*#__PURE__*/__webpack_require__.n(app_);

// EXTERNAL MODULE: external "react-apollo"
var external_react_apollo_ = __webpack_require__(2);

// EXTERNAL MODULE: external "react-apollo-hooks"
var external_react_apollo_hooks_ = __webpack_require__(19);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(7);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(12);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "nprogress"
var external_nprogress_ = __webpack_require__(16);
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_);

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__(3);
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// CONCATENATED MODULE: ./components/styles/CartStyles.js

var CartStyles = external_styled_components_default.a.div.withConfig({
  displayName: "CartStyles",
  componentId: "sc-1tvog53-0"
})(["padding:20px;position:relative;background:white;position:fixed;height:100%;top:0;right:0;width:40%;min-width:500px;bottom:0;transform:translateX(100%);transition:all 0.3s;box-shadow:0 0 10px 3px rgba(0,0,0,0.2);z-index:5;display:grid;grid-template-rows:auto 1fr auto;", ";header{border-bottom:5px solid ", ";margin-bottom:2rem;padding-bottom:2rem;}footer{border-top:10px double ", ";margin-top:2rem;padding-top:2rem;display:grid;grid-template-columns:auto auto;align-items:center;font-size:3rem;font-weight:900;p{margin:0;}}ul{margin:0;padding:0;list-style:none;overflow:scroll;}"], function (props) {
  return props.open && "transform: translateX(0);";
}, function (props) {
  return props.theme.black;
}, function (props) {
  return props.theme.black;
});
/* harmony default export */ var styles_CartStyles = (CartStyles);
// CONCATENATED MODULE: ./components/styles/Supreme.js

var Supreme = external_styled_components_default.a.h3.withConfig({
  displayName: "Supreme",
  componentId: "xv30qb-0"
})(["background:", ";color:white;display:inline-block;padding:4px 5px;transform:skew(-3deg);margin:0;font-size:4rem;"], function (props) {
  return props.theme.red;
});
/* harmony default export */ var styles_Supreme = (Supreme);
// CONCATENATED MODULE: ./components/styles/CloseButton.js

var CloseButton = external_styled_components_default.a.button.withConfig({
  displayName: "CloseButton",
  componentId: "sc-1seb878-0"
})(["background:black;color:white;font-size:3rem;border:0;position:absolute;z-index:2;right:0;"]);
/* harmony default export */ var styles_CloseButton = (CloseButton);
// EXTERNAL MODULE: ./components/styles/SickButton.js
var SickButton = __webpack_require__(20);

// EXTERNAL MODULE: ./components/User.js
var User = __webpack_require__(4);

// EXTERNAL MODULE: ./lib/formatMoney.js
var formatMoney = __webpack_require__(10);

// CONCATENATED MODULE: ./components/RemoveFromCart.js


function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation REMOVE_FROM_CART_MUTATION($id: ID!) {\n    removeFromCart(id: $id) {\n      id\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var REMOVE_FROM_CART_MUTATION = external_graphql_tag_default()(_templateObject());
var BigButton = external_styled_components_default.a.button.withConfig({
  displayName: "RemoveFromCart__BigButton",
  componentId: "emvtd6-0"
})(["font-size:3rem;background:none;border:0;&:hover{color:", ";cursor:pointer;}"], function (props) {
  return props.theme.red;
});

var RemoveFromCart_RemoveFromCart = function RemoveFromCart(props) {
  // this gets called as soon as we get a response back from the server after a mutation has been performed
  var update = function update(cache, payload) {
    // read cache
    var data = cache.readQuery({
      query: User["a" /* CURRENT_USER_QUERY */]
    }); // remove item from the cart

    var cartItemId = payload.data.removeFromCart.id; // what we get back from the mutation

    data.me.cart = data.me.cart.filter(function (eachCartItem) {
      return eachCartItem.id != cartItemId;
    }); // write it back to the cache

    cache.writeQuery({
      query: User["a" /* CURRENT_USER_QUERY */],
      data: data
    });
  };

  return external_react_default.a.createElement(external_react_apollo_["Mutation"], {
    optimisticResponse: {
      __typename: 'Mutation',
      removeFromCart: {
        __typename: 'CartItem',
        id: props.id
      }
    },
    update: update,
    variables: {
      id: props.id
    },
    mutation: REMOVE_FROM_CART_MUTATION
  }, function (removeFromCart, _ref) {
    var data = _ref.data,
        error = _ref.error,
        loading = _ref.loading;
    return external_react_default.a.createElement(BigButton, {
      disabled: loading,
      onClick: function onClick() {
        return removeFromCart();
      },
      title: "Delete Item"
    }, "\xD7");
  });
};

/* harmony default export */ var components_RemoveFromCart = (RemoveFromCart_RemoveFromCart);
// CONCATENATED MODULE: ./components/CartItem.js




var CartItemStyles = external_styled_components_default.a.li.withConfig({
  displayName: "CartItem__CartItemStyles",
  componentId: "sc-1rm9l7o-0"
})(["padding:1rem 0;border-bottom:1px solid ", ";display:grid;align-items:center;grid-template-columns:auto 1fr auto;img{margin-right:10px;}h3,p{margin:0;}"], function (props) {
  return props.theme.lightgrey;
});

var CartItem_CartItem = function CartItem(props) {
  if (!props.each.item) return external_react_default.a.createElement(CartItemStyles, null, external_react_default.a.createElement("p", null, "This item has been removed!"), external_react_default.a.createElement(components_RemoveFromCart, {
    id: props.each.id
  }));
  return external_react_default.a.createElement(CartItemStyles, null, external_react_default.a.createElement("img", {
    src: props.each.item.image,
    width: "100",
    alt: props.each.item.title
  }), external_react_default.a.createElement("div", {
    className: "cart-item-details"
  }, external_react_default.a.createElement("h3", null, props.each.item.title), external_react_default.a.createElement("p", null, Object(formatMoney["a" /* default */])(props.each.item.price * props.each.quantity), " -", " ", external_react_default.a.createElement("em", null, props.each.quantity, " \xD7 ", Object(formatMoney["a" /* default */])(props.each.item.price), " each"), " "), external_react_default.a.createElement(components_RemoveFromCart, {
    id: props.each.id
  })));
};

/* harmony default export */ var components_CartItem = (CartItem_CartItem);
// EXTERNAL MODULE: ./lib/calcTotalPrice.js
var calcTotalPrice = __webpack_require__(18);

// EXTERNAL MODULE: external "react-stripe-checkout"
var external_react_stripe_checkout_ = __webpack_require__(27);
var external_react_stripe_checkout_default = /*#__PURE__*/__webpack_require__.n(external_react_stripe_checkout_);

// EXTERNAL MODULE: ./components/ErrorMessage.js
var ErrorMessage = __webpack_require__(6);

// CONCATENATED MODULE: ./components/TakeMyMoney.js



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function TakeMyMoney_templateObject() {
  var data = TakeMyMoney_taggedTemplateLiteral(["\n  mutation CREATE_ORDER_MUTATION($token: String!) {\n    createOrder(token: $token) {\n      id\n      charge\n      total\n      items {\n        id\n        title\n      }\n    }\n  }\n"]);

  TakeMyMoney_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function TakeMyMoney_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









var CREATE_ORDER_MUTATION = external_graphql_tag_default()(TakeMyMoney_templateObject());

var TakeMyMoney_TakeMyMoney = function TakeMyMoney(props) {
  var totalItems = function totalItems(me) {
    return me.cart.reduce(function (tally, cartItem) {
      return tally + cartItem.quantity;
    }, 0);
  };

  var onToken =
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee(res, createOrder) {
      var order;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              external_nprogress_default.a.start(); // manually call the mutation once we have the stripe token

              _context.next = 3;
              return createOrder({
                variables: {
                  token: res.id
                }
              }).catch(function (err) {
                alert(err.message);
              });

            case 3:
              order = _context.sent;
              router_default.a.push({
                pathname: '/order',
                query: {
                  id: order.data.createOrder.id
                }
              });

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onToken(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  return external_react_default.a.createElement(User["b" /* default */], null, function (_ref2) {
    var me = _ref2.data.me;
    return external_react_default.a.createElement(external_react_apollo_["Mutation"], {
      mutation: CREATE_ORDER_MUTATION,
      refetchQueries: [{
        query: User["a" /* CURRENT_USER_QUERY */]
      }]
    }, function (createOrder) {
      return external_react_default.a.createElement(external_react_stripe_checkout_default.a, {
        amount: Object(calcTotalPrice["a" /* default */])(me.cart),
        name: "Sick Fits",
        description: "Your order of ".concat(totalItems(me), " items"),
        stripeKey: "pk_test_s5G4igMtK9KvmQtbRd0L18yR00ALa4imnQ",
        image: me.cart.length && me.cart[0].item && me.cart[0].item.image,
        currency: "USD",
        email: me.email,
        token: function token(res) {
          return onToken(res, createOrder);
        }
      }, props.children);
    });
  });
};

/* harmony default export */ var components_TakeMyMoney = (TakeMyMoney_TakeMyMoney);
// CONCATENATED MODULE: ./components/Cart.js


function _templateObject2() {
  var data = Cart_taggedTemplateLiteral(["\n  mutation {\n    toggleCart @client\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function Cart_templateObject() {
  var data = Cart_taggedTemplateLiteral(["\n  query {\n    cartOpen @client\n  }\n"]);

  Cart_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function Cart_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }













var LOCAL_STATE_QUERY = external_graphql_tag_default()(Cart_templateObject());
var TOGGLE_CART_MUTATION = external_graphql_tag_default()(_templateObject2());

var Cart_Cart = function Cart(props) {
  return external_react_default.a.createElement(User["b" /* default */], null, function (_ref) {
    var me = _ref.data.me;
    if (!me) return null;
    console.log(me);
    return external_react_default.a.createElement(external_react_apollo_["Mutation"], {
      mutation: TOGGLE_CART_MUTATION
    }, function (toggleCart) {
      return external_react_default.a.createElement(external_react_apollo_["Query"], {
        query: LOCAL_STATE_QUERY
      }, function (_ref2) {
        var data = _ref2.data;
        return external_react_default.a.createElement(styles_CartStyles, {
          open: data.cartOpen
        }, external_react_default.a.createElement("header", null, external_react_default.a.createElement(styles_CloseButton, {
          onClick: toggleCart,
          title: "close"
        }, "\xD7"), external_react_default.a.createElement(styles_Supreme, null, me.name, "'s Cart"), external_react_default.a.createElement("p", null, "You have ", me.cart.length, " item", me.cart.length != 1 && "s", " ", "in your cart")), external_react_default.a.createElement("ul", null, me.cart.map(function (each) {
          return external_react_default.a.createElement(components_CartItem, {
            key: each.id,
            each: each
          });
        })), external_react_default.a.createElement("footer", null, external_react_default.a.createElement("p", null, Object(formatMoney["a" /* default */])(Object(calcTotalPrice["a" /* default */])(me.cart))), external_react_default.a.createElement(link_default.a, {
          href: {
            pathname: '/checkout'
          }
        }, external_react_default.a.createElement(SickButton["a" /* default */], {
          onClick: toggleCart
        }, me.cart.length ? "Checkout" : "Add some items!"))));
      });
    });
  });
};

/* harmony default export */ var components_Cart = (Cart_Cart);

// CONCATENATED MODULE: ./components/styles/NavStyles.js

var NavStyles = external_styled_components_default.a.ul.withConfig({
  displayName: "NavStyles",
  componentId: "sc-11c0d2g-0"
})(["margin:0;padding:0;display:flex;justify-self:end;font-size:2rem;a,button{padding:1rem 3rem;display:flex;align-items:center;position:relative;text-transform:uppercase;font-weight:900;font-size:1em;background:none;border:0;cursor:pointer;@media (max-width:700px){font-size:10px;padding:0 10px;}&:before{content:'';width:2px;background:", ";height:100%;left:0;position:absolute;transform:skew(-20deg);top:0;bottom:0;}&:after{height:2px;background:red;content:'';width:0;position:absolute;transform:translateX(-50%);transition:width 0.4s;transition-timing-function:cubic-bezier(1,-0.65,0,2.31);left:50%;margin-top:2rem;}&:hover,&:focus{outline:none;&:after{width:calc(100% - 60px);}@media (max-width:700px){width:calc(100% - 10px);}}}@media (max-width:1300px){border-top:1px solid ", ";width:100%;justify-content:center;font-size:1.5rem;}"], function (props) {
  return props.theme.lightgrey;
}, function (props) {
  return props.theme.lightgrey;
});
/* harmony default export */ var styles_NavStyles = (NavStyles);
// CONCATENATED MODULE: ./components/SignOut.js


function SignOut_templateObject() {
  var data = SignOut_taggedTemplateLiteral(["\n  mutation SIGN_OUT_MUTATION {\n    signout {\n      message\n    }\n  }\n"]);

  SignOut_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function SignOut_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var SIGN_OUT_MUTATION = external_graphql_tag_default()(SignOut_templateObject());

var SignOut_SignOut = function SignOut(props) {
  return external_react_default.a.createElement(external_react_apollo_["Mutation"], {
    mutation: SIGN_OUT_MUTATION,
    refetchQueries: [{
      query: User["a" /* CURRENT_USER_QUERY */]
    }]
  }, function (signout) {
    return external_react_default.a.createElement("button", {
      onClick: signout
    }, "Log Out!");
  });
};

/* harmony default export */ var components_SignOut = (SignOut_SignOut);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(8);

// CONCATENATED MODULE: ./components/CartCount.js



var Dot = external_styled_components_default.a.div.withConfig({
  displayName: "CartCount__Dot",
  componentId: "xxvp4g-0"
})(["background:", ";color:white;border-radius:50%;padding:0.5rem;line-height:2rem;min-width:3rem;margin-left:1rem;font-weight:100;font-feature-settings:'tnum';font-variant-numeric:tabular-nums;"], function (props) {
  return props.theme.red;
});

var CartCount_CartCount = function CartCount(props) {
  return external_react_default.a.createElement(Dot, null, props.count);
};

/* harmony default export */ var components_CartCount = (CartCount_CartCount);
// CONCATENATED MODULE: ./components/Nav.js









var Nav_Nav = function Nav() {
  return external_react_default.a.createElement(User["b" /* default */], null, function (_ref) {
    var me = _ref.data.me;
    return external_react_default.a.createElement(styles_NavStyles, null, external_react_default.a.createElement(link_default.a, {
      href: "/items"
    }, external_react_default.a.createElement("a", null, "Shop")), me && external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(link_default.a, {
      href: "/sell"
    }, external_react_default.a.createElement("a", null, "Sell")), external_react_default.a.createElement(link_default.a, {
      href: "/orders"
    }, external_react_default.a.createElement("a", null, "Orders")), external_react_default.a.createElement(link_default.a, {
      href: "/me"
    }, external_react_default.a.createElement("a", null, "Account")), external_react_default.a.createElement(components_SignOut, null), external_react_default.a.createElement(external_react_apollo_["Mutation"], {
      mutation: TOGGLE_CART_MUTATION
    }, function (toggleCart) {
      return external_react_default.a.createElement("button", {
        onClick: toggleCart
      }, "My Cart", external_react_default.a.createElement(components_CartCount, {
        count: me.cart.reduce(function (tally, cartItem) {
          return tally + cartItem.quantity;
        }, 0)
      }));
    })), !me && external_react_default.a.createElement(link_default.a, {
      href: "/signup"
    }, external_react_default.a.createElement("a", null, "Sign In")));
  });
};

/* harmony default export */ var components_Nav = (Nav_Nav);
// EXTERNAL MODULE: external "downshift"
var external_downshift_ = __webpack_require__(25);
var external_downshift_default = /*#__PURE__*/__webpack_require__.n(external_downshift_);

// EXTERNAL MODULE: external "lodash.debounce"
var external_lodash_debounce_ = __webpack_require__(28);
var external_lodash_debounce_default = /*#__PURE__*/__webpack_require__.n(external_lodash_debounce_);

// CONCATENATED MODULE: ./components/styles/DropDown.js

var DropDown = external_styled_components_default.a.div.withConfig({
  displayName: "DropDown",
  componentId: "n5d97g-0"
})(["position:absolute;width:100%;z-index:2;border:1px solid ", ";"], function (props) {
  return props.theme.lightgrey;
});
var DropDownItem = external_styled_components_default.a.div.withConfig({
  displayName: "DropDown__DropDownItem",
  componentId: "n5d97g-1"
})(["border-bottom:1px solid ", ";background:", ";padding:1rem;transition:all 0.2s;", ";display:flex;align-items:center;border-left:10px solid ", ";img{margin-right:10px;}"], function (props) {
  return props.theme.lightgrey;
}, function (props) {
  return props.highlighted ? '#f7f7f7' : 'white';
}, function (props) {
  return props.highlighted ? 'padding-left: 2rem;' : null;
}, function (props) {
  return props.highlighted ? props.theme.lightgrey : 'white';
});
var glow = Object(external_styled_components_["keyframes"])(["from{box-shadow:0 0 0px yellow;}to{box-shadow:0 0 10px 1px yellow;}"]);
var SearchStyles = external_styled_components_default.a.div.withConfig({
  displayName: "DropDown__SearchStyles",
  componentId: "n5d97g-2"
})(["position:relative;input{width:100%;padding:10px;border:0;font-size:2rem;&.loading{animation:", " 0.5s ease-in-out infinite alternate;}}"], glow);

// CONCATENATED MODULE: ./components/Search.js



function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Search_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function Search_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { Search_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { Search_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Search_templateObject() {
  var data = Search_taggedTemplateLiteral(["\n  query SEARCH_ITEMS_QUERY($searchTerm: String!) {\n    items(\n      where: {\n        OR: [\n          { title_contains: $searchTerm }\n          { description_contains: $searchTerm }\n        ]\n      }\n    ) {\n      id\n      image\n      title\n    }\n  }\n"]);

  Search_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function Search_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var SEARCH_ITEMS_QUERY = external_graphql_tag_default()(Search_templateObject());

var Search_routeToItem = function routeToItem(item) {
  router_default.a.push({
    pathname: '/item',
    query: {
      id: item.id
    }
  });
};

var Search_AutoComplete = function AutoComplete(props) {
  var _useState = Object(external_react_["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      items = _useState2[0],
      setItems = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _onChange = external_lodash_debounce_default()(
  /*#__PURE__*/
  function () {
    var _ref = Search_asyncToGenerator(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee(e, client) {
      var res;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setLoading(true); // manually query apollo client

              _context.next = 3;
              return client.query({
                query: SEARCH_ITEMS_QUERY,
                variables: {
                  searchTerm: e.target.value
                }
              });

            case 3:
              res = _context.sent;
              setItems(res.data.items);
              setLoading(false);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }(), 100);

  Object(external_downshift_["resetIdCounter"])();
  return external_react_default.a.createElement(SearchStyles, null, external_react_default.a.createElement(external_downshift_default.a, {
    onChange: Search_routeToItem,
    itemToString: function itemToString(item) {
      return item === null ? "" : item.title;
    }
  }, function (_ref2) {
    var getInputProps = _ref2.getInputProps,
        getItemProps = _ref2.getItemProps,
        isOpen = _ref2.isOpen,
        inputValue = _ref2.inputValue,
        highlightedIndex = _ref2.highlightedIndex;
    return external_react_default.a.createElement("div", null, external_react_default.a.createElement(external_react_apollo_["ApolloConsumer"], null, function (client) {
      return external_react_default.a.createElement("input", getInputProps({
        type: "search",
        placeholder: "Search for An Item",
        id: "search",
        className: loading ? "loading" : "",
        onChange: function onChange(e) {
          e.persist();

          _onChange(e, client);
        }
      }));
    }), isOpen && external_react_default.a.createElement(DropDown, null, items.map(function (item, index) {
      return external_react_default.a.createElement(DropDownItem, _extends({}, getItemProps({
        item: item
      }), {
        key: item.id,
        highlighted: index === highlightedIndex
      }), external_react_default.a.createElement("img", {
        width: "50",
        src: item.image,
        alt: item.title
      }), external_react_default.a.createElement("p", null, item.title));
    }), !items.length && loading === false && external_react_default.a.createElement(DropDownItem, null, "Nothing found for ", inputValue)));
  }));
};

/* harmony default export */ var Search = (Search_AutoComplete);
// CONCATENATED MODULE: ./components/Header.js








var _require = __webpack_require__(1),
    styled = _require.default,
    css = _require.css;

router_default.a.onRouteChangeStart = function () {
  external_nprogress_default.a.start();
};

router_default.a.onRouteChangeComplete = function () {
  external_nprogress_default.a.done();
};

router_default.a.onRouteChangeError = function () {
  external_nprogress_default.a.done();
};

var Logo = styled.h1.withConfig({
  displayName: "Header__Logo",
  componentId: "sc-2cpreo-0"
})(["font-size:4rem;margin-left:2rem;position:relative;z-index:2;transform:skew(-7deg);a{padding:0.5rem 1rem;background:", ";color:white;text-transform:uppercase;text-decoration:none;}@media (max-width:1300px){margin:0;text-align:center;}"], function (props) {
  return props.theme.red;
});
var StyledHeader = styled.header.withConfig({
  displayName: "Header__StyledHeader",
  componentId: "sc-2cpreo-1"
})([".bar{border-bottom:10px solid ", ";display:grid;grid-template-columns:auto 1fr;justify-content:space-between;align-items:stretch;@media (max-width:1300px){grid-template-columns:1fr;justify-content:center;}}.sub-bar{display:grid;grid-template-columns:1fr auto;border-bottom:1px solid ", ";}"], function (props) {
  return props.theme.black;
}, function (props) {
  return props.theme.lightgrey;
});

var Header_Header = function Header() {
  return external_react_default.a.createElement(StyledHeader, null, external_react_default.a.createElement("div", {
    className: "bar"
  }, external_react_default.a.createElement(Logo, null, external_react_default.a.createElement(link_default.a, {
    href: "/"
  }, external_react_default.a.createElement("a", null, "Provision"))), external_react_default.a.createElement(components_Nav, null)), external_react_default.a.createElement("div", {
    className: "sub-bar"
  }, external_react_default.a.createElement(Search, null)), external_react_default.a.createElement(components_Cart, null));
};

/* harmony default export */ var components_Header = (Header_Header);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(11);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/Meta.js



var Meta_Meta = function Meta() {
  return external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), external_react_default.a.createElement("meta", {
    charSet: "utf-8"
  }), external_react_default.a.createElement("link", {
    rel: "shortcut icon",
    href: "/static/favicon.png"
  }), external_react_default.a.createElement("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/static/nprogress.css"
  }), external_react_default.a.createElement("title", null, "Provision"));
};

/* harmony default export */ var components_Meta = (Meta_Meta);
// CONCATENATED MODULE: ./components/Page.js
function Page_templateObject() {
  var data = Page_taggedTemplateLiteral(["\n  @font-face {\n    font-family: 'radnika_next';\n    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');\n    font-weight: normal;\n    font-style: normal;\n  }\n  html {\n    box-sizing: border-box;\n    font-size: 10px;\n  }\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n  body {\n    padding: 0;\n    margin: 0;\n    font-size: 1.5rem;\n    line-height: 2;\n    font-family: 'radnika_next';\n  }\n  a {\n    text-decoration: none;\n    color: ", ";\n  }\n  button {  font-family: 'radnika_next'; }\n"]);

  Page_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function Page_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)'
};
var StyledPage = external_styled_components_default.a.div.withConfig({
  displayName: "Page__StyledPage",
  componentId: "sc-4u7a64-0"
})(["background:white;color:", ";"], function (props) {
  return props.theme.black;
});
var Inner = external_styled_components_default.a.div.withConfig({
  displayName: "Page__Inner",
  componentId: "sc-4u7a64-1"
})(["max-width:", ";margin:0 auto;padding:2rem;"], function (props) {
  return props.theme.maxWidth;
});
var GlobalStyle = Object(external_styled_components_["createGlobalStyle"])(Page_templateObject(), theme.black);

var Page_Page = function Page(props) {
  return external_react_default.a.createElement(external_styled_components_["ThemeProvider"], {
    theme: theme
  }, external_react_default.a.createElement(StyledPage, null, external_react_default.a.createElement(GlobalStyle, null), external_react_default.a.createElement(components_Meta, null), external_react_default.a.createElement(components_Header, null), external_react_default.a.createElement(Inner, null, props.children)));
};

/* harmony default export */ var components_Page = (Page_Page);
// EXTERNAL MODULE: external "apollo-boost"
var external_apollo_boost_ = __webpack_require__(29);
var external_apollo_boost_default = /*#__PURE__*/__webpack_require__.n(external_apollo_boost_);

// EXTERNAL MODULE: external "next-with-apollo"
var external_next_with_apollo_ = __webpack_require__(30);
var external_next_with_apollo_default = /*#__PURE__*/__webpack_require__.n(external_next_with_apollo_);

// EXTERNAL MODULE: ./config.js
var config = __webpack_require__(13);

// CONCATENATED MODULE: ./lib/withData.js





function createClient(_ref) {
  var headers = _ref.headers;
  return new external_apollo_boost_default.a({
    uri:  false ? undefined : config["b" /* prodEndpoint */],
    request: function request(operation) {
      operation.setContext({
        fetchOptions: {
          credentials: 'include'
        },
        headers: headers
      });
    },
    // local data
    clientState: {
      resolvers: {
        Mutation: {
          toggleCart: function toggleCart(_, variables, _ref2) {
            var cache = _ref2.cache;

            // read the cartOpen value from the cache
            var _cache$readQuery = cache.readQuery({
              query: LOCAL_STATE_QUERY
            }),
                cartOpen = _cache$readQuery.cartOpen; // write the cart state to the opposite


            var data = {
              data: {
                cartOpen: !cartOpen
              }
            };
            cache.writeData(data);
            return data;
          }
        }
      },
      defaults: {
        cartOpen: false
      }
    }
  });
}

/* harmony default export */ var withData = (external_next_with_apollo_default()(createClient));
// CONCATENATED MODULE: ./pages/_app.js



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _app_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _app_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { _app_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { _app_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



 // import { ApolloProvider } from '@apollo/react-hooks'
// Leave react-apollo-hooks active for now, until I figure out how to get props to propagate down with react-apollo, instead





var _app_MyApp =
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
      return external_react_default.a.createElement(app_["Container"], null, external_react_default.a.createElement(external_react_apollo_["ApolloProvider"], {
        client: apollo
      }, external_react_default.a.createElement(external_react_apollo_hooks_["ApolloProvider"], {
        client: apollo
      }, external_react_default.a.createElement(external_grommet_["Grommet"], {
        theme: external_grommet_["grommet"]
      }, external_react_default.a.createElement(components_Page, null, external_react_default.a.createElement(Component, pageProps))))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _app_asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(_ref) {
        var Component, ctx, pageProps;
        return regenerator_default.a.wrap(function _callee$(_context) {
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
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return MyApp;
}(app_default.a);

/* harmony default export */ var _app = __webpack_exports__["default"] = (withData(_app_MyApp));

/***/ })
/******/ ]);