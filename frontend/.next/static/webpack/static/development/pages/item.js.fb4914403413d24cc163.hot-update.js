webpackHotUpdate("static/development/pages/item.js",{

/***/ "./components/SingleItem.js":
/*!**********************************!*\
  !*** ./components/SingleItem.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
var _jsxFileName = "/Users/ethan/Sites/wpx/wesbos-hooks/frontend/components/SingleItem.js";


function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query SINGLE_ITEM_QUERY($id: ID!) {\n    item(where: { id: $id }) {\n      id\n      title\n      price\n      description\n      image\n      largeImage\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

 // import { useQuery } from "@apollo/react-hooks"


 // import { useQuery } from 'react-apollo-hooks';



var SingleItemStyles = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "SingleItem__SingleItemStyles",
  componentId: "mflgtv-0"
})(["max-width:1200px;margin:2rem auto;box-shadow:", ";display:grid;grid-auto-columns:1fr;grid-auto-flow:column;min-height:800px;img{width:100%;height:100%;object-fit:contain;}.details{margin:3rem;font-size:2rem;}"], function (props) {
  return props.theme.bs;
});
var SINGLE_ITEM_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject());

var SingleItem = function SingleItem(props) {
  var _useQuery = Object(react_apollo__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(SINGLE_ITEM_QUERY, {
    variables: {
      id: props.id
    }
  }),
      error = _useQuery.error,
      loading = _useQuery.loading,
      data = _useQuery.data;

  if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
    error: error,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  });
  if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Loading...");
  if (!data.item) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "No Item Found for ", props.id);
  var item = data.item;
  console.log(item);
  console.log(true);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SingleItemStyles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Sick Fits | ", item.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: item.largeImage,
    alt: item.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Viewing ", item.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, item.description)));
};

/* harmony default export */ __webpack_exports__["default"] = (SingleItem);

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
//# sourceMappingURL=item.js.fb4914403413d24cc163.hot-update.js.map