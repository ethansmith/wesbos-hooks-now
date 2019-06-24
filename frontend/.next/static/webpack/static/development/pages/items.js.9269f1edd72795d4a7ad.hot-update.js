webpackHotUpdate("static\\development\\pages\\items.js",{

/***/ "./components/AddToCart.js":
/*!*********************************!*\
  !*** ./components/AddToCart.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./User */ "./components/User.js");
var _jsxFileName = "C:\\Users\\Bruno\\Documents\\Mosh Node\\wesbos\\Advanced-React\\sick-fits\\frontend\\components\\AddToCart.js";


function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation ADD_TO_CART_MUTATION($id: ID!) {\n    addToCart(id: $id) {\n      id\n      item {\n        description\n        id\n        image\n        price\n        title\n      }\n      quantity\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var ADD_TO_CART_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());

var AddToCart = function AddToCart(props) {
  var update = function update(cache, payload) {
    var data = cache.readQuery({
      query: _User__WEBPACK_IMPORTED_MODULE_3__["CURRENT_USER_QUERY"]
    });
    var cartItem = payload.data.addToCart;

    if (!data.me.cart.find(function (eachItem) {
      return eachItem.item.id === props.item.id;
    })) {
      cartItem.quantity = 1;
      data.me.cart.push(cartItem);
    } else {//   data.me.cart.find(eachItem => eachItem.item.id === props.item.id)
      //     .quantity++
    }

    cache.writeQuery({
      query: _User__WEBPACK_IMPORTED_MODULE_3__["CURRENT_USER_QUERY"],
      data: data
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Mutation"], {
    optimisticResponse: {
      __typename: "Mutation",
      addToCart: {
        __typename: "CartItem",
        id: props.item.id,
        item: {
          __typename: "Item",
          description: props.item.description,
          id: props.item.id,
          image: props.item.image,
          price: props.item.price,
          title: props.item.title
        },
        quantity: 1
      }
    },
    update: update,
    mutation: ADD_TO_CART_MUTATION,
    refetchQueries: [{
      query: _User__WEBPACK_IMPORTED_MODULE_3__["CURRENT_USER_QUERY"]
    }],
    variables: {
      id: props.item.id
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, function (addToCart, _ref) {
    var data = _ref.data,
        error = _ref.error,
        loading = _ref.loading;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      disabled: loading,
      onClick: addToCart,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, "Add", loading && "ing", " to Cart \uD83D\uDED2");
  });
};

/* harmony default export */ __webpack_exports__["default"] = (AddToCart);

/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
false,

/***/ "./node_modules/lodash/_baseGetTag.js":
false,

/***/ "./node_modules/lodash/_freeGlobal.js":
false,

/***/ "./node_modules/lodash/_getPrototype.js":
false,

/***/ "./node_modules/lodash/_getRawTag.js":
false,

/***/ "./node_modules/lodash/_objectToString.js":
false,

/***/ "./node_modules/lodash/_overArg.js":
false,

/***/ "./node_modules/lodash/_root.js":
false,

/***/ "./node_modules/lodash/isObjectLike.js":
false,

/***/ "./node_modules/lodash/isPlainObject.js":
false,

/***/ "./node_modules/react-apollo-hooks/es/ApolloContext.js":
false,

/***/ "./node_modules/react-apollo-hooks/es/SuspenseSSR.js":
false,

/***/ "./node_modules/react-apollo-hooks/es/getMarkupFromTree.js":
false,

/***/ "./node_modules/react-apollo-hooks/es/index.js":
false,

/***/ "./node_modules/react-apollo-hooks/es/internal/SSRContext.js":
false,

/***/ "./node_modules/react-apollo-hooks/es/internal/actHack.js":
false,

/***/ "./node_modules/react-apollo-hooks/es/queryCache.js":
false,

/***/ "./node_modules/react-apollo-hooks/es/useMutation.js":
false,

/***/ "./node_modules/react-apollo-hooks/es/useQuery.js":
false,

/***/ "./node_modules/react-apollo-hooks/es/useSubscription.js":
false,

/***/ "./node_modules/react-apollo-hooks/es/utils.js":
false

})
//# sourceMappingURL=items.js.9269f1edd72795d4a7ad.hot-update.js.map