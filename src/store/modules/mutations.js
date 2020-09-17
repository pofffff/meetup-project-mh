export default {
  handleRegisterUser(state, data) {
    if (data.userExists === true) {
      console.log('exists');
    }
    if (data.success === true) {
      console.log('user added');
    }
  },
};
