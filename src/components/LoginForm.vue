<template>
  <div class="form__wrapper">
    <h4>Login</h4>
    <ul>
      <li>
        <input placeholder="email" type="email" v-model="email" />
      </li>
      <li>
        <input placeholder="password" type="password" v-model="password" />
      </li>
      <aside>Forgot password?</aside>
    </ul>
    <section class="buttons__wrapper">
      <button @click="switchComponent" class="switch-side__button">
        <aside>Don't have an account?</aside>
        <aside>Sign Up!</aside>
      </button>
      <button @click="login" class="action__button">Login</button>
    </section>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      const credentials = { email: this.email, password: this.password };
      this.$store.dispatch("authRequest", credentials).then(() => {
        location.reload();
        this.$router.push(this.$store.state.currentPath)
      })
    },
    switchComponent() {
      this.$store.state.ifLogin = !this.$store.state.ifLogin;
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables";

.form__wrapper {
  background: $color_dark;
  width: 330px;
  height: 370px;
  border-radius: 20px;
  padding: 3em 1.5em 3em 1.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  h4 {
    color: $white;
    align-self: flex-start;
    font-size: 1.5em;
  }

  ul {
    width: 100%;
    margin-bottom: 2em;
    li {
      list-style: none;
      margin: 1em 0;

      input {
        outline: none;
        height: 3em;
        padding: 0 10px;
        border: 0.5px solid $white;
        border-radius: 4px;
        font-weight: 500;
        background: none;
        color: $white;
        font-size: 0.8em;
        width: 100%;
        letter-spacing: 1.5px;
        opacity: 0.5;
      }
    }
  }

  .buttons__wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;

    .switch-side__button {
      text-align: left;
      background: none;
      color: $white;
      border: none;
      cursor: pointer;
    }

    .switch-side__button:hover {
      text-decoration: underline;
    }

    .action__button {
      background: $color_light;
      color: $white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      padding: 6px 18px;
    }
  }
}

aside {
  font-size: 13px;
  opacity: 0.5;
  cursor: pointer;
  color: $white;
  font-family: $font;
  line-height: 1;
}
</style>
