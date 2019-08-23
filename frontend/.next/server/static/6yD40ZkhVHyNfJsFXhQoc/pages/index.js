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
/******/ 	return __webpack_require__(__webpack_require__.s = 36);
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
/* 5 */,
/* 6 */,
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
/* 12 */,
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
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(7);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "react-apollo"
var external_react_apollo_ = __webpack_require__(2);

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__(3);
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(8);

// CONCATENATED MODULE: ./components/styles/Title.js

var Title = external_styled_components_default.a.h3.withConfig({
  displayName: "Title",
  componentId: "sc-16nq74k-0"
})(["margin:0 1rem;text-align:center;transform:skew(-5deg) rotate(-1deg);margin-top:-3rem;text-shadow:2px 2px 0 rgba(0,0,0,0.1);a{background:", ";display:inline;line-height:1.3;font-size:4rem;text-align:center;color:white;padding:0 1rem;}"], function (props) {
  return props.theme.red;
});
/* harmony default export */ var styles_Title = (Title);
// CONCATENATED MODULE: ./components/styles/ItemStyles.js

var ItemStyles_Item = external_styled_components_default.a.div.withConfig({
  displayName: "ItemStyles__Item",
  componentId: "sc-16pk14u-0"
})(["background:white;border:1px solid ", ";box-shadow:", ";position:relative;display:flex;flex-direction:column;img{width:100%;height:400px;object-fit:cover;}p{font-size:12px;line-height:2;font-weight:300;flex-grow:1;padding:0 3rem;font-size:1.5rem;}.buttonList{display:grid;width:100%;border-top:1px solid ", ";grid-template-columns:repeat(auto-fit,minmax(100px,1fr));grid-gap:1px;background:", ";& > *{background:white;border:0;font-size:1rem;padding:1rem;}}"], function (props) {
  return props.theme.offWhite;
}, function (props) {
  return props.theme.bs;
}, function (props) {
  return props.theme.lightgrey;
}, function (props) {
  return props.theme.lightgrey;
});
/* harmony default export */ var ItemStyles = (ItemStyles_Item);
// CONCATENATED MODULE: ./components/styles/PriceTag.js

var PriceTag = external_styled_components_default.a.span.withConfig({
  displayName: "PriceTag",
  componentId: "nwbk6t-0"
})(["background:", ";transform:rotate(3deg);color:white;font-weight:600;padding:5px;line-height:1;font-size:3rem;display:inline-block;position:absolute;top:-3px;right:-3px;"], function (props) {
  return props.theme.red;
});
/* harmony default export */ var styles_PriceTag = (PriceTag);
// EXTERNAL MODULE: ./lib/formatMoney.js
var formatMoney = __webpack_require__(10);

// EXTERNAL MODULE: ./components/User.js
var User = __webpack_require__(4);

// CONCATENATED MODULE: ./components/DeleteItem.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation DELETE_ITEM_MUTATION($id: ID!) {\n    deleteItem(id: $id) {\n      id\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var DELETE_ITEM_MUTATION = external_graphql_tag_default()(_templateObject());

var DeleteItem_DeleteItem =
/*#__PURE__*/
function (_Component) {
  _inherits(DeleteItem, _Component);

  function DeleteItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DeleteItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DeleteItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "update", function (cache, payload) {
      // manually update the cache on the client, so it matches the server
      // 1. Read the cache for the items we want
      var data = cache.readQuery({
        query: ALL_ITEMS_QUERY
      });
      console.log(data, payload); // 2. Filter the deleted itemout of the page

      data.items = data.items.filter(function (item) {
        return item.id !== payload.data.deleteItem.id;
      }); // 3. Put the items back!

      cache.writeQuery({
        query: ALL_ITEMS_QUERY,
        data: data
      });
    });

    return _this;
  }

  _createClass(DeleteItem, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return external_react_default.a.createElement(external_react_apollo_["Mutation"], {
        mutation: DELETE_ITEM_MUTATION,
        variables: {
          id: this.props.id
        },
        refetchQueries: [{
          query: User["a" /* CURRENT_USER_QUERY */]
        }],
        update: this.update
      }, function (deleteItem, _ref) {
        var error = _ref.error;
        return external_react_default.a.createElement("button", {
          onClick: function onClick() {
            if (confirm('Are you sure you want to delete this item?')) {
              deleteItem().catch(function (err) {
                alert(err.message);
              });
            }
          }
        }, _this2.props.children);
      });
    }
  }]);

  return DeleteItem;
}(external_react_["Component"]);

/* harmony default export */ var components_DeleteItem = (DeleteItem_DeleteItem);
// CONCATENATED MODULE: ./components/AddToCart.js


function AddToCart_templateObject() {
  var data = AddToCart_taggedTemplateLiteral(["\n  mutation ADD_TO_CART_MUTATION($id: ID!) {\n    addToCart(id: $id) {\n      id\n      item {\n        description\n        id\n        image\n        price\n        title\n      }\n      quantity\n    }\n  }\n"]);

  AddToCart_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function AddToCart_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var ADD_TO_CART_MUTATION = external_graphql_tag_default()(AddToCart_templateObject());

var AddToCart_AddToCart = function AddToCart(props) {
  var update = function update(cache, payload) {
    var data = cache.readQuery({
      query: User["a" /* CURRENT_USER_QUERY */]
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
      query: User["a" /* CURRENT_USER_QUERY */],
      data: data
    });
  };

  return external_react_default.a.createElement(external_react_apollo_["Mutation"], {
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
      query: User["a" /* CURRENT_USER_QUERY */]
    }],
    variables: {
      id: props.item.id
    }
  }, function (addToCart, _ref) {
    var data = _ref.data,
        error = _ref.error,
        loading = _ref.loading;
    return external_react_default.a.createElement("button", {
      disabled: loading,
      onClick: addToCart
    }, "Add", loading && "ing", " to Cart \uD83D\uDED2");
  });
};

/* harmony default export */ var components_AddToCart = (AddToCart_AddToCart);
// CONCATENATED MODULE: ./components/Item.js











var Item_Item = function Item(_ref) {
  var item = _ref.item;
  return external_react_default.a.createElement(ItemStyles, null, item.image && external_react_default.a.createElement("img", {
    src: item.image,
    alt: item.title
  }), external_react_default.a.createElement(styles_Title, null, external_react_default.a.createElement(link_default.a, {
    href: {
      pathname: '/item',
      query: {
        id: item.id
      }
    }
  }, external_react_default.a.createElement("a", null, item.title))), external_react_default.a.createElement(styles_PriceTag, null, Object(formatMoney["a" /* default */])(item.price)), external_react_default.a.createElement("p", null, item.description), external_react_default.a.createElement("div", {
    className: "buttonList"
  }, external_react_default.a.createElement(link_default.a, {
    href: {
      pathname: '/update',
      query: {
        id: item.id
      }
    }
  }, external_react_default.a.createElement("a", null, "Edit \u270F")), external_react_default.a.createElement(components_AddToCart, {
    item: item
  }), external_react_default.a.createElement(components_DeleteItem, {
    id: item.id
  }, "Delete Item")));
};

/* harmony default export */ var components_Item = (Item_Item);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(11);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/styles/PaginationStyles.js

var PaginationStyles = external_styled_components_default.a.div.withConfig({
  displayName: "PaginationStyles",
  componentId: "aduuar-0"
})(["text-align:center;display:inline-grid;grid-template-columns:repeat(4,auto);align-items:stretch;justify-content:center;align-content:center;margin:2rem 0;border:1px solid ", ";border-radius:10px;& > *{margin:0;padding:15px 30px;border-right:1px solid ", ";&:last-child{border-right:0;}}a[aria-disabled='true']{color:grey;pointer-events:none;}"], function (props) {
  return props.theme.lightgrey;
}, function (props) {
  return props.theme.lightgrey;
});
/* harmony default export */ var styles_PaginationStyles = (PaginationStyles);
// EXTERNAL MODULE: ./config.js
var config = __webpack_require__(13);

// CONCATENATED MODULE: ./components/Pagination.js


function Pagination_templateObject() {
  var data = Pagination_taggedTemplateLiteral(["\n  query PAGINATION_QUERY {\n    itemsConnection {\n      aggregate {\n        count\n      }\n    }\n  }\n"]);

  Pagination_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function Pagination_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var PAGINATION_QUERY = external_graphql_tag_default()(Pagination_templateObject());

var Pagination_Pagination = function Pagination(props) {
  return external_react_default.a.createElement(external_react_apollo_["Query"], {
    query: PAGINATION_QUERY
  }, function (_ref) {
    var error = _ref.error,
        loading = _ref.loading,
        data = _ref.data;
    if (loading) return external_react_default.a.createElement("p", null, "Loading...");
    var itemsCount = data.itemsConnection.aggregate.count;
    var totalPages = Math.ceil(itemsCount / config["a" /* perPage */]);
    var currentPage = props.page;
    return external_react_default.a.createElement(styles_PaginationStyles, null, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", null, "Provision - Page ", props.page, " of ", totalPages, ' ')), external_react_default.a.createElement(link_default.a, {
      prefetch: true,
      href: {
        pathname: 'items',
        query: {
          page: currentPage - 1
        }
      }
    }, external_react_default.a.createElement("a", {
      className: "prev",
      "aria-disabled": currentPage <= 1
    }, "Prev")), external_react_default.a.createElement("p", null, currentPage || 1, " of ", totalPages), external_react_default.a.createElement("p", null, itemsCount, " items total"), external_react_default.a.createElement(link_default.a, {
      prefetch: true,
      href: {
        pathname: 'items',
        query: {
          page: currentPage + 1
        }
      }
    }, external_react_default.a.createElement("a", {
      className: "next",
      "aria-disabled": currentPage >= totalPages
    }, "Next")));
  });
};

/* harmony default export */ var components_Pagination = (Pagination_Pagination);
// CONCATENATED MODULE: ./components/Items.js


function Items_templateObject() {
  var data = Items_taggedTemplateLiteral(["\n  query ALL_ITEMS_QUERY($skip: Int = 0, $first: Int = ", ") {\n    items(first: $first, skip: $skip) {\n      id\n      title\n      price\n      description\n      image\n      largeImage\n    }\n  }\n"]);

  Items_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function Items_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var ALL_ITEMS_QUERY = external_graphql_tag_default()(Items_templateObject(), config["a" /* perPage */]);
var Center = external_styled_components_default.a.div.withConfig({
  displayName: "Items__Center",
  componentId: "tikday-0"
})(["text-align:center;"]);
var ItemsList = external_styled_components_default.a.div.withConfig({
  displayName: "Items__ItemsList",
  componentId: "tikday-1"
})(["display:grid;grid-template-columns:1fr 1fr;grid-gap:60px;max-width:", ";margin:0 auto;"], function (props) {
  return props.theme.maxWidth;
});

var Items_Items = function Items(props) {
  return external_react_default.a.createElement(Center, null, external_react_default.a.createElement(components_Pagination, {
    page: props.page
  }), external_react_default.a.createElement(external_react_apollo_["Query"], {
    query: ALL_ITEMS_QUERY,
    variables: {
      skip: props.page * config["a" /* perPage */] - config["a" /* perPage */]
    }
  }, function (_ref) {
    var data = _ref.data,
        error = _ref.error,
        loading = _ref.loading;
    if (loading) return external_react_default.a.createElement("p", null, "Loading...");
    if (error) return external_react_default.a.createElement("p", null, "Error: ", error.message);
    return external_react_default.a.createElement(ItemsList, null, data.items.map(function (item) {
      return external_react_default.a.createElement(components_Item, {
        key: item.id,
        item: item
      }, item.title);
    }));
  }), external_react_default.a.createElement(components_Pagination, {
    page: props.page
  }));
};

/* harmony default export */ var components_Items = (Items_Items);

// CONCATENATED MODULE: ./pages/index.js




var pages_Home = function Home(props) {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement(components_Items, {
    page: parseFloat(props.query.page) || 1
  }));
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Home);

/***/ }),
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(22);


/***/ })
/******/ ]);