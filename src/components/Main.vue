<template>
  <div class="main__wrapper">
    <section class="headline__wrapper">
      <h1>Discover</h1>
      <div>
        <p class="colored">Jellyfish Events</p>
        <p>All Over the World</p>
      </div>
    </section>
    <Search />
    <EventWrapper />
  </div>
</template>

<script>
import Search from "@/components/Search";
import EventWrapper from "@/components/EventWrapper";

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

  .headline__wrapper {
    display: flex;
    flex-direction: column;
    color: $white;
    align-self: flex-end;
    margin-top: 4em;

    h1 {
      font-size: 8em;
      line-height: 1;
    }

    p:nth-of-type(2) {
      font-size: 3.5em;
      font-weight: 900;
      line-height: 1;
    }

    .colored {
      color: $color_light;
      font-size: 4em;
      font-weight: 900;
    }
  }
}
</style>