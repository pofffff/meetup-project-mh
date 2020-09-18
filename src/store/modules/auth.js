import axios from "axios";

const auth = {
  state: {
    API: {
      authRequest: "http://localhost:8080/authenticate",
      requestUser: "http://localhost:8080/requestUser",
    },
  },
  mutations: {
    authRequestError(state, error) {
      console.log("Error: " + error);
    },
    requestUserSuccess(state, user) {
      console.log(user);
    },
    requestUserError(state, error) {
      console.log("Error: " + error);
    },
    logoutUser(state) {
      delete axios.defaults.headers.common['Authorization']
      localStorage.removeItem("token");
    }
  },
  actions: {
    async authRequest({ commit, dispatch, state }, credentials) {
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
          // Set default headers on all axios calls
          axios.defaults.headers.common['Authorization'] = token
          const token = response.data.token;
          localStorage.setItem("token", token);
          commit("authSuccess", token);
          dispatch("userRequest", token);
        })
        .catch((error) => {
          localStorage.removeItem("token");
          commit("authRequestError", error);
        });
    },
    async authRequest({ commit, state }, token) {
      await axios
        .get(
          state.API.requestUser,
          {},
          {
            headers: {
              token: token,
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
  },
};
export default auth;
