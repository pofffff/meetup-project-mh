<template>
  <div class="login__wrapper">
    <aside v-if="authenticationMessage">You need to login!</aside>
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
      authenticationMessage: (state) => {
        return state.authenticationMessage;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  aside {
    color: $white;
    position: absolute;
    margin: 1rem;
    margin-top: -25rem;
  }
}
</style>
