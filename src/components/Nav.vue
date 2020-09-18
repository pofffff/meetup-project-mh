<template>
  <div class="nav__wrapper">
    <ul>
      <li><h1>JellyfishMeets</h1></li>
      <li @click="goTo('/user')">Profile</li>
      <li @click="goTo('/addevent')">NewEvent</li>
      <li>Events</li>
      <li @click="logout">Logout</li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => {
    return {

    }
  },
  methods: {
    goTo(path) {
      if(this.$route.path !== path) {
        this.$router.push(path)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
