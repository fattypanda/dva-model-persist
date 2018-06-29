
export default {

  namespace: 'home',

  state: {
    home: 0,
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      console.log('home subscriptions setup');
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    *change({ payload }, { put }) {
      yield put({ type: 'save', payload: { home: new Date().getTime() }});
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
