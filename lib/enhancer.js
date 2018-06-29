'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function () {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _defaultOptions$opts = _extends({}, _config2.default, opts),
      key = _defaultOptions$opts.key,
      keyPrefix = _defaultOptions$opts.keyPrefix,
      blacklist = _defaultOptions$opts.blacklist,
      whitelist = _defaultOptions$opts.whitelist,
      storage = _defaultOptions$opts.storage;

  var defaultState = storage.get(keyPrefix + ':' + key);
  return function (createStore) {
    return function (reducer) {
      var initialState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultState;
      var enhancer = arguments[2];

      var store = createStore(reducer, _extends({}, initialState, defaultState), enhancer);
      function dispatch(action) {
        var res = store.dispatch(action);
        var thatState = store.getState();
        if (_lodash2.default.isArray(whitelist) && !_lodash2.default.isEmpty(whitelist)) {
          thatState = _lodash2.default.pick(thatState, whitelist);
        } else if (_lodash2.default.isArray(blacklist) && !_lodash2.default.isEmpty(blacklist)) {
          thatState = _lodash2.default.omit(thatState, blacklist);
        }
        if (!_lodash2.default.isEqual(lastState, thatState)) {
          lastState = _lodash2.default.merge(lastState, thatState);
          storage.set(keyPrefix + ':' + key, lastState);
        }
        return res;
      }
      return _extends({}, store, { dispatch: dispatch });
    };
  };
};

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lastState = {};
//# sourceMappingURL=enhancer.js.map