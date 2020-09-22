<template>
  <div class="header__wrapper">
    <section class="headline__container">
      <h1>Discover</h1>
      <div>
        <p class="colored">Jellyfish Events</p>
        <p>All Over the World</p>
      </div>
    </section>
    <Search />
  </div>
</template>

<script>
import Search from "@/components/Search";

export default {
  components: {
    Search,
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/variables";

.header__wrapper {
  display: flex;
  flex-direction: column;
  .headline__container {
    display: flex;
    flex-direction: column;
    color: $white;
    align-self: flex-end;
    margin-right: 8rem;
    margin-top: 6rem;

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