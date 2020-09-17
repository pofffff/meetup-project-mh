export default {
  async registerUser(ctx, user) {
    const url = 'http://localhost:8080/user';
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        name: user.name,
        email: user.email,
        password: user - password,
      },
      // body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          console.log(data);
          console.log('action if data');
          ctx.commit('handleRegisterUser', data);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  },
  async login(ctx, credentials) {},
};
