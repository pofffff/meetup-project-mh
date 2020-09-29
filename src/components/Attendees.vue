<template>
  <div class="attendees__wrapper">
    <h3>
      Attendees
      <p>({{ totalAttendees }})</p>
    </h3>
    <ul>
      <li
        @click="goTo(attendee._id)"
        v-for="attendee in attendees"
        :key="attendee._id"
      >
        <UserRegisteredToEvent :user="attendee" />
        <h4>{{ attendee.name }}</h4>
      </li>
    </ul>
  </div>
</template>

<script>
import UserRegisteredToEvent from "@/components/UserRegisteredToEvent";

export default {
  components: { UserRegisteredToEvent },
  props: { attendees: Array },
  computed: {
    totalAttendees() {
      if (!this.attendees) {
        return 0;
      } else {
        return this.attendees.length;
      }
    },
  },
  methods: {
    goTo(id) {
      this.$router.push("/profile/" + id);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.attendees__wrapper {
  width: 85%;
  margin: 2rem 0;

  h3 {
    font-size: 32px;
    display: flex;
    align-items: center;

    p {
      font-size: 24px;
      margin-left: 0.5rem;
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;

    li {
      list-style: none;
      width: 300px;
      display: flex;
      align-items: center;
      background: $color_dark;
      padding: 1rem;
      border-radius: 10px;
      margin: 0.3rem;
      cursor: pointer;

      h4 {
        margin: 0 2rem;
      }
    }
  }
}
</style>