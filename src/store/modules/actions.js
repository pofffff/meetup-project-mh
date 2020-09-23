import axios from 'axios';
export default {
  async registerUser({ commit }, user) {
    const url = 'http://localhost:8080/user';
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
        console.log('Error: ' + error);
        commit('registerError');
        throw Error('An error occurred when trying to register user');
      });
  },
  async addProfileImage(ctx, formData) {
    const url = 'http://localhost:8080/user/image';
    fetch(url, {
      method: 'POST',
      body: formData,
      headers: { authorization: localStorage.getItem('token') },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  },
  async addEvent(ctx, event) {
    const url = 'http://localhost:8080/event/add';
    await axios
      .post(url, event)
      .then((response) => {
        console.log(response.data.success);
      })
      .catch((error) => {
        throw Error('Error adding event');
      });
  },
  async getAllEvents({ commit }) {
    const url = 'http://localhost:8080/event/getAll';

    await axios
      .get(url)
      .then((response) => {
        console.log(response);
        commit('getAllEventsSuccess', response.data);
      })
      .catch((error) => {
        throw Error('Error adding event');
      });
  },
  async getEvent({ commit }, id) {
    const url = 'http://localhost:8080/event/getOne/' + id;

    await axios
      .get(url, {}, { id: id })
      .then((response) => {
        commit('getEventSuccess', response.data);
      })
      .catch((error) => {
        throw Error('Error adding event');
      });
  },
};
