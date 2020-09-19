import { mount, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import Vue from "vue";
import state from "@/store/modules/state.js";
import mutations from "@/store/modules/mutations.js";
import actions from "@/store/modules/actions.js";
import NewUserForm from "@/components/NewUserForm.vue";

Vue.use(Vuex);

describe("NewUserForm input validation", () => {
  let wrapper;
  const mockStore = {
    state: {
      state,

    },
    dispatch: jest.fn(),
  };

  beforeEach(() => {
    wrapper = shallowMount(NewUserForm, {
      mocks: { $store: mockStore },
    });
  });

  it("Should dispatch action 'registerUser' if inputs are valid", async () => {
    const headline = wrapper.find("h4");
    const name = wrapper.find("#name"),
      email = wrapper.find("#email"),
      password = wrapper.find("#password"),
      button = wrapper.find(".action__button"),
      inputs = {
        name: "förnamn efternamn",
        email: "minemail@mail.se",
        password: "123456",
      };

    name.setValue(inputs.name);
    email.setValue(inputs.email);
    password.setValue(inputs.password);
    await button.trigger("click");

    expect(mockStore.dispatch).toHaveBeenCalledWith("registerUser", inputs);
  });

  it("Should not dispatch action 'registerUser' if any input is invalid", async () => {
    const name = wrapper.find("#name"),
      email = wrapper.find("#email"),
      password = wrapper.find("#password"),
      button = wrapper.find(".action__button"),
      inputs = {
        name: "förnamn efternamn",
        email: "not_a_valid_email",
        password: "123456",
      };

    name.setValue(inputs.name);
    email.setValue(inputs.email);
    password.setValue(inputs.password);
    await button.trigger("click");

    expect(mockStore.dispatch).not.toHaveBeenCalledWith("registerUser", inputs);
  });

 
});


