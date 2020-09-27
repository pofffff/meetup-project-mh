import { shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import Vue from 'vue';
import AddEvent from '@/views/AddEvent.vue';

Vue.use(Vuex);

it('Should not dispatch addEvent if any input is empty', async () => {
  const mockStore = { dispatch: jest.fn() };
  const wrapper = shallowMount(AddEvent, {
    mocks: { $store: mockStore },
  });

  await wrapper.find('button').trigger('click');
  expect(mockStore.dispatch).not.toHaveBeenCalledWith('addEvent');
});
