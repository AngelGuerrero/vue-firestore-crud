import Vue from "vue";
import Vuex from "vuex";
import { vuexfireMutations } from "vuexfire";

//
// Modules
import todoModule from "./modules/TodoModule";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {},

  getters: {},

  mutations: {
    // 
    // Do not remove!!!
    ...vuexfireMutations
  },

  actions: {},

  modules: {
    todoModule
  }
});
