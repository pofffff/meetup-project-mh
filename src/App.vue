<template>
  <div id="app">
    <Nav />
    <button @click="getData">GET DATA</button>
    <router-view />
  </div>
</template>

<script>
import Nav from "@/components/Nav";
export default {
  components: {
    Nav,
  },
  methods: {
    getData() {
      this.$store.dispatch("test");
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
