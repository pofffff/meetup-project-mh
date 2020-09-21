<template>
  <div class="home__wrapper">
    <Main />
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
  created() {
    this.$store.dispatch("getAllEvents");
  },
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
