'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createWebStorage;

var _storeEngine = require('store/src/store-engine');

var _storeEngine2 = _interopRequireDefault(_storeEngine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createWebStorage(type) {
  var storage = null;
  switch (type) {
    case 'local':
      {
        var storages = [require('store/storages/localStorage')];
        var plugins = [require('store/plugins/defaults')];
        storage = _storeEngine2.default.createStore(storages, plugins);
        break;
      }
    case 'session':
      {
        var _storages = [require('store/storages/sessionStorage')];
        var _plugins = [require('store/plugins/defaults')];
        storage = _storeEngine2.default.createStore(_storages, _plugins);
        break;
      }
    default:
      throw new Error('Unknown type!');
  }
  return storage;
}
//# sourceMappingURL=createWebStorage.js.map