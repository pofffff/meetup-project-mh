import Vuex from 'vuex';
import Vue from 'vue';
import auth from '@/store/modules/auth_actions.js';

Vue.use(Vuex);

let url = '',
  body = {},
  headers = {},
  mockError = false;

jest.mock('axios', () => ({
  post: (_url, _body, _headers) => {
    const response = { data: { token: 'token' } };

    return new Promise((resolve) => {
      if (mockError) throw Error('Mock error');

      url = _url;
      body = _body;
      headers = _headers;
      resolve(response);
    });
  },
}));

describe('store - auth', () => {
  it('Should run loginRequest with correct params', async () => {
    const email = 'fakeemail@email.com',
      password = 'fakepassword',
      headers = { email: 'fakeemail@email.com', password: 'fakepassword' },
      commit = jest.fn();

    await auth.actions.loginRequest({ commit }, headers);

    expect(url).toBe('/authenticate/loginRequest');
    expect(headers).toEqual({ email, password });
  });

  it('Should call wrongCredentials if there is an error during login', async () => {
    const commit = jest.fn();
    mockError = true;

    await auth.actions.loginRequest({ commit }, {});

    expect(commit).toHaveBeenCalledWith('wrongCredentials');
  });
});
