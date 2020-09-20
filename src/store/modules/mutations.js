
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
    state.isAuthenticated = true
    console.log(user);
  },
  requestUserError(state, error) {
    console.log("Error: " + error);
  },
  logoutSuccess(state) {
    state.isAuthenticated = false
  },

};
