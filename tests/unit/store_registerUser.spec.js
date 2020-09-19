import { mount, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import Vue from "vue";
import state from "@/store/modules/state.js";
import mutations from "@/store/modules/mutations.js";
import actions from "@/store/modules/actions.js";

Vue.use(Vuex);

let url = "",
  body = {},
  headers = {},
  mockError = false;

jest.mock("axios", () => ({
  post: (_url, _body, _headers) => {
    const response = { data: { success: true } };

    return new Promise((resolve) => {
      if (mockError) throw Error("Mock error");

      url = _url;
      body = _body;
      headers = _headers;
      resolve(response);
    });
  },
}));

describe("actions - registerUser", () => {
  it("Should run with correct params and change state if success", async () => {
    const headers = {
        name: "förnamn efternamn",
        email: "testemail@mail.com",
        password: "123456",
      },
      name = "förnamn efternamn",
      email = "testemail@mail.com",
      password = "123456",
      commit = jest.fn(),
      state = { ifLogin: false };

    await actions.registerUser({ commit }, { name, email, password });
    await mutations.registerSuccess(state);

    expect(url).toBe("http://localhost:8080/user");
    expect(headers).toEqual({ name, email, password });
    expect(commit).toHaveBeenCalledWith("registerSuccess");
    expect(state.ifLogin).toBe(true);
  });

  it("Should throw error, commit and change state if error during registerUser", async () => {
    const commit = jest.fn(),
      state = { errorSavingUser: false };
    mockError = true;

    await mutations.registerError(state);
    await expect(actions.registerUser({ commit }, {})).rejects.toThrow(
      "An error occurred when trying to register user"
    );

    expect(commit).toHaveBeenCalledWith("registerError");
    expect(state.errorSavingUser).toBe(true);
  });

  it("Should change state if email exists", async () => {
    const state = { emailExists: false };

    await mutations.registerFailed(state);

    expect(state.emailExists).toBe(true);
  });
});
