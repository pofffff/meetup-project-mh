<template>
  <div class="profile__wrapper">
    <UserDetails :user="user" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import UserDetails from "@/components/UserDetails";
export default {
  components: { UserDetails },
  computed: {
    ...mapState({
      user: (state) => state.user,
    }),
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.profile__wrapper {
  color: $white;
  font-size: 10em;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
