<template>
  <div class="comment__wrapper">
    <div class="top">
      <div class="img__container">
        <img :src="require(`../../server/uploads/${profileImage}`)" alt />
      </div>
      <h4>{{comment.written_by.name}}</h4>
    </div>
    <div class="bottom">
      <p>{{comment.comment}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: { comment: Object },
  data: () => {
    return {
      defaultImage: "default_img.png",
    };
  },
  computed: {
    profileImage() {
      if (this.comment.written_by.image) {
        console.log("here");
        return this.comment.written_by.image;
      } else {
        return this.defaultImage;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
@import "@/assets/scss/style_mixins";

.comment__wrapper {
  display: flex;
  flex-direction: column;
  .top {
    display: flex;
    align-items: center;
    padding: 1rem 2rem;

    h4 {
      font-size: 18px;
    }
    .img__container {
      width: 50px;
      height: 50px;
      margin-right: 2rem;
      background: $white;
      border-radius: 100%;

      img {
        @include profile_image;
      }
    }
  }

  .bottom {
    padding: 1rem 2rem;
    font-size: 12px;
  }
}
</style>