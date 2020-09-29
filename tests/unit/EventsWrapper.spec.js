import { mount, createLocalVue } from '@vue/test-utils';
import EventsWrapper from '@/components/EventsWrapper.vue';
import VueRouter from 'vue-router';
import routes from '@/router/routes.js';

describe('EventWrapper', () => {
  const localVue = createLocalVue().use(VueRouter);
  const router = new VueRouter({ routes });
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
        dispatch: jest.fn(),
      },
      wrapper = mount(EventsWrapper, {
        localVue,
        mocks: { $store: mockStore },
        computed: {
          events: () => {
            return events;
          },
        },
        stubs: { UserRegistredToEvent: true },
      }),
      eventElements = wrapper.findAll('.event');

    expect(mockStore.dispatch).toHaveBeenCalledWith('getAllEvents');
    expect(eventElements.length).toBe(events.length);
  });

  it('Should call router.push with correct params', async () => {
    const id = '123',
      spy = jest.spyOn(router, 'push'),
      route = '/event/' + id,
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
    await wrapper.vm.$nextTick();

    expect(spy).toHaveBeenCalledWith(route);
  });
});
