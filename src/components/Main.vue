<template>
  <div class="main__wrapper">
    <section class="headline__wrapper"></section>
    <EventWrapper />
  </div>
</template>

<script>
export default {
  components: { Search, EventWrapper },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.main__wrapper {
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>