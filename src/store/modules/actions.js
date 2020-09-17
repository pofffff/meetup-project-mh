import axios from 'axios';

export default {
  async registerUser(ctx, user) {
    const url = 'http://localhost:8080/user';
    let axiosConfig = {
      headers: {
        name: user.name,
        email: user.email,
        password: user.password,
      },
    };
    const response = await axios.post(
      url,
      {},
      {
        headers: {
          name: user.name,
          email: user.email,
          password: user.password,
        },
      }
    );
  },
  async login(ctx, credentials) {},
};
