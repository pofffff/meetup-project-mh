<template>
  <div class="form__wrapper">
    <h4>Sign up</h4>
    <label v-show="!isValid.name" for="name">Must be a valid name</label>
    <input id="name" type="text" v-model="name" />
    <label v-show="!isValid.email" for="email">Must be a valid email</label>
    <input id="email" type="email" v-model="email" />
    <label v-show="!isValid.password" for="password">Must be at least 6 characters</label>
    <input id="password" type="password" v-model="password" />
    <section class="buttons__wrapper">
      <button class="switch-side__button">
        <aside>Already have account?</aside>
        <aside>Login</aside>
      </button>
      <button @click="validate" class="action__button">Login</button>
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
      isValid: { name: false, email: false, password: false },
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
  },
};
</script>

<style scoped lang="scss">
</style>
