<template>
  <div class="event__wrapper">
    <div class="image__container">
      <img :src="event.image" alt="event image" />
    </div>
    <section class="event-details__container">
      <h3>{{event.name}}</h3>
      <li>
        <i class="far fa-calendar-alt"></i>
        <p>{{event.date}} - {{event.time}}</p>
      </li>
      <li>
        <i class="fas fa-map-marker-alt"></i>
        <p>{{event.city}}</p>
      </li>
      <li>
        <i class="fas fa-info"></i>
        <p>{{event.description}}</p>
      </li>
      <li v-for="(user, index) in event.registred" :key="index">
        <UserRegistredToEvent :user="user" />
      </li>
    </section>
  </div>
</template>

<script>
import UserRegistredToEvent from "@/components/UserRegistredToEvent";
export default {
  components: { UserRegistredToEvent },
  props: { event: Object },
  data: () => {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.event__wrapper {
  width: 350px;
  height: 500px;
  background: $color_dark;
  color: $white;
  border-radius: 20px;
  margin: 20px;
  padding: 20px;

  .image__container {
    display: flex;
    align-items: center;
    width: 100%;
    height: 250px;
    img {
      width: 100%;
      height: 250px;
      border-radius: 20px 20px 0 0;
      object-fit: cover;
    }
  }

  .event-details__container {
    padding: 1rem;
    h4 {
      word-wrap: break-word;
    }

    li {
      list-style: none;
      display: flex;

      p {
        max-height: 75px;
        overflow: hidden;
      }
    }
  }
}
</style>