"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/defineProperty"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/typeof"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/objectSpread"));

var _terser = require("terser");

/* eslint-disable
  arrow-body-style
*/
var buildTerserOptions = function buildTerserOptions() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      ecma = _ref.ecma,
      warnings = _ref.warnings,
      _ref$parse = _ref.parse,
      parse = _ref$parse === void 0 ? {} : _ref$parse,
      _ref$compress = _ref.compress,
      compress = _ref$compress === void 0 ? {} : _ref$compress,
      mangle = _ref.mangle,
      module = _ref.module,
      output = _ref.output,
      toplevel = _ref.toplevel,
      nameCache = _ref.nameCache,
      ie8 = _ref.ie8,
      keep_classnames = _ref.keep_classnames,
      keep_fnames = _ref.keep_fnames,
      safari10 = _ref.safari10;

  return {
    ecma: ecma,
    warnings: warnings,
    parse: (0, _objectSpread2.default)({}, parse),
    compress: typeof compress === 'boolean' ? compress : (0, _objectSpread2.default)({}, compress),
    // eslint-disable-next-line no-nested-ternary
    mangle: mangle == null ? true : typeof mangle === 'boolean' ? mangle : (0, _objectSpread2.default)({}, mangle),
    output: (0, _objectSpread2.default)({
      shebang: true,
      comments: false,
      beautify: false,
      semicolons: true
    }, output),
    module: module,
    // Ignoring sourceMap from options
    sourceMap: null,
    toplevel: toplevel,
    nameCache: nameCache,
    ie8: ie8,
    keep_classnames: keep_classnames,
    keep_fnames: keep_fnames,
    safari10: safari10
  };
};

var buildComments = function buildComments(options, terserOptions, extractedComments) {
  var condition = {};
  var commentsOpts = terserOptions.output.comments; // Use /^\**!|@preserve|@license|@cc_on/i RegExp

  if (typeof options.extractComments === 'boolean') {
    condition.preserve = commentsOpts;
    condition.extract = /^\**!|@preserve|@license|@cc_on/i;
  } else if (typeof options.extractComments === 'string' || options.extractComments instanceof RegExp) {
    // extractComments specifies the extract condition and commentsOpts specifies the preserve condition
    condition.preserve = commentsOpts;
    condition.extract = options.extractComments;
  } else if (typeof options.extractComments === 'function') {
    condition.preserve = commentsOpts;
    condition.extract = options.extractComments;
  } else if (Object.prototype.hasOwnProperty.call(options.extractComments, 'condition')) {
    // Extract condition is given in extractComments.condition
    condition.preserve = commentsOpts;
    condition.extract = options.extractComments.condition;
  } else {
    // No extract condition is given. Extract comments that match commentsOpts instead of preserving them
    condition.preserve = false;
    condition.extract = commentsOpts;
  } // Ensure that both conditions are functions


  ['preserve', 'extract'].forEach(function (key) {
    var regexStr;
    var regex;

    switch ((0, _typeof2.default)(condition[key])) {
      case 'boolean':
        condition[key] = condition[key] ? function () {
          return true;
        } : function () {
          return false;
        };
        break;

      case 'function':
        break;

      case 'string':
        if (condition[key] === 'all') {
          condition[key] = function () {
            return true;
          };

          break;
        }

        if (condition[key] === 'some') {
          condition[key] = function (astNode, comment) {
            return comment.type === 'comment2' && /^\**!|@preserve|@license|@cc_on/i.test(comment.value);
          };

          break;
        }

        regexStr = condition[key];

        condition[key] = function (astNode, comment) {
          return new RegExp(regexStr).test(comment.value);
        };

        break;

      default:
        regex = condition[key];

        condition[key] = function (astNode, comment) {
          return regex.test(comment.value);
        };

    }
  }); // Redefine the comments function to extract and preserve
  // comments according to the two conditions

  return function (astNode, comment) {
    if (condition.extract(astNode, comment)) {
      var commentText = comment.type === 'comment2' ? "/*".concat(comment.value, "*/") : "//".concat(comment.value); // Don't include duplicate comments

      if (!extractedComments.includes(commentText)) {
        extractedComments.push(commentText);
      }
    }

    return condition.preserve(astNode, comment);
  };
};

var minify = function minify(options) {
  var file = options.file,
      input = options.input,
      inputSourceMap = options.inputSourceMap,
      extractComments = options.extractComments,
      minifyFn = options.minify;

  if (minifyFn) {
    return minifyFn((0, _defineProperty2.default)({}, file, input), inputSourceMap);
  } // Copy terser options


  var terserOptions = buildTerserOptions(options.terserOptions); // Add source map data

  if (inputSourceMap) {
    terserOptions.sourceMap = {
      content: inputSourceMap
    };
  }

  var extractedComments = [];

  if (extractComments) {
    terserOptions.output.comments = buildComments(options, terserOptions, extractedComments);
  }

  var _terserMinify = (0, _terser.minify)((0, _defineProperty2.default)({}, file, input), terserOptions),
      error = _terserMinify.error,
      map = _terserMinify.map,
      code = _terserMinify.code,
      warnings = _terserMinify.warnings;

  return {
    error: error,
    map: map,
    code: code,
    warnings: warnings,
    extractedComments: extractedComments
  };
};

var _default = minify;
exports.default = _default;