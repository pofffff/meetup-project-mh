export default {
  ifLogin: false,
  showMain: false,
  emailExists: false,
  errorSavingUser: false,
  isAuthenticated: false,
  token: localStorage.getItem('token') || '',
};
