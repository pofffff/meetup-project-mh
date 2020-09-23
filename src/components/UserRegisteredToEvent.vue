<template>
  <div class="image__wrapper">
    <img :src="require(`../../server/uploads/${profileImage}`)" alt="user" />
  </div>
</template>

<script>
export default {
  name: "UserRegisteredToEvent",
  props: { user: Object },
  data: () => {
    return {
      defaultImage: "default_img.png",
    };
  },
  computed: {
    profileImage() {
      if (this.user.image) {
        return this.user.image;
      } else {
        return this.defaultImage;
      }
    },
  },
};
</script>