import axios from 'axios';

const auth = {
  actions: {
    async authRequest(ctx, credentials) {
      const url = 'http://localhost:8080/authenticate';
      await axios
        .post(
          url,
          {},
          {
            headers: {
              email: credentials.email,
              password: credentials.password,
            },
          }
        )
        .then((response) => {
          const token = response.data.token;
          localStorage.setItem('token', token);
          console.log(token);
          //ctx('authSuccess', token);
        })
        .catch((error) => {
          localStorage.removeItem('token');
          console.log('Error: ' + error);
        });
    },
    async getUser(ctx) {},
  },
};
export default auth;
