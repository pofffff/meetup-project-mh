import axios from 'axios';

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
  authenticationError(state) {
    state.isAuthenticated = false;
    delete axios.defaults.headers.common['Authorization'];
    localStorage.removeItem('token');
  },
  wrongCredentials(state) {
    state.wrongCredentials = true;
  },
  authenticationSuccess(state, token) {
    state.isAuthenticated = true;
    axios.defaults.headers.common['Authorization'] = token;
    localStorage.setItem('token', token);
  },
  userRequestSuccess(state, user) {
    state.isAuthenticated = true;
    state.user = user;
  },
  logoutSuccess(state) {
    state.isAuthenticated = false;
    delete axios.defaults.headers.common['Authorization'];
    localStorage.removeItem('token');
  },
  getAllEventsSuccess(state, data) {
    state.events = data;
  },
  getEventSuccess(state, data) {
    console.log(data);
    state.event = data;
  },
};
