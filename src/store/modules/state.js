export default {
  ifLogin: true,
  showMain: true,
  emailExists: false,
  errorSavingUser: false,
  isAuthenticated: false,
  token: localStorage.getItem('token') || '',
  user: {},
  events: [],
  event: {},
};
