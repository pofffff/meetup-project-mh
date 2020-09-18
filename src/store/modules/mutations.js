export default {
  registerSuccess(state) {
      state.ifLogin = true;
  },
  registerFailed(state) {
    state.emailExists = true;
  },
  registerError(state) {
    state.errorSavingUser = true;
  }
};
