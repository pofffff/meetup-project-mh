<template>
  <div class="nav__wrapper">
    <ul>
      <li @click="goTo('/')">Home</li>
      <li v-if="isAuthenticated" @click="goTo('/profile')">Profile</li>
      <li>Events</li>
      <li v-if="!isAuthenticated" @click="goTo('/login')">Login</li>
      <li v-if="isAuthenticated" @click="logout">Logout</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data: () => {
    return {};
  },
  computed: {
    ...mapState({
      isAuthenticated: (state) => {
        return state.isAuthenticated;
      },
    }),
  },
  methods: {
    goTo(path) {
      this.$router.push(path, () => {});
    },
    logout() {
      this.$store.dispatch("logoutUser");
      this.goTo("/");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
@import "@/assets/scss/style_mixins";

.nav__wrapper {
  position: fixed;
  padding: 1.5em 1em;

  ul {
    display: flex;
    align-items: center;
    list-style-type: none;
    color: $white;

    li {
      margin: 0 1.5em;
      font-size: 0.8em;
      letter-spacing: 2px;
      cursor: pointer;
    }

    li:hover {
      color: $color_light;
      @include pop;
    }
  }
}

@keyframes pop {
  50% {
    transform: scale(1.1);
  }
}
</style>
