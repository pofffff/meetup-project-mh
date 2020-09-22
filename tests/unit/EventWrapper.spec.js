import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Vue from 'vue';
import EventWrapper from '@/components/EventWrapper.vue';

const localvue = createLocalVue().use(Vuex);
Vue.use(Vuex);

describe('EventWrapper', () => {
  let events;
  beforeEach(() => {
    events = [
      {
        _id: 'abc',
        name: 'name',
        city: 'city',
        time: 'time',
        date: 'date',
        description: 'description',
        image: 'image',
        registred: [{ image: 'image' }],
      },
      {
        _id: 'def',
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
  it('Should call getAllEvents when created and render all events from state', () => {
    const getAllEvents = jest.fn(),
      mockStore = {
        state: { events },
        getAllEvents,
      };

    const wrapper = mount(EventWrapper, {
      localvue,
      methods: { getAllEvents },
      mocks: { $store: mockStore },
      computed: {
        events: () => {
          return events;
        },
      },
      stubs: { UserRegistredToEvent: true },
    });

    const eventElements = wrapper.findAll('.event');

    expect(getAllEvents).toHaveBeenCalled();
    expect(eventElements.length).toBe(events.length);
    expect(mockStore.getAllEvents).toHaveBeenCalled();
  });
});
