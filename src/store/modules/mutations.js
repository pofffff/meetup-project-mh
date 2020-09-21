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
    console.log('Error: ' + error);
  },
  userRequestSuccess(state, user) {
    state.isAuthenticated = true;
    state.user = user;
    console.log(user);
  },
  requestUserError(state, error) {
    console.log('Error: ' + error);
  },
  logoutSuccess(state) {
    state.isAuthenticated = false;
  },
};
