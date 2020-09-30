import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Vue from 'vue';
import UserDetails from '@/components/UserDetails.vue';

const localvue = createLocalVue().use(Vuex);
Vue.use(Vuex);

describe('UserDetails', () => {
  let user, showAddEvent;
  beforeEach(() => {
    user = {
      _id: 'abc',
      name: 'name',
      comments: [],
      attend_to: 0,
    };
    showAddEvent = false;
  });

  it('Should render all user elements with props', () => {
    const wrapper = mount(UserDetails, {
      localvue,
      propsData: { user, showAddEvent },
      computed: {
        profileImage: () => {
          return 'default_img.png';
        },
      },
    });

    expect(wrapper.props()).toStrictEqual({ user, showAddEvent });
  });
});
