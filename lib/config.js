'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _session = require('./storage/session');

var _session2 = _interopRequireDefault(_session);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = {
  key: 'model',
  storage: _session2.default,
  blacklist: ['@@dva', 'routing'],
  whitelist: [],
  keyPrefix: 'persist'
};

exports.default = config;
//# sourceMappingURL=config.js.map