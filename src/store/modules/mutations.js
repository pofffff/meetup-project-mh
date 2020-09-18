export default {
  handleRegisterUser(state, data) {
    if (data.success === true) {
      state.ifLogin = true;
    }
  },
};
