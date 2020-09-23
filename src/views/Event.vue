<template>
  <div class="event__wrapper">
    <h1>{{event.name}}</h1>
    <section class="event__container">
      <div class="image__container">
        <img :src="event.image" alt />
      </div>
      <ul class="event-details__list">
        <li>
          <i class="fas fa-map-marker-alt"></i>
          <p class="bold">{{event.city}}</p>
        </li>
        <li>
          <i class="fas fa-map-marked-alt"></i>
          <p>{{event.adress}}</p>
        </li>
        <li>
          <i class="far fa-calendar-alt"></i>
          <p>{{event.date}} - {{event.time}}</p>
        </li>
        <li>
          <i class="fas fa-info"></i>
          <p>{{event.description}}</p>
        </li>
        <li>
          <i class="fas fa-child"></i>
          <p>{{event.registered.length}} registered</p>
          <button class="action__button">I'm coming</button>
        </li>
      </ul>
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
  padding: 5rem 10%;

  h1 {
    font-size: 100px;
    color: $white;
    align-self: flex-start;
  }

  .event__container {
    background: $color_dark;
    width: 100%;
    height: 400px;
    border-radius: 20px;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .image__container {
      width: 500px;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        object-fit: cover;
      }
    }

    .event-details__list {
      display: flex;
      flex-direction: column;
      align-content: flex-start;
      list-style: none;
      height: 100%;
      width: 500px;
      li {
        display: grid;
        grid-template-areas: "left-column right-column";
        grid-template-columns: 50px 470px;
        font-size: 1.2rem;
        margin: 4px 0;

        i {
          text-align: center;
          font-size: 1.2rem;
          margin-top: 5px;
          grid-area: left-column;
        }

        p {
          grid-area: right-column;
        }

        .bold {
          font-weight: 700;
          font-size: 1.5rem;
        }
      }

      li:last-of-type {
        margin-top: auto;
      }
    }
  }
}
</style>