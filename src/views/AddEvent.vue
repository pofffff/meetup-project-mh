<template>
  <div class="add-event__wrapper">
    <h1>Add Event</h1>
    <section class="form__wrapper">
      <ul class="form-left__ul">
        <li>
          <input type="text" placeholder="Name of event" v-model="name" />
        </li>

        <li><input type="text" placeholder="Country" v-model="country" /></li>
        <li><input type="text" placeholder="City" v-model="city" /></li>
        <li><input type="date" placeholder="Date of" v-model="date" /></li>
        <li><input type="text" placeholder="image (url-link)" /></li>
      </ul>
      <ul class="form-right__ul">
        <li>
          <textarea
            maxlength="200"
            placeholder="Description"
            v-model="description"
          ></textarea>
        </li>
        <div class="">
          <li><input type="time" v-model="time" /></li>
          <button @click="addEvent">Add Event</button>
        </div>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      name: "",
      country: "",
      city: "",
      date: "",
      image: "",
      description: "",
      time: "",
    };
  },
  methods: {
    addEvent() {
      const event = {
        name: this.name,
        country: this.country,
        city: this.city,
        date: this.date,
        image: this.image,
        description: this.description,
        time: this.time,
      };

      if (Object.keys(event).some((k) => !event[k]) === false) {
        this.$store.dispatch("addEvent", event);
      }
      console.log(event);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.add-event__wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  h1 {
    font-size: 5em;
    color: $white;
  }

  .form__wrapper {
    display: flex;
    background: $color_dark;
    padding: 2em 0;
    border-radius: 20px;

    .form-left__ul,
    .form-right__ul {
      display: flex;
      flex-direction: column;
      margin: 0 2em;
    }

    ul {
      width: 100%;
      li {
        list-style: none;
        background: none;
        width: 20em;

        input,
        textarea {
          outline: none;
          width: 100%;
          margin: 1em 0;
          height: 2.5em;
          background: none;
          border: none;
          border-bottom: 1px solid $whiteOP;
          color: $white;
          font-size: 1em;
        }

        textarea {
          height: 185px;
          color: $white;
          font-size: 1em;
          font-family: $font;
        }

        input::placeholder,
        textarea::placeholder {
          color: $whiteOP;
          letter-spacing: 2px;
          font-family: $font;
          font-size: 12px;
        }

        textarea::placeholder {
          padding-top: 155px;
        }
      }

      button {
        background: $color_light;
        border: none;
        width: 100%;
        height: 2.3em;
        align-self: flex-end;
        border-radius: 10px;
        margin-top: 2em;
      }
    }
  }
}
</style>
