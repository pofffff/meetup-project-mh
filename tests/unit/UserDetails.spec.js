import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Vue from 'vue';
import UserDetails from '@/components/UserDetails.vue';

const localvue = createLocalVue().use(Vuex);
Vue.use(Vuex);

describe('UserDetails', () => {
  let user;
  beforeEach(() => {
    user = {
      _id: 'abc',
      name: 'name',
      comments_written: 0,
      attend_to: 0,
    };
  });

  it('Should render all user elements with props', () => {
    const wrapper = mount(UserDetails, {
      localvue,
      propsData: { user },
      computed: {
        profileImage: () => {
          return 'default_img.png';
        },
      },
    });

    expect(wrapper.props()).toStrictEqual({ user });
  });
});
