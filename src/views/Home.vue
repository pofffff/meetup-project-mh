<template>
  <div class="home">
    <LoginForm v-show="this.$store.state.ifLogin" />
    <NewUserForm v-show="!this.$store.state.ifLogin" />
    <button @click="changeState">test</button>
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm";
import NewUserForm from "@/components/NewUserForm";
import { state } from "@/store/modules/state";

export default {
  name: "Home",
  components: { LoginForm, NewUserForm },
  methods: {
    changeState() {
      this.$store.state.ifLogin = true;
    },
  },
};
</script>
