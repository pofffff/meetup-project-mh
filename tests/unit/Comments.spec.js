import { shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import Vue from 'vue';
import Comments from '@/components/Comments.vue';

Vue.use(Vuex);
describe('Comments', () => {
  let wrapper, event, mockStore;
  beforeEach(() => {
    mockStore = { dispatch: jest.fn() };

    event = { _id: '123', comment: 'comment' };
    wrapper = shallowMount(Comments, {
      mocks: { $store: mockStore },
      propsData: { event },
    });
  });
  it('Should dispatch addComment with correct params if input is valid', async () => {
    const data = { event_id: '123', comment: 'comment' };
    const input = wrapper.find('input');
    input.setValue('comment');
    await wrapper.find('.add-comment__action').trigger('click');

    expect(mockStore.dispatch).toHaveBeenCalledWith('addComment', data);
  });

  it('Should not dispatch addComment if input is empty', async () => {
    await wrapper.find('.add-comment__action').trigger('click');

    expect(mockStore.dispatch).not.toHaveBeenCalled();
  });
});
