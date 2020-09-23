<template>
  <div class="event__wrapper">
    <h1>Recently added events</h1>
    <li class="event" @click="goTo(event._id)" v-for="event in events" :key="event._id">
      <Event :event="event" />
    </li>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Event from "@/components/Event";
export default {
  components: {
    Event,
  },
  data: () => {
    return {};
  },
  computed: {
    ...mapState({
      events: (state) => {
        return state.events;
      },
    }),
  },
  methods: {
    getAll() {
      this.$store.dispatch("getAllEvents");
    },
    goTo(id) {
      this.$store.dispatch("getEvent", id);
      this.$router.push("/event/" + id);
    },
  },
  created() {
    this.getAll();
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.event__wrapper {
  display: flex;
  flex-wrap: wrap;
}

h1 {
  color: $white;
}

li {
  cursor: pointer;
}
</style>