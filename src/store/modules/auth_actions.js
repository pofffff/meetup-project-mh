import axios from 'axios';
const auth = {
  actions: {
    async loginRequest({ commit }, credentials) {
      await axios
        .post(
          '/authenticate/loginRequest',
          {},
          {
            headers: {
              email: credentials.email,
              password: credentials.password,
            },
          }
        )
        .then((response) => {
          commit('authenticationSuccess', response.data.token);
        })
        .catch((error) => {
          commit('wrongCredentials');
        });
    },
    async userRequest({ commit }) {
      await axios
        .get('/authenticate/userRequest')
        .then((response) => {
          if (response.data.success === true) {
            commit('userRequestSuccess', response.data.user);
            commit('authenticationSuccess', response.data.token);
          }
        })
        .catch((error) => {
          commit('authenticationError');
        });
    },
    async logoutUser({ commit }) {
      await commit('logoutSuccess');
    },
  },
};
export default auth;
