import { mount, createLocalVue, shallowMount } from '@vue/test-utils';
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
      image: 'image',
    };
  });

  it('Should render all user elements with props', () => {
    /* jest.mock('../../server/uploads/default_img.png', () => {
      return '../assets/logo.png';
    }); */
    // FUUUCK?
    const wrapper = mount(UserDetails, {
      localvue,
      propsData: { user },
    });

    expect(wrapper.props()).toBe('user');
  });
});
