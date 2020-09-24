import axios from 'axios';
export default {
  async registerUser({ commit }, user) {
    const url = '/user/register';
    await axios
      .post(
        url,
        {},
        {
          headers: {
            name: user.name,
            email: user.email,
            password: user.password,
          },
        }
      )
      .then((response) => {
        if (response.data.success === true) {
          commit('registerSuccess');
        }
        if (response.data.emailExists === true) {
          commit('registerFailed');
        }
      })
      .catch((error) => {
        commit('registerError');
      });
  },
  async addProfileImage({ dispatch, commit }, formData) {
    console.log('HERE');
    const url = '/user/image';
    fetch(url, {
      method: 'POST',
      body: formData,
      headers: { authorization: localStorage.getItem('token') },
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch('userRequest');
      })
      .catch((error) => {
        localStorage.removeItem('token');
        commit('authenticationError');
        console.error(error);
      });
  },
  async addEvent({ commit }, event) {
    const url = '/event/add';
    await axios
      .post(url, event)
      .then((response) => {
        console.log(response);
        commit('addEventResponse', response.data.success);
      })
      .catch((error) => {
        console.error(error);
        commit('authenticationError');
      });
  },
  async getAllEvents({ commit }) {
    const url = '/event/getAll';

    await axios
      .get(url)
      .then((response) => {
        commit('getAllEventsSuccess', response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  },
  async getEvent({ commit }, id) {
    const url = '/event/getOne/' + id;

    await axios
      .get(url, {}, { id: id })
      .then((response) => {
        commit('getEventSuccess', response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  },
  async addComment({ commit, dispatch }, data) {
    const url = '/event/addComment';
    await axios
      .post(url, { event_id: data.event_id, comment: data.comment })
      .then((response) => {
        if (response.data.success === true) {
          dispatch('getEvent', response.data.event_id);
        }
      })
      .catch((error) => {
        console.error(error);
        commit('authenticationError');
      });
  },
  async addUserToEvent({ commit, dispatch }, id) {
    const url = '/event/addUser';
    await axios
      .post(url, { event_id: id })
      .then((response) => {
        if (response.data.success === true) {
          dispatch('getEvent', response.data.event_id);
        }
      })
      .catch((error) => {
        console.error(error);
        commit('authenticationError');
      });
  },
};
