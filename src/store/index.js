import Vue from 'vue';
import Vuex from 'vuex';
import state from '@/store/modules/state.js';
import mutations from '@/store/modules/mutations.js';
import actions from '@/store/modules/actions.js';
import auth from '@/store/modules/auth_actions.js';

//import getters from '@/store/modules/getters.js';
Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions,
  //getters,
  modules: {
    auth,
  },
});
