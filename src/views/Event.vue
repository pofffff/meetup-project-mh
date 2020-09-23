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
          <div>
            <p>{{event.registered.length}} registered</p>
            <button @click="addComing(event._id)" class="coming__action">I'm coming</button>
          </div>
        </li>
      </ul>
    </section>
    <section class="comments__section">
      <h3>Comments</h3>
      <ul class="event-comments__container">
        <li v-for="comment in event.comments" :key="comment._id">
          <Comment :comment="comment" />
        </li>
      </ul>
      <section class="add-comment__container">
        <input v-model="add_comment" type="textarea" maxlength="150" />
        <button @click="addComment(event._id)" class="add-comment__action">Add comment</button>
      </section>
    </section>
  </div>
</template>
<script>
import { mapState } from "vuex";
import Comment from "@/components/Comment";
export default {
  components: { Comment },
  data: () => {
    return {
      add_comment: "",
    };
  },
  computed: {
    ...mapState({
      event: (state) => {
        return state.event;
      },
    }),
  },
  methods: {
    addComment(id) {
      const data = { event_id: id, comment: this.add_comment };
      this.$store.dispatch("addComment", data);
    },
    addComing(id) {
      this.$store.dispatch("addUserToEvent", id);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
@import "@/assets/scss/style_mixins";

.event__wrapper {
  color: $white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8rem 10%;

  h1 {
    font-size: 100px;
    color: $white;
    width: 85%;
    font-size: 32px;
  }

  .event__container {
    background: $color_dark;
    width: 85%;
    height: 400px;
    border-radius: 20px;
    padding: 2rem;
    display: flex;
    align-items: center;
    align-self: center;

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

        div {
          display: flex;
          justify-content: space-between;
          .coming__action {
            @include button;
            padding: 6px 18px;
            margin-right: 2rem;
          }
        }
      }
    }
  }

  .comments__section {
    display: flex;
    flex-direction: column;
    width: 85%;
    align-self: center;
    margin: 5rem 0;

    h3 {
      font-size: 32px;
      align-self: flex-start;
    }
    .event-comments__container {
      display: flex;
      flex-wrap: wrap;

      li {
        list-style: none;
        height: 200px;
        width: 380px;
        border-radius: 20px;
        background: $color_dark;
        color: $white;
        display: flex;
        flex-direction: column;
        margin: 0.3rem;
      }

      .add-comment__container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 20px;
        input {
          height: 200px;
          width: 100%;
          outline: none;
          border: 0.5px solid $white;
          border-radius: 4px;
          font-weight: 500;
          background: none;
          color: $white;
          font-size: 0.8em;
          letter-spacing: 1.5px;
          opacity: 0.5;
        }

        .add-comment__action {
          @include button;
        }
      }
    }
  }
}
</style>