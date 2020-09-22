<template>
  <div class="home__wrapper">
    <Header />
    <EventWrapper />
  </div>
</template>

<script>
import Header from "@/components/Header";
import EventWrapper from "@/components/EventWrapper";

export default {
  name: "Home",
  components: { Header, EventWrapper },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.home__wrapper {
  display: flex;
  flex-direction: column;

  max-width: 100vw;
}
</style>
