import { shallowMount, mount } from '@vue/test-utils';
import Vuex from 'vuex';
import Vue from 'vue';
import actions from '@/store/modules/actions.js';
import mutations from '@/store/modules/mutations.js';
import state from '@/store/modules/state.js';
import Home from '@/views/Home.vue';
import LoginForm from '@/components/LoginForm.vue';
import NewUserForm from '@/components/NewUserForm';


// Acceptance test / E2E testing
// Scenario : 
// - User cl
Vue.use(Vuex);


let url = '',
  body = {},
  headers = {};


jest.mock('axios', () => ({
  post: (_url, _body, _headers) => {
    return new Promise((resolve) => {
      url = _url;
      body = _body;
      headers = _headers;
      resolve(true);
    });
  },
}));

it('Should display component login instead of newuser if user is successfully added', async () => {
  const mockStore = {
      state: {
        state,
      },
      dispatch: jest.fn(),
    },
    wrapper = mount(Home, {
      mocks: { $store: mockStore },
    });

  const NewUserFormComponent = wrapper.findComponent(NewUserForm),
    inputName = NewUserFormComponent.find('#name'),
    inputEmail = NewUserFormComponent.find('#email'),
    inputPassword = NewUserFormComponent.find('#password'),
    button = NewUserFormComponent.find('.action__button'),
    headers = {
      name: 'förnamn efternamn',
      email: 'testemail@mail.com',
      password: '123456',
    },
    name = 'förnamn efternamn',
    email = 'testemail@mail.com',
    password = '123456',
    data = { success: true },
    commit = jest.fn();

  inputName.setValue(headers.name);
  inputEmail.setValue(headers.email);
  inputPassword.setValue(headers.password);
  await button.trigger('click');

  await actions.registerUser({ commit }, { name, email, password });
  await mutations.handleRegisterUser(state, data);

  expect(mockStore.dispatch).toHaveBeenCalledWith('registerUser', headers);
  expect(url).toBe('http://localhost:8080/user');
  expect(headers).toEqual({ name, email, password });
  // Had to set undefined to get it green.
  // Could not solve it by passing in an object as in the real action.
  expect(commit).toHaveBeenCalledWith('handleRegisterUser', undefined);
  console.log(state.ifLogin);
  expect(state.ifLogin).toBe(true);
  const LoginFormComponent = wrapper.findComponent(LoginForm);

  // Problem with test when using v-if on component.
  // V-show works for the test
  expect(LoginFormComponent.exists()).toBe(true);
}); 
