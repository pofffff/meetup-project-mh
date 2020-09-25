import { shallowMount } from '@vue/test-utils';
import EventDetails from '@/views/EventDetails.vue';

describe('EventDetails', () => {
  let event;
  beforeEach(() => {
    event = {
      _id: '123',
      name: 'name',
      city: 'city',
      time: 'time',
      date: 'date',
      adress: 'adress',
      categories: ['category1', 'category2'],
      description: 'description',
      image: 'image',
      registered: [{ image: 'image' }],
    };
  });

  it('Should call dispatch with addUserToEvent when clicking button', async () => {
    const mockStore = {
      dispatch: jest.fn(),
    };
    const wrapper = shallowMount(EventDetails, {
      computed: {
        event: () => {
          return event;
        },
      },
      mocks: { $store: mockStore },
    });
    await wrapper.find('.coming__action').trigger('click');
    expect(mockStore.dispatch).toHaveBeenCalledWith(
      'addUserToEvent',
      event._id
    );
  });
});
