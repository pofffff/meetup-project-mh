import Vuex from 'vuex';
import Vue from 'vue';
import actions from '@/store/modules/actions.js';

Vue.use(Vuex);

let url = '',
  body = {},
  headers = {};

jest.mock('axios', () => ({
  get: (_url, _body, _headers) => {
    const response = { data: { success: true, event: 'event' } };

    return new Promise((resolve) => {
      url = _url;
      body = _body;
      headers = _headers;
      resolve(response);
    });
  },
}));

describe('store action - getEvent', () => {
  it('Should run getEvent with correct params', async () => {
    const id = '123',
      data = { success: true, event: 'event' },
      commit = jest.fn();

    await actions.getEvent({ commit }, id);

    expect(url).toBe('/event/getOne/' + id);
    expect(headers).toEqual({ id });
    expect(commit).toHaveBeenCalledWith('getEventSuccess', data);
  });
});
