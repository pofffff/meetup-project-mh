import { mount } from '@vue/test-utils';
import Home from '@/views/Home.vue';
import EventsWrapper from '@/components/EventsWrapper.vue';
import Search from '@/components/Search.vue';

describe('Search', () => {
  let events, filtered;
  beforeEach(() => {
    events = [
      {
        _id: '1',
        name: 'name',
        city: 'Rom',
        time: 'time',
        date: 'date',
        description: 'description',
        image: 'image',
        registred: [{ image: 'image' }],
        categories: ['food'],
      },
      {
        _id: '2',
        name: 'name',
        city: 'Rom',
        time: 'time',
        date: 'date',
        description: 'description',
        image: 'image',
        registred: [{ image: 'image' }],
        categories: ['party'],
      },
      {
        _id: '3',
        name: 'name',
        city: 'Göteborg',
        time: 'time',
        date: 'date',
        description: 'description',
        image: 'image',
        registred: [{ image: 'image' }],
        categories: ['party'],
      },
      {
        _id: '4',
        name: 'name',
        city: 'Göteborg',
        time: 'time',
        date: 'date',
        description: 'description',
        image: 'image',
        registred: [{ image: 'image' }],
        categories: ['party'],
      },
      {
        _id: '5',
        name: 'name',
        city: 'Los Angeles',
        time: 'time',
        date: 'date',
        description: 'description',
        image: 'image',
        registred: [{ image: 'image' }],
        categories: ['food'],
      },
    ];
    filtered = [];
  });

  it('Should filter events by city', async () => {
    const mockStore = {
        state: { events, filtered },
        dispatch: jest.fn(),
      },
      wrapper = mount(Home, {
        mocks: { $store: mockStore },
        computed: {
          events: () => {
            return events;
          },
        },
        stubs: { UserRegistredToEvent: true },
      }),
      EventsComponent = wrapper.findComponent(EventsWrapper),
      SearchComponent = wrapper.findComponent(Search);
    SearchComponent.setData({ selectedCity: 'Rom' });
    await SearchComponent.find('.filter').trigger('click');
    expect(EventsComponent.findAll('.event').length).toBe(2);
  });

  it('Should filter events by category', async () => {
    const mockStore = {
        state: { events, filtered },
        dispatch: jest.fn(),
      },
      wrapper = mount(Home, {
        mocks: { $store: mockStore },
        computed: {
          events: () => {
            return events;
          },
        },
        stubs: { UserRegistredToEvent: true },
      }),
      EventsComponent = wrapper.findComponent(EventsWrapper),
      SearchComponent = wrapper.findComponent(Search);
    SearchComponent.setData({ selectedCategory: 'food' });
    await SearchComponent.find('.filter').trigger('click');
    expect(EventsComponent.findAll('.event').length).toBe(2);
  });

  it('Should filter events by category and city', async () => {
    const mockStore = {
        state: { events, filtered },
        dispatch: jest.fn(),
      },
      wrapper = mount(Home, {
        mocks: { $store: mockStore },
        computed: {
          events: () => {
            return events;
          },
        },
        stubs: { UserRegistredToEvent: true },
      }),
      EventsComponent = wrapper.findComponent(EventsWrapper),
      SearchComponent = wrapper.findComponent(Search);
    SearchComponent.setData({ selectedCategory: 'party', selectedCity: 'Rom' });

    await SearchComponent.find('.filter').trigger('click');
    expect(EventsComponent.findAll('.event').length).toBe(1);
  });

  it('Should display all events again after resetFilter', async () => {
    const mockStore = {
        state: { events, filtered },
        dispatch: jest.fn(),
      },
      wrapper = mount(Home, {
        mocks: { $store: mockStore },
        computed: {
          events: () => {
            return events;
          },
        },
        stubs: { UserRegistredToEvent: true },
      }),
      EventsComponent = wrapper.findComponent(EventsWrapper),
      SearchComponent = wrapper.findComponent(Search);
    SearchComponent.setData({ selectedCategory: 'party', selectedCity: 'Rom' });

    await SearchComponent.find('.filter').trigger('click');
    await SearchComponent.find('.reset').trigger('click');
    expect(EventsComponent.findAll('.event').length).toBe(5);
  });
});
