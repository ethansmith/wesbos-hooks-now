webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var react_apollo_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo-hooks */ "./node_modules/react-apollo-hooks/es/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./User */ "./components/User.js");
var _jsxFileName = "C:\\Users\\Bruno\\Documents\\Mosh Node\\wesbos\\Advanced-React\\sick-fits\\frontend\\components\\AddToCart.js";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation ADD_TO_CART_MUTATION($id: ID!) {\n    addToCart(id: $id) {\n      id\n      item {\n        description\n        id\n        image\n        price\n        title\n      }\n      quantity\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// import { Mutation } from "react-apollo"



var ADD_TO_CART_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());

var AddToCart = function AddToCart(props) {
  var _useMutation = Object(react_apollo_hooks__WEBPACK_IMPORTED_MODULE_1__["useMutation"])({
    ADD_TO_CART_MUTATION: ADD_TO_CART_MUTATION
  }, {
    variables: {
      id: props.id
    }
  }, {
    refetchQueries: [{
      query: _User__WEBPACK_IMPORTED_MODULE_3__["CURRENT_USER_QUERY"]
    }]
  }, {
    update: function update() {
      return _update;
    }
  }),
      _useMutation2 = _slicedToArray(_useMutation, 2),
      addToCart = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      error = _useMutation2$.error,
      loading = _useMutation2$.loading,
      data = _useMutation2$.data;

  var _update = function _update(cache, payload) {
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

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: addToCart,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Add to Cart \uD83D\uDED2") // <Mutation
  //   optimisticResponse={{
  //     __typename: "Mutation",
  //     addToCart: {
  //       __typename: "CartItem",
  //       id: props.item.id,
  //       item: {
  //         __typename: "Item",
  //         description: props.item.description,
  //         id: props.item.id,
  //         image: props.item.image,
  //         price: props.item.price,
  //         title: props.item.title
  //       },
  //       quantity: 1
  //     }
  //   }}
  //   update={update}
  //   mutation={ADD_TO_CART_MUTATION}
  //   refetchQueries={[{ query: CURRENT_USER_QUERY }]}
  //   variables={{ id: props.item.id }}
  // >
  //   {(addToCart, { data, error, loading }) => (
  //     <button disabled={loading} onClick={addToCart}>
  //       Add{loading && "ing"} to Cart 🛒
  //     </button>
  //   )}
  // </Mutation>
  ;
};

/* harmony default export */ __webpack_exports__["default"] = (AddToCart);

/***/ })

})
//# sourceMappingURL=index.js.199903c7e74ca23a9c1f.hot-update.js.map