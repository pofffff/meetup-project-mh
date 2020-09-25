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

describe('store action - addComment', () => {
  it('Should run addComment with correct params', async () => {
    const data = { event_id: '123', comment: 'comment' },
      commit = jest.fn(),
      dispatch = jest.fn();

    await actions.addComment({ commit, dispatch }, data);

    expect(url).toBe('/event/addComment');
    expect(body).toEqual(data);
    expect(dispatch).toHaveBeenCalledWith('getEvent', data.event_id);
  });

  it('Should call authenticationError if there is an error during addComment', async () => {
    const data = { event_id: '123', comment: 'comment' },
      commit = jest.fn(),
      dispatch = jest.fn();
    mockError = true;

    await actions.addComment({ commit, dispatch }, data);

    expect(commit).toHaveBeenCalledWith('authenticationError');
  });
});
