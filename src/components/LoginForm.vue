<template>
  <div class="form__wrapper">
    <h4>Login</h4>
    <input placeholder="email" type="email" v-model="email" />
    <input placeholder="password" type="password" v-model="password" />
    <section class="buttons__wrapper">
      <button class="switch-side__button">
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
      this.$store.dispatch("login", credentials);
    },
  },
};
</script>

<style scoped lang="scss">
</style>
