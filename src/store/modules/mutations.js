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
  },
  requestUserError(state, error) {
    console.log('Error: ' + error);
  },
  logoutSuccess(state) {
    state.isAuthenticated = false;
  },
  getAllEventsSuccess(state, data) {
    state.events = data;
  },
  getEventSuccess(state, data) {
    state.event = data;
  },
};
