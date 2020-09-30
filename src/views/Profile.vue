<template>
  <div class="profile__wrapper">
    <UserDetails
      :user="user"
      :showAddEvent="showAddEvent"
      :showChangePhoto="showChangePhoto"
    />
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
      showAddEvent: false,
      headline: "Events Attended",
      showChangePhoto: false,
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
