<template>
  <div class="profile__wrapper">
    <button @click="goTo('/addevent')" class="add">Add event</button>
  </div>
</template>

<script>
export default {
  methods: {
    goTo(path) {
        if (this.$route.path !== path) {
          this.$router.push(path);
        }
    },
  },
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
  justify-content: center;
  align-items: center;
}
</style>
