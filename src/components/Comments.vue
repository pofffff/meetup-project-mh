<template>
  <div class="comments__wrapper">
    <h3>Comments</h3>
    <ul class="event-comments__container">
      <li v-for="comment in event.comments" :key="comment._id">
        <Comment :comment="comment" />
      </li>
    </ul>
    <section class="add-comment__container">
      <input
        v-model="add_comment"
        type="textarea"
        maxlength="150"
        placeholder="Leave a comment..."
      />
      <button @click="addComment(event._id)" class="add-comment__action">
        Send
      </button>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Comment from "@/components/Comment";
export default {
  components: { Comment },
  props: { event: Object },
  data: () => {
    return {
      add_comment: "",
    };
  },
  methods: {
    addComment(id) {
      if (this.add_comment !== "") {
        const data = { event_id: id, comment: this.add_comment };
        this.$store.dispatch("addComment", data);
      }
    },
  },
};
</script>


<style lang="scss" scoped>
@import "@/assets/scss/variables";
@import "@/assets/scss/style_mixins";

.comments__wrapper {
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
  }
  .add-comment__container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2rem;
    width: 380px;
    height: 200px;
    border-radius: 20px;
    background: $color_dark;

    input {
      @include input;
      width: 100%;
      border: none;
      opacity: 1;
      word-wrap: break-word;
    }

    input[type="textarea"]::placeholder {
      color: $white;
      letter-spacing: 2px;
      font-family: $font;
      font-size: 0.9rem;
    }

    .add-comment__action {
      @include button;
      margin-top: 0.5rem;
      font-size: 0.8rem;
    }
  }
}
</style>