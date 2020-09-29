<template>
  <div class="my-events__wrapper">
    <h3>{{ headline }}</h3>
    <ul>
      <li
        class="event"
        @click="goTo(event._id)"
        v-for="event in events"
        :key="event._id"
      >
        <div class="image__container">
          <img :src="event.image" alt="event image" />
        </div>
        <section class="right__section">
          <h4>{{ event.name }}</h4>
          <p>{{ event.city }}</p>
          <p>{{ event.date }} - {{ event.time }}</p>
        </section>
      </li>
    </ul>
  </div>
</template>

<script>
import Event from "@/components/Event";

export default {
  props: { events: Array, headline: String },
  methods: {
    goTo(id) {
      this.$router.push("/event/" + id);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.my-events__wrapper {
  width: 60%;
  margin: 2rem 0;

  h3 {
    font-size: 32px;
    align-self: flex-start;
    margin: 0.5rem;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;

    li {
      cursor: pointer;
      width: 49%;
      height: 150px;
      background: $color_dark;
      display: flex;
      align-items: center;
      border-radius: 20px;
      margin: 0.3rem;
      padding: 1rem;

      .image__container {
        display: flex;
        align-items: center;
        width: 150px;
        height: 120px;
        margin-right: 1.5rem;

        img {
          width: 100%;
          height: 100%;
          border-radius: 20px;
          object-fit: cover;
        }
      }

      .right__section {
        display: flex;
        flex-direction: column;
        text-align: left;

        h4 {
          font-size: 1.2rem;
        }

        p {
          font-size: 0.8rem;
          margin: 5px 0;
        }
      }
    }
  }
}
</style>