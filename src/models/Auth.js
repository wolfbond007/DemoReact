
const INITIAL_STATE = {
  isLogin: false,
};

export default {
  namespace: 'Auth',
  state: { ...INITIAL_STATE },
  reducers: {

    changeLoginStatus(state, action) {
      return { ...state,
               isLogin: action.payload };
    },

    reset(state) {
      return{
        ...state,
        isLogin: false,
      }
    },

  },
  effects: {

  },
  subscriptions: {

  }
};
