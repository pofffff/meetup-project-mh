<template>
  <div class="home__wrapper">
    <Main v-show="this.$store.state.showMain" />
    <section v-show="!this.$store.state.showMain" class="user-handling__section">
      <LoginForm v-show="this.$store.state.ifLogin" />
      <NewUserForm v-show="!this.$store.state.ifLogin" />
    </section>
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm";
import NewUserForm from "@/components/NewUserForm";
import Main from "@/components/Main";

export default {
  name: "Home",
  components: { Main, LoginForm, NewUserForm },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.home__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}
</style>
