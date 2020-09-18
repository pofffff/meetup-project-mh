export default {
  registerSuccess(state) {
      state.ifLogin = true;
      console.log(state.ifLogin);
  },
  registerFailed(state) {
    state.emailExists = true;
    console.log(state.emailExists);

  }
};
