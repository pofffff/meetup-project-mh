import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import App from '@/App.vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import EventDetails from '@/views/EventDetails.vue';
import AddEvent from '@/views/AddEvent.vue';
import routes from '@/router/routes.js';

const localVue = createLocalVue().use(VueRouter, Vuex);

describe('App', () => {
  let events, event, filtered, store, router;

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
    events = [
      {
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
      },
    ];
    filtered = false;
    router = new VueRouter({ routes, mode: 'abstract' });
    store = new Vuex.Store({
      state: {
        event,
        events,
        filtered,
        dispatch: jest.fn(),
      },
    });
  });

  it('renders a home view via routing', async () => {
    const wrapper = mount(App, {
      localVue,
      router,
      store,
      stubs: { Nav: true, EventsWrapper: true },
    });
    router.push('/');
    await wrapper.vm.$nextTick();

    expect(wrapper.findComponent(Home).exists()).toBe(true);
  });

  it('renders a login view via routing', async () => {
    const wrapper = mount(App, {
      localVue,
      router,
      store,
      stubs: { Nav: true, EventsWrapper: true },
    });
    router.push('/login');
    await wrapper.vm.$nextTick();

    expect(wrapper.findComponent(Login).exists()).toBe(true);
  });

  it('renders a EventDetails view via routing', async () => {
    const wrapper = mount(App, {
      localVue,
      router,
      store,
      stubs: { Nav: true, EventsWrapper: true },
    });
    router.push('/event/:id');
    await wrapper.vm.$nextTick();

    expect(wrapper.findComponent(EventDetails).exists()).toBe(true);
  });

  // Försökt testa routes som har navigation guards men inte lyckats tyvärr

  /* it('renders a AddEvent view via routing', async () => {
    const wrapper = mount(App, {
      localVue,
      router,
      store,
      computed: {
        events: () => {
          return events;
        },
      },
      stubs: { Nav: true, EventsWrapper: true },
    });
    router.push('/AddEvent');
    const next = jest.fn();
    router.beforeEnter(undefined, undefined, next);

    await wrapper.vm.$nextTick();

    expect(wrapper.findComponent(AddEvent).exists()).toBe(true);
  }); */
});
