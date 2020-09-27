import axios from 'axios';
import router from '@/router/index.js';

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
    delete axios.defaults.headers.common['Authorization'];
    localStorage.removeItem('token');
    state.isAuthenticated = false;
    state.authenticationMessage = true;
    router.push('/login', () => {});
  },
  wrongCredentials(state) {
    state.wrongCredentials = true;
  },
  authenticationSuccess(state, token) {
    axios.defaults.headers.common['Authorization'] = token;
    localStorage.setItem('token', token);
    state.isAuthenticated = true;
    state.authenticationMessage = false;
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
