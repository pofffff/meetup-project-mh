import axios from 'axios';
const auth = {
  actions: {
    async loginRequest({ commit, dispatch }, credentials) {
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
          console.log(response);
          const token = response.data.token;
          localStorage.setItem('token', token);
        })
        .catch((error) => {
          throw Error('An error occurred when trying to authenticate');
        });
    },
    userRequest({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .get('/authenticate/userRequest')
          .then((response) => {
            if (response.data.success === true) {
              localStorage.setItem('token', response.data.token);
              commit('userRequestSuccess', response.data.user);
              resolve();
            }
          })
          .catch((error) => {
            throw Error('An error occurred when trying to authenticate');
          });
      });
    },
    authenticate({ ctx, state }) {
      return new Promise((resolve, reject) => {
        axios
          .get('/authenticate')
          .then((response) => {
            if (response.data.success === true) {
              localStorage.setItem('token', response.data.token);
              resolve();
            }
          })
          .catch((error) => {});
      });
    },
    // Kanske flytta till component
    logoutUser(ctx) {
      return new Promise((resolve, reject) => {
        delete axios.defaults.headers.common['Authorization'];
        localStorage.removeItem('token');
        ctx.commit('logoutSuccess');
        resolve();
      }).catch((error) => {
        reject(error);
      });
    },
  },
};
export default auth;