import Vuex from 'vuex';
import Vue from 'vue';
import actions from '@/store/modules/actions.js';

Vue.use(Vuex);

let url = '';

jest.mock('axios', () => ({
  get: (_url) => {
    const response = { data: { success: true, user: 'user' } };

    return new Promise((resolve) => {
      url = _url;
      resolve(response);
    });
  },
}));

describe('store action - getEvent', () => {
  it('Should run getEvent with correct params', async () => {
    const id = '123',
      data = { success: true, user: 'user' },
      commit = jest.fn();

    await actions.getUser({ commit }, id);

    expect(url).toBe('/user/getOne/' + id);
    expect(commit).toHaveBeenCalledWith('userRequestSuccess', data.user);
  });
});
