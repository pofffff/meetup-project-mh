<template>
  <div class="profile__wrapper">
    <UserDetails :user="user" :showAddEvent="showAddEvent" />
    <MyEvents :events="user.attend_to" :headline="headline" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import UserDetails from "@/components/UserDetails";
import MyEvents from "@/components/MyEvents";

export default {
  components: { UserDetails, MyEvents },
  computed: {
    ...mapState({
      user: (state) => state.user,
    }),
  },
  data: () => {
    return {
      showAddEvent: true,
      headline: "My Events",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.profile__wrapper {
  color: $white;
  font-size: 10em;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
