<template>
  <div class="login__wrapper">
    <LoginForm v-show="ifLogin" />
    <NewUserForm v-show="!ifLogin" />
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm";
import NewUserForm from "@/components/NewUserForm";
import { mapState } from "vuex";
export default {
  name: "Login",
  components: { LoginForm, NewUserForm },
  computed: {
    ...mapState({
      ifLogin: (state) => {
        return state.ifLogin;
      },
    }),
  },
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
