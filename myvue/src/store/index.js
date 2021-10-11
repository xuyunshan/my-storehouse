import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 1,
  },
  mutations: {
    changeCountM(state, callback) {
      state.count++;
      if (callback) {
        callback();
      }
    },
  },
  actions: {
    changeCountA({ commit }, fn) {
      commit('changeCountM', fn);
    },
  },
  getters: {
    xTen(state) {
      return state.count * 10;
    },
  },
  modules: {},
});
