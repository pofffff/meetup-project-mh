import Vuex from 'vuex';
import Vue from 'vue';
import actions from '@/store/modules/actions.js';

Vue.use(Vuex);

let url = '',
  body = {},
  mockError = false;

jest.mock('axios', () => ({
  post: (_url, _body) => {
    const response = { data: { success: true, event_id: '123' } };

    return new Promise((resolve) => {
      if (mockError) throw Error('Mock error');

      url = _url;
      body = _body;
      resolve(response);
    });
  },
}));

describe('store action - addUserToEvent', () => {
  it('Should run addUserToEvent with correct params', async () => {
    const event_id = '123',
      commit = jest.fn(),
      dispatch = jest.fn();

    await actions.addUserToEvent({ commit, dispatch }, event_id);

    expect(url).toBe('/event/addUser');
    expect(body).toEqual({ event_id });
    expect(dispatch).toHaveBeenCalledWith('getEvent', event_id);
  });

  it('Should call authenticationError if there is an error during addUserToEvent', async () => {
    const id = '123',
      commit = jest.fn(),
      dispatch = jest.fn();
    mockError = true;

    await actions.addUserToEvent({ commit, dispatch }, id);

    expect(commit).toHaveBeenCalledWith('authenticationError');
  });
});
