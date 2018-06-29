import storage from './storage/session';

const config = {
  key: 'model',
  storage,
  blacklist: [
    '@@dva',
    'routing'
  ],
  whitelist: [],
  keyPrefix: 'persist',
};

export default config;
