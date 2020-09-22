import { mount } from '@vue/test-utils';
import Vuex from 'vuex';
import Vue from 'vue';
import EventWrapper from '@/components/EventWrapper.vue';
import actions from '@/store/modules/actions.js';
Vue.use(Vuex);

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
      wrapper = mount(EventWrapper, {
        //localvue,
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

  it('Should call dispatch getAllEvents at render', async () => {
    const mockStore = {
        state: { events },
        dispatch: jest.fn(),
      },
      id = '123';
    const wrapper = mount(EventWrapper, {
      //localvue,
      mocks: { $store: mockStore },
      computed: {
        events: () => {
          return events;
        },
      },
      stubs: { UserRegistredToEvent: true },
    });

    const eventElements = wrapper.findAll('.event');
    await eventElements.at(0).trigger('click');
    await Vue.nextTick();
    expect(mockStore.dispatch).toHaveBeenCalledWith('getAllEvents');
    expect(mockStore.dispatch).toHaveBeenCalledWith('getEvent', id);

    // En del röd error på grund av promise som jag inte förstått hur jag ska lösa än
  });
});
