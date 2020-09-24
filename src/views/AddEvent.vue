<template>
  <div class="add-event__wrapper">
    <h1>Add Event</h1>
    <section class="form__wrapper">
      <ul class="form-left__ul">
        <li>
          <input type="text" placeholder="Name of event" v-model="name" />
        </li>
        <li>
          <input type="text" placeholder="City" v-model="city" />
        </li>
        <li>
          <input type="text" placeholder="Adress" v-model="adress" />
        </li>
        <Multiselect
          v-model="categories"
          :options="options"
          :multiple="true"
          placeholder="Select categories"
          :close-on-select="false"
          class="multiselect"
        ></Multiselect>
        <li>
          <input type="date" v-model="date" />
        </li>
        <li>
          <input type="text" placeholder="image (url-link)" v-model="image" />
        </li>
      </ul>
      <ul class="form-right__ul">
        <li>
          <textarea
            maxlength="200"
            placeholder="Description"
            v-model="description"
          ></textarea>
        </li>
        <div class>
          <li>
            <input type="time" v-model="time" />
          </li>
          <button @click="addEvent">Add Event</button>
        </div>
      </ul>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Multiselect from "@/components/multiselect";

export default {
  components: { Multiselect },
  data: () => {
    return {
      name: "",
      city: "",
      adress: "",
      date: "",
      image: "",
      description: "",
      time: "",
      categories: [],
      options: [
        "food",
        "party",
        "costume",
        " masquerade",
        "contest",
        "museum",
        "art",
        "lecture",
        "education",
        "other",
      ],
    };
  },
  computed: {
    ...mapState({
      isAuthenticated: (state) => {
        return state.isAuthenticated;
      },
    }),
  },
  methods: {
    addEvent() {
      const event = {
        name: this.name,
        city: this.city,
        adress: this.adress,
        date: this.date,
        image: this.image,
        description: this.description,
        categories: this.categories,
        time: this.time,
      };

      if (Object.keys(event).some((key) => event[key] === "") === false) {
        this.$store.dispatch("addEvent", event);
        this.$router.push("/profile");
      }
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

      .multiselect {
        cursor: pointer;
      }
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

        ::-webkit-calendar-picker-indicator {
          filter: invert(1);
        }

        textarea {
          height: 185px;
          color: $white;
          font-size: 1em;
          font-family: $font;
        }

        input::placeholder,
        textarea::placeholder {
          color: $white;
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
        color: $white;
        border: none;
        width: 100%;
        height: 2.3em;
        align-self: flex-end;
        border-radius: 10px;
        margin-top: 2em;
        font-size: 1rem;
      }
    }
  }
}
</style>
