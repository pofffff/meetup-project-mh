<template>
  <div class="nav__wrapper">
    <ul>
      <li @click="goTo('/')">Home</li>
      <li v-if="this.$store.state.isAuthenticated" @click="goTo('/profile')">
        Profile
      </li>
      <li>Events</li>
      <li v-if="!this.$store.state.isAuthenticated" @click="login">Login</li>
      <li v-if="this.$store.state.isAuthenticated" @click="logout">Logout</li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => {
    return {};
  },
  methods: {
    goTo(path) {
      if (this.$route.path !== path) {
        this.$router.push(path);
      }
    },
    logout() {
      //if logout success, promise will resolve router.push
      this.$store.dispatch("logoutUser").then(() => {
        this.$store.state.showMain = true;
        location.reload();
        this.$router.push("/");
      });
    },
    login() {
      this.$store.state.showMain = false;
      this.$store.state.redirectPath = "/";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

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
      animation-name: pop;
      transform: perspective(1px) translateZ(0);
      animation-iteration-count: 1;
      animation-duration: 0.2s;
    }
  }
}

@keyframes pop {
  50% {
    transform: scale(1.1);
  }
}
</style>
