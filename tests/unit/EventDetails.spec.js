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
      },
      id = '123',
      wrapper = shallowMount(EventDetails, {
        computed: {
          event: () => {
            return event;
          },
          registered: () => {
            return event;
          },
        },
        mocks: { $store: mockStore, $route: { params: { id } } },
      });

    await wrapper.find('.coming__action').trigger('click');
    expect(mockStore.dispatch).toHaveBeenCalledWith(
      'addUserToEvent',
      event._id
    );
  });

  it('Should call dispatch with correct params when created', async () => {
    const mockStore = {
        dispatch: jest.fn(),
      },
      id = '123';
    shallowMount(EventDetails, {
      computed: {
        event: () => {
          return event;
        },
        registered: () => {
          return event;
        },
      },
      mocks: { $store: mockStore, $route: { params: { id } } },
    });

    expect(mockStore.dispatch).toHaveBeenCalledWith('getEvent', id);
  });
});
