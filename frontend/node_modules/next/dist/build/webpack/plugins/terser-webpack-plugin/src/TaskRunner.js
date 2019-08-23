"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringify = _interopRequireDefault(require("@babel/runtime-corejs2/core-js/json/stringify"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/createClass"));

var _os = _interopRequireDefault(require("os"));

var _cacache = _interopRequireDefault(require("cacache"));

var _findCacheDir = _interopRequireDefault(require("find-cache-dir"));

var _workerFarm = _interopRequireDefault(require("worker-farm"));

var _serializeJavascript = _interopRequireDefault(require("serialize-javascript"));

var _minify = _interopRequireDefault(require("./minify"));

var worker = require.resolve('./worker');

var TaskRunner =
/*#__PURE__*/
function () {
  function TaskRunner() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2.default)(this, TaskRunner);
    var cache = options.cache,
        parallel = options.parallel;
    this.cacheDir = cache === true ? (0, _findCacheDir.default)({
      name: 'terser-webpack-plugin'
    }) : cache; // In some cases cpus() returns undefined
    // https://github.com/nodejs/node/issues/19022

    var cpus = _os.default.cpus() || {
      length: 1
    };
    this.maxConcurrentWorkers = parallel === true ? cpus.length - 1 : Math.min(Number(parallel) || 0, cpus.length - 1);
  }

  (0, _createClass2.default)(TaskRunner, [{
    key: "run",
    value: function run(tasks, callback) {
      var _this = this;

      /* istanbul ignore if */
      if (!tasks.length) {
        callback(null, []);
        return;
      }

      if (this.maxConcurrentWorkers > 1) {
        var workerOptions = process.platform === 'win32' ? {
          maxConcurrentWorkers: this.maxConcurrentWorkers,
          maxConcurrentCallsPerWorker: 1
        } : {
          maxConcurrentWorkers: this.maxConcurrentWorkers
        };
        this.workers = (0, _workerFarm.default)(workerOptions, worker);

        this.boundWorkers = function (options, cb) {
          try {
            _this.workers((0, _serializeJavascript.default)(options), cb);
          } catch (error) {
            // worker-farm can fail with ENOMEM or something else
            cb(error);
          }
        };
      } else {
        this.boundWorkers = function (options, cb) {
          try {
            cb(null, (0, _minify.default)(options));
          } catch (error) {
            cb(error);
          }
        };
      }

      var toRun = tasks.length;
      var results = [];

      var step = function step(index, data) {
        toRun -= 1;
        results[index] = data;

        if (!toRun) {
          callback(null, results);
        }
      };

      tasks.forEach(function (task, index) {
        var enqueue = function enqueue() {
          _this.boundWorkers(task, function (error, data) {
            var result = error ? {
              error: error
            } : data;

            var done = function done() {
              return step(index, result);
            };

            if (_this.cacheDir && !result.error) {
              _cacache.default.put(_this.cacheDir, (0, _serializeJavascript.default)(task.cacheKeys), (0, _stringify.default)(data)).then(done, done);
            } else {
              done();
            }
          });
        };

        if (_this.cacheDir) {
          _cacache.default.get(_this.cacheDir, (0, _serializeJavascript.default)(task.cacheKeys)).then(function (_ref) {
            var data = _ref.data;
            return step(index, JSON.parse(data));
          }, enqueue);
        } else {
          enqueue();
        }
      });
    }
  }, {
    key: "exit",
    value: function exit() {
      if (this.workers) {
        _workerFarm.default.end(this.workers);
      }
    }
  }]);
  return TaskRunner;
}();

exports.default = TaskRunner;