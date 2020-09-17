<template>
  <div class="home">
    <LoginForm />
    <NewUserForm />
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm";
import NewUserForm from "@/components/NewUserForm";

export default {
  name: "Home",
  components: { LoginForm, NewUserForm },
};
</script>
