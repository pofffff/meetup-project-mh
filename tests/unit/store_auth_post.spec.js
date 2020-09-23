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
      commit = jest.fn(),
      dispatch = jest.fn();

    await auth.actions.loginRequest({ commit, dispatch }, headers);

    expect(url).toBe('/authenticate/loginRequest');
    expect(headers).toEqual({ email, password });
  });

  it('Should throw error if there is an error during loginRequest', async () => {
    const commit = jest.fn(),
      dispatch = jest.fn();
    mockError = true;

    await expect(
      auth.actions.loginRequest({ commit, dispatch }, {})
    ).rejects.toThrow('An error occurred when trying to authenticate');
  });
});
