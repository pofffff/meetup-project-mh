import axios from "axios";

export default {
  async registerUser({commit}, user) {
    const url = "http://localhost:8080/user";
    await axios
      .post(
        url,
        {},
        {
          headers: {
            name: user.name,
            email: user.email,
            password: user.password,
          },
        }
      )
      .then((response) => {
        if (response.data.success === true) {
          commit("registerSuccess");
        }
        if (response.data.emailExists === true) {
          commit("registerFailed");
        }
      })
      .catch((error) => {
        console.log("Error: " + error);
        commit("registerError")
        throw Error("An error occurred when trying to register user");
      });
  },
  async addEvent(ctx, event) {
    const url = "http://localhost:8080/event";
    await axios
      .post(
        url,
        event,
      )
      .then((response) => {
        if (response.data === true) {
          ctx.commit("addEventSuccess");
        }
        if (response.data.error === true) {
          ctx.commit("addEventError");
        }
      })
      .catch((error) => {
        ctx.commit("addEventError", error)
        throw Error("API Error");
      });
  }
};
