<template>
  <div class="event__wrapper">
    <h1>{{event.name}}</h1>

    <section class="event__container">
      <div class="image__container">
        <img :src="event.image" alt />
      </div>
    </section>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      event: (state) => {
        return state.event;
      },
    }),
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
@import "@/assets/scss/style_mixins";

.event__wrapper {
  color: $white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20%;

  h1 {
    font-size: 100px;
    color: $white;
    align-self: flex-start;
  }

  .event__container {
    background: $color_dark;
    width: 100%;
    height: 500px;
    border-radius: 20px;

    .image__container {
      width: 300px;
      height: 250px;

      img {
        width: 100%;
        height: 250px;
        border-radius: 10px;
        object-fit: cover;
      }
    }
  }
}
</style>