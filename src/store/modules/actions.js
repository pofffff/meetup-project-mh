import axios from "axios";

export default {
  async registerUser(ctx, user) {
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
          ctx.commit("registerSuccess");
        }
        if (response.data.emailExists === true) {
          ctx.commit("registerFailed");
        }
      })
      .catch((error) => {
        console.log("Error: " + error);
        throw Error("API Error");
      });
  },
};
