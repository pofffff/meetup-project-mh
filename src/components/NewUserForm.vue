<template>
  <div class="form__wrapper">
    <h4>Sign up</h4>
    <ul>
      <aside
        @click="switchComponent"
        v-if="this.$store.state.emailExists"
      >Email already exists... Login</aside>
      <aside
        @click="support"
        v-if="this.$store.state.errorSavingUser"
      >Error register user. Contact support here</aside>
      <label v-show="!isValid.name" for="name">Must be a valid name</label>
      <li>
        <input id="name" type="text" v-model="name" placeholder="firstname lastname" />
      </li>
      <label v-show="!isValid.email" for="email">Must be a valid email</label>
      <li>
        <input id="email" type="email" v-model="email" placeholder="email" />
      </li>
      <label v-show="!isValid.password" for="password">Must be at least 6 characters</label>
      <li>
        <input id="password" type="password" v-model="password" placeholder="password" />
      </li>
    </ul>
    <section class="buttons__wrapper">
      <button @click="switchComponent" class="switch-side__button">
        <aside>Already have account?</aside>
        <aside>Login</aside>
      </button>
      <button @click="validate" class="action__button">Sign Up!</button>
    </section>
  </div>
</template>

<script>
export default {
  props: {},
  data: () => {
    return {
      name: "",
      email: "",
      password: "",
      isValid: { name: true, email: true, password: true },
    };
  },
  methods: {
    validName(name) {
      const pattern = /^[a-zA-ZåäöÅÄÖ]+ [a-zA-ZåäöÅÄÖ]+$/;
      if (pattern.test(name) === true) {
        this.isValid.name = true;
      } else {
        this.isValid.name = false;
      }
    },
    validEmail(email) {
      const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      if (pattern.test(email) === true) {
        this.isValid.email = true;
      } else {
        this.isValid.email = false;
      }
    },
    validPassword(password) {
      if (password.length >= 6) {
        this.isValid.password = true;
      } else {
        this.isValid.password = false;
      }
    },
    validate() {
      this.validName(this.name);
      this.validEmail(this.email);
      this.validPassword(this.password);
      const input = {
        name: this.name,
        email: this.email,
        password: this.password,
      };

      if (
        Object.keys(this.isValid).some((k) => !this.isValid[k]) === false &&
        Object.keys(input).some((key) => input[key] === "") === false
      ) {
        this.$store.dispatch("registerUser", input);
      }
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
  padding: 2.5em 1.5em 3em 1.5em;
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
    align-content: flex-end;
    .switch-side__button {
      text-align: left;
      background: none;
      border: none;
      cursor: pointer;
    }

    .switch-side__button:hover aside {
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

aside:hover {
  text-decoration: underline;
}
</style>
