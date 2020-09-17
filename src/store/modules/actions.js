export default {
  async registerUser(ctx, user) {
    console.log('action before fetch');

    const url = 'http://localhost:8080/user/register';
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
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
};
