import Vuex from 'vuex';
import Vue from 'vue';
import actions from '@/store/modules/actions.js';

Vue.use(Vuex);

let url = '',
  body = {},
  mockError = false;

jest.mock('axios', () => ({
  post: (_url, _body) => {
    const response = { data: { success: true } };

    return new Promise((resolve) => {
      if (mockError) throw Error('Mock error');

      url = _url;
      body = _body;
      resolve(response);
    });
  },
}));

describe('store - addEvent', () => {
  it('Should run with correct params', async () => {
    const name = 'fake event',
      city = 'fakecity 1',
      adress = 'fakestreet 1',
      date = '2020-10-10',
      time = '22:00',
      description = 'fake description',
      image = 'fake url',
      commit = jest.fn();

    await actions.addEvent(
      { commit },
      { name, city, adress, date, time, description, image }
    );

    expect(url).toBe('/event/add');
    expect(body).toEqual({
      name,
      city,
      adress,
      date,
      time,
      description,
      image,
    });
  });

  it('Should throw error if there is an error during addEvent', async () => {
    const commit = jest.fn();
    mockError = true;

    await expect(actions.addEvent({ commit }, {})).rejects.toThrow(
      'Error adding event'
    );
  });
});
