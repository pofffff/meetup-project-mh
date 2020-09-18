<template>
  <div class="home">
    <LoginForm v-show="this.$store.state.ifLogin" />
    <NewUserForm v-show="!this.$store.state.ifLogin" />
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm";
import NewUserForm from "@/components/NewUserForm";

export default {
  name: "Home",
  components: { LoginForm, NewUserForm },
  methods: {},
};
</script>
