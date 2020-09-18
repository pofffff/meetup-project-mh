import axios from "axios";

const auth = {
  state: {
    API: {
      authRequest: "http://localhost:8080/authenticate",
      requestUser: "http://localhost:8080/authenticate/requestUser",
    },
  },
  mutations: {
 
  },
  actions: {
    async authRequest({ ctx, dispatch, state }, credentials) {
      await axios
        .post(
          state.API.authRequest,
          {},
          {
            headers: {
              email: credentials.email,
              password: credentials.password,
            },
          }
        )
        .then((response) => {
          const token = response.data.token;
          const email = response.data.email
          // Set default headers on all axios calls
          axios.defaults.headers.common['authorization'] = token;
          axios.defaults.headers.common['email'] = email;

          localStorage.setItem("token", token);
          dispatch("userRequest", email);
        })
        .catch((error) => {
          localStorage.removeItem("token");
        });
    },
    async userRequest({ commit, state }, email) {
      await axios
        .get(
          state.API.requestUser,
          {},
          {
            headers: {
              email: email,
            },
          }
        )
        .then((response) => {
          commit("requestUserSuccess", response.data.user);
        })
        .catch((error) => {
          commit("requestUserError", error);
        });
    },
    logoutUser(ctx) {
        delete axios.defaults.headers.common['Authorization']
        localStorage.removeItem("token");
        ctx.commit("logoutSuccess")
    }
  },
};
export default auth;
