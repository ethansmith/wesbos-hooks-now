"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _minify = _interopRequireDefault(require("./minify"));

module.exports = function (options, callback) {
  try {
    // 'use strict' => this === undefined (Clean Scope)
    // Safer for possible security issues, albeit not critical at all here
    // eslint-disable-next-line no-new-func, no-param-reassign
    options = new Function('exports', 'require', 'module', '__filename', '__dirname', "'use strict'\nreturn ".concat(options))(exports, require, module, __filename, __dirname);
    callback(null, (0, _minify.default)(options));
  } catch (errors) {
    callback(errors);
  }
};