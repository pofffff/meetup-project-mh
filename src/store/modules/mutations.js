
export default {
  registerSuccess(state) {
      state.ifLogin = true;
  },
  registerFailed(state) {
    state.emailExists = true;
  },
  registerError(state) {
    state.errorSavingUser = true;
  },
  authRequestError(state, error) {
    console.log("Error: " + error);
  },
  requestUserSuccess(state, user) {
    //localStorage.setItem("email", user.email)
    state.isAuthenticated
    console.log(user);
  },
  requestUserError(state, error) {
    console.log("Error: " + error);
  },
  logoutSuccess() {
    console.log("logout success")
  }

};
