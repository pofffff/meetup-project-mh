<template>
  <div class="event-details__wrapper">
    <EventDetails :event="event" />
  </div>
</template>
<script>
import EventDetails from "@/components/EventDetails";
import { mapState } from "vuex";

export default {
  components: { EventDetails },
  computed: {
    ...mapState({
      event: (state) => {
        return state.event;
      },
    }),
  },
};
</script>