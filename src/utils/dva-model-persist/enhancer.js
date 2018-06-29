import _ from 'lodash';
import defaultOptions from './config';

let lastState = {};

export default function autoLogger(opts = {}) {
  const { key, keyPrefix, blacklist, whitelist, storage } = { ...defaultOptions, ...opts};
  const defaultState = storage.get(`${keyPrefix}:${key}`);
  return createStore => (reducer, initialState = defaultState, enhancer) => {
    const store = createStore(reducer, { ...initialState, ...defaultState }, enhancer);
    function dispatch(action) {
      const res = store.dispatch(action);
      let thatState = store.getState();
      if (_.isArray(whitelist) && !_.isEmpty(whitelist)) {
        thatState = _.pick(thatState, whitelist);
      } else if (_.isArray(blacklist) && !_.isEmpty(blacklist)) {
        thatState = _.omit(thatState, blacklist);
      }
      if (!_.isEqual(lastState, thatState)) {
        lastState = _.merge(lastState, thatState);
        storage.set(`${keyPrefix}:${key}`, lastState);
      }
      return res;
    }
    return {...store, dispatch }
  }
}
