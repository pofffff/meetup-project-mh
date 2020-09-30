<template>
  <div class="form__wrapper">
    <h4>Login</h4>
    <aside v-if="wrongCredentials">incorrect email or password</aside>
    <ul>
      <li>
        <input placeholder="email" type="email" v-model="email" />
      </li>
      <li>
        <input
          @keydown.enter="login"
          placeholder="password"
          type="password"
          v-model="password"
        />
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
import { mapState } from "vuex";

export default {
  data: () => {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    ...mapState({
      wrongCredentials: (state) => {
        return state.wrongCredentials;
      },
    }),
  },
  methods: {
    login() {
      const credentials = { email: this.email, password: this.password };
      this.$store.dispatch("loginRequest", credentials);
    },
    switchComponent() {
      this.$store.state.ifLogin = !this.$store.state.ifLogin;
      this.$store.state.authenticationMessage = false;
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables";
@import "@/assets/scss/style_mixins";

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
        @include input;
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
      @include button;
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
  align-self: flex-start;
}
</style>
