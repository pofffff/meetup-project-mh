<template>
  <div class="event__wrapper">
    <div class="image__container">
      <img :src="event.image" alt="event image" />
    </div>
    <section class="event-details__container">
      <h3>{{ event.name }}</h3>
      <li>
        <i class="fas fa-map-marker-alt"></i>
        <p>{{ event.city }}</p>
      </li>
      <li>
        <i class="far fa-calendar-alt"></i>
        <p>{{ event.date }} - {{ event.time }}</p>
      </li>

      <li>
        <i class="fas fa-info"></i>
        <p>{{ event.description }}</p>
      </li>
      <div class="registered-users__container">
        <li v-for="(user, index) in event.registered" :key="index">
          <UserRegisteredToEvent :user="user" />
        </li>
      </div>
    </section>
  </div>
</template>

<script>
import UserRegisteredToEvent from "@/components/UserRegisteredToEvent";
export default {
  components: { UserRegisteredToEvent },
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
  height: 540px;
  background: $color_dark;
  color: $white;
  border-radius: 20px;
  margin: 5px;
  padding: 20px;

  .image__container {
    display: flex;
    align-items: center;
    width: 100%;
    height: 250px;
    img {
      width: 100%;
      height: 250px;
      border-radius: 20px;
      object-fit: cover;
    }
  }

  .event-details__container {
    padding: 1.5rem;
    h3 {
      word-wrap: break-word;
      margin-bottom: 0.5rem;
    }

    li {
      list-style: none;
      display: grid;
      grid-template-areas: "icon-element text-element";
      grid-template-columns: 20px 100%;
      margin-bottom: 0.5rem;

      i {
        grid-area: icon-element;
        text-align: center;
        margin-top: 3px;
      }
      p {
        grid-area: text-element;
        max-height: 75px;
        overflow: hidden;
        margin-left: 0.5rem;
      }
    }

    .registered-users__container {
      display: flex;
      margin-top: 15px;
      li {
        margin-right: -15px;
      }
    }
  }
}
</style>