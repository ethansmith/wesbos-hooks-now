webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/ErrorMessage.js":
false,

/***/ "./components/TakeMyMoney.js":
/*!***********************************!*\
  !*** ./components/TakeMyMoney.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var react_stripe_checkout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-stripe-checkout */ "./node_modules/react-stripe-checkout/dist/main.js");
/* harmony import */ var react_stripe_checkout__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_stripe_checkout__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_calcTotalPrice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/calcTotalPrice */ "./lib/calcTotalPrice.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./User */ "./components/User.js");



var _jsxFileName = "/Users/ethan/Sites/wpx/wesbos-hooks-now/frontend/components/TakeMyMoney.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  mutation CREATE_ORDER_MUTATION($token: String!) {\n    createOrder(token: $token) {\n      id\n      charge\n      total\n      items {\n        id\n        title\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var CREATE_ORDER_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject());

var TakeMyMoney = function TakeMyMoney(props) {
  var totalItems = function totalItems(me) {
    return me.cart.reduce(function (tally, cartItem) {
      return tally + cartItem.quantity;
    }, 0);
  };

  var onToken =
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(res, createOrder) {
      var order;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              nprogress__WEBPACK_IMPORTED_MODULE_6___default.a.start(); // manually call the mutation once we have the stripe token

              _context.next = 3;
              return createOrder({
                variables: {
                  token: res.id
                }
              })["catch"](function (err) {
                alert(err.message);
              });

            case 3:
              order = _context.sent;
              next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push({
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

  return __jsx(_User__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, function (_ref2) {
    var me = _ref2.data.me;
    return __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_7__["Mutation"], {
      mutation: CREATE_ORDER_MUTATION,
      refetchQueries: [{
        query: _User__WEBPACK_IMPORTED_MODULE_10__["CURRENT_USER_QUERY"]
      }],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, function (createOrder) {
      return __jsx(react_stripe_checkout__WEBPACK_IMPORTED_MODULE_8___default.a, {
        amount: Object(_lib_calcTotalPrice__WEBPACK_IMPORTED_MODULE_9__["default"])(me.cart),
        name: "Sick Fits",
        description: "Your order of ".concat(totalItems(me), " items"),
        stripeKey: "pk_test_PkButKb8kGlsoCoMKm6UBcjY00fxG82fbX",
        image: me.cart.length && me.cart[0].item && me.cart[0].item.image,
        currency: "USD",
        email: me.email,
        token: function token(res) {
          return onToken(res, createOrder);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, props.children);
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (TakeMyMoney);

/***/ })

})
//# sourceMappingURL=_app.js.d1b332d8399d3e0c57c2.hot-update.js.map