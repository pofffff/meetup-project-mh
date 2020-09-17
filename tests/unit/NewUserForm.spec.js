import { shallowMount } from '@vue/test-utils';
import NewUserForm from '@/components/NewUserForm';
import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

describe('NewUserForm inputs', () => {
  let wrapper;
  let mockStore = { dispatch: jest.fn() };
  beforeEach(() => {
    wrapper = shallowMount(NewUserForm, {
      mocks: { $store: mockStore },
    });
  });

  it("Should dispatch action 'registerUser' if inputs are valid", async () => {
    const name = wrapper.find('#name'),
      email = wrapper.find('#email'),
      password = wrapper.find('#password'),
      button = wrapper.find('.action__button'),
      inputs = {
        name: 'förnamn efternamn',
        email: 'minemail@mail.se',
        password: '123456',
      };

    name.setValue(inputs.name);
    email.setValue(inputs.email);
    password.setValue(inputs.password);
    await button.trigger('click');

    expect(mockStore.dispatch).toHaveBeenCalledWith('registerUser', inputs);
  });

  it("Should not dispatch action 'registerUser' if any input is invalid", async () => {
    const name = wrapper.find('#name'),
      email = wrapper.find('#email'),
      password = wrapper.find('#password'),
      button = wrapper.find('.action__button'),
      inputs = {
        name: 'förnamn efternamn',
        email: 'notvalidemail',
        password: '123456',
      };

    name.setValue(inputs.name);
    email.setValue(inputs.email);
    password.setValue(inputs.password);
    await button.trigger('click');

    expect(mockStore.dispatch).not.toHaveBeenCalledWith('registerUser', inputs);
  });
});
