<template>
  <div class="login__wrapper">
    <LoginForm v-show="this.$store.state.ifLogin" />
    <NewUserForm v-show="!this.$store.state.ifLogin" />
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm";
import NewUserForm from "@/components/NewUserForm";

export default {
  name: "Login",
  components: { LoginForm, NewUserForm },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.login__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}
</style>
