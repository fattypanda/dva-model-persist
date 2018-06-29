import engine from 'store/src/store-engine';

export default function createWebStorage (type) {
  let storage = null;
  switch (type) {
    case 'local': {
      const storages = [require('store/storages/localStorage')];
      const plugins = [require('store/plugins/defaults')];
      storage = engine.createStore(storages, plugins);
      break;
    }
    case 'session': {
      const storages = [require('store/storages/sessionStorage')];
      const plugins = [require('store/plugins/defaults')];
      storage = engine.createStore(storages, plugins);
      break;
    }
    default:
      throw new Error('Unknown type!');
  }
  return storage;
}
