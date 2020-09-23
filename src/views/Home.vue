<template>
  <div class="home__wrapper">
    <Header />
    <EventsWrapper />
  </div>
</template>

<script>
import Header from "@/components/Header";
import EventsWrapper from "@/components/EventsWrapper";

export default {
  name: "Home",
  components: { Header, EventsWrapper },
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
