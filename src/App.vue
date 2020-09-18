<template>
  <div id="app">
    <Nav />
    <router-view />
  </div>
</template>

<script>
import Nav from "@/components/Nav";
export default {
  components: {
    Nav,
  },
  methods: {},
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

html {
  background: url("./assets/img/jellyfish.background.jpg") no-repeat center
    center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
#app {
  font-family: $font;
  height: 100vh;
  width: 100vh;
  color: $black;
}
</style>
