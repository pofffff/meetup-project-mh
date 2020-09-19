import axios from "axios";
const auth = {
  actions: {
    async authRequest({ ctx, dispatch }, credentials) {
      await axios
        .post(
          "http://localhost:8080/authenticate",
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
          const email = response.data.email;
          localStorage.setItem("token", token);
          axios.defaults.headers.common["Authorization"] = token;

          dispatch("userRequest", email);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    userRequest({ ctx, state }, email) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            "http://localhost:8080/authenticate/userRequest",
            {},
            { headers: { email: email } }
          )
          .then((response) => {
            if (response.data.success === true) {
              localStorage.setItem("token", response.data.token);
              axios.defaults.headers.common["Authorization"] = response.data.token;
              resolve();
            }
          })
          .catch((error) => {
            delete axios.defaults.headers.common["Authorization"];
            localStorage.removeItem("token");
            resolve();
          });
      });
    },
    // Kanske flytta till component
    logoutUser(ctx) {
      return new Promise((resolve, reject) => {
        delete axios.defaults.headers.common["Authorization"];
        localStorage.removeItem("token");
        ctx.commit("logoutSuccess");
        resolve();
      }).catch((error) => {
        reject(error);
      });
    },
  },
};
export default auth;
