import Vuex from 'vuex';
import Vue from 'vue';
import auth from '@/store/modules/auth_actions.js';

Vue.use(Vuex);

let url = '',
  mockError = false;

jest.mock('axios', () => ({
  get: (_url) => {
    const response = { data: { success: true, token: 'token' } };

    return new Promise((resolve) => {
      if (mockError) throw Error('Mock error');

      url = _url;
      resolve(response);
    });
  },
}));

describe('store - auth', () => {
  it('Should run userRequest with correct params', async () => {
    await auth.actions.userRequest();

    expect(url).toBe('http://localhost:8080/authenticate/userRequest');
  });
});
