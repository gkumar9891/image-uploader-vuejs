import { createStore } from 'vuex';

export default createStore({
  state: {
    loader: false,
  },
  mutations: {
    showLoader(state) {
      state.loader = true;
    },
    hideLoader(state) {
      state.loader = false;
    }

  },
  getters: {
    loader(state) {
      return state.loader;
    }
  },
  actions: {
  },
  modules: {
  },
});
