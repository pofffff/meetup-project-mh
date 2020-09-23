import { mount, createLocalVue } from '@vue/test-utils';
import EventsWrapper from '@/components/EventsWrapper.vue';
import VueRouter from 'vue-router';

describe('EventWrapper', () => {
  let events;
  beforeEach(() => {
    events = [
      {
        _id: '123',
        name: 'name',
        city: 'city',
        time: 'time',
        date: 'date',
        description: 'description',
        image: 'image',
        registred: [{ image: 'image' }],
      },
      {
        _id: '456',
        name: 'name',
        city: 'city',
        time: 'time',
        date: 'date',
        description: 'description',
        image: 'image',
        registred: [{ image: 'image' }],
      },
    ];
  });
  it('Should call getAllEvents when created and render all events from state.', () => {
    const mockStore = {
        state: { events },
      },
      getAll = jest.fn(),
      wrapper = mount(EventsWrapper, {
        methods: { getAll },
        mocks: { $store: mockStore },
        computed: {
          events: () => {
            return events;
          },
        },
        stubs: { UserRegistredToEvent: true },
      }),
      eventElements = wrapper.findAll('.event');

    expect(getAll).toHaveBeenCalled();
    expect(eventElements.length).toBe(events.length);
  });

  it('Should call dispatch correctly', async () => {
    const localVue = createLocalVue().use(VueRouter);
    const router = new VueRouter({
      routes: [{ path: '/fake', name: 'fake' }],
    });
    const id = '123',
      mockStore = {
        state: { events },
        dispatch: jest.fn(),
      },
      wrapper = mount(EventsWrapper, {
        localVue,
        router,
        mocks: { $store: mockStore },
        computed: {
          events: () => {
            return events;
          },
        },
        stubs: {
          UserRegistredToEvent: true,
        },
      });

    const eventElements = wrapper.findAll('.event');
    await eventElements.at(0).trigger('click');
    expect(mockStore.dispatch).toHaveBeenCalledWith('getAllEvents');
    expect(mockStore.dispatch).toHaveBeenCalledWith('getEvent', id);
  });
});
