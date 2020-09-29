<template>
  <div id="app">
    <Nav />
    <router-view />
  </div>
</template>

<script>
import Nav from "@/components/Nav";
import { mapState } from "vuex";
export default {
  components: {
    Nav,
  },
  computed: {
    ...mapState({
      isAuthenticated: (state) => {
        if (state.isAuthenticated === false) {
          this.$router.push("/login");
        }
      },
    }),
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600;800;900&display=swap&family=Ranchers");
@import "@/assets/scss/variables";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  border: none;
  box-shadow: 0 0 0px 1000px $color_dark inset;
  -webkit-text-fill-color: $white;
  -webkit-box-shadow: 0 0 0px 1000px $color_dark inset;
}

html {
  background: url("./assets/img/background.jpg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

html::-webkit-scrollbar {
  background: $color_dark;
  border-radius: 6px;
  width: 6px;
}
html::-webkit-scrollbar-thumb {
  background: $color_light;
  border-radius: 6px;
}

#app {
  display: flex;
  flex-direction: column;
  font-family: $font;
  color: $black;
  padding-bottom: 5rem;
}
</style>
