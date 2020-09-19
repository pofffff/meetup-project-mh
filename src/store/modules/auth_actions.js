import axios from "axios";
const auth = {
  actions: {
    async authRequest({ ctx, dispatch}, credentials) {
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
          // Set default headers on all axios calls
          axios.defaults.headers.common["Authorization"] = token;
          axios.defaults.headers.common["email"] = email;

          localStorage.setItem("token", token);
          dispatch("userRequest");
        })
        .catch((error) => {
          console.log(error)
        });
    },
    userRequest({ ctx, state }) {
      return new Promise((resolve, reject) => {
        console.log("here");
        axios
          .get("http://localhost:8080/authenticate/userRequest",)
          .then((response) => {
            console.log(response);
            if (response.data.success === true) {
              resolve();
            }
          })
          .catch((error) => {
            delete axios.defaults.headers.common[("authorization", "email")];
            localStorage.removeItem("token");
            reject(error);
          });
      });
    },
    // Kanske flytta till component
    logoutUser(ctx) {
      return new Promise((resolve, reject) => {
        delete axios.defaults.headers.common[("authorization", "email")];
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        ctx.commit("logoutSuccess");
        resolve();
      }).catch((error) => {
        reject(error);
      });
    },
  },
};
export default auth;
