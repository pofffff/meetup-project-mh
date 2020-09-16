import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    async test(ctx) {
      const url = 'http://localhost:8080/newUser/user';
      fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            console.log(data);
            //ctx.commit('renderCategories', data);
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    },
  },
  modules: {},
});
