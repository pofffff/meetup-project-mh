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
  authenticationSuccess(state, data) {
    axios.defaults.headers.common['Authorization'] = data.token;
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', data.user._id);
    state.isAuthenticated = true;
    state.authenticationMessage = false;
    router.push('/myprofile/' + data.user._id, () => {});
  },
  userRequestSuccess(state, user) {
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
    state.event = data;
  },
};
