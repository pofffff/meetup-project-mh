import Vuex from 'vuex';
import Vue from 'vue';
import actions from '@/store/modules/actions.js';

Vue.use(Vuex);

let url = '';

jest.mock('axios', () => ({
  get: (_url) => {
    const response = { data: { success: true, events: 'event' } };

    return new Promise((resolve) => {
      url = _url;
      resolve(response);
    });
  },
}));

describe('store action - getAllEvents', () => {
  it('Should run getAllEvents with correct params', async () => {
    const data = { success: true, events: 'event' },
      commit = jest.fn();

    await actions.getAllEvents({ commit });

    expect(url).toBe('/event/getAll');
    expect(commit).toHaveBeenCalledWith('getAllEventsSuccess', data);
  });
});
