<template>
  <div class="search__wrapper">
    <section class="search-field__section">
      <ul>
        <CategoryAutocomplete :categories="categories" @input="inputCategory" />
        <span class="divider"></span>
        <CityAutocomplete @input="inputCity" :cities="cities" />
      </ul>
      <button @click="filter">Filter</button>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CategoryAutocomplete from "@/components/search/CategoryAutocomplete";
import CityAutocomplete from "@/components/search/CityAutocomplete";

export default {
  components: { CategoryAutocomplete, CityAutocomplete },
  data: () => {
    return {
      categories: [
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
      selectedCategory: "",
      selectedCity: "",
    };
  },
  computed: {
    ...mapState({
      cities: (state) => {
        let cities = state.events.map((event) => event.city);
        console.log(cities);
        return cities;
      },
      events: (state) => {
        return state.events;
      },
    }),
  },
  methods: {
    inputCity(city) {
      this.selectedCity = city;
    },
    inputCategory(category) {
      this.selectedCategory = category;
    },
    filter() {
      let events = this.events;
      let filtered = events.filter((event) => {
        console.log(event);
        if (
          event.categories.includes(this.selectedCategory) &&
          event.city.includes(this.selectedCity)
        )
          return event;
      });
      this.$store.state.filtered = filtered;
      this.$store.state.hasFilter = true;
      console.log(filtered);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
@import "@/assets/scss/style_mixins";

.search__wrapper {
  display: flex;
  width: auto;
  justify-content: center;
  align-items: center;
  height: 22em;

  .search-field__section {
    display: flex;

    ul {
      width: auto;
      height: 3rem;
      display: flex;
      background: $color_dark;
      padding: 0.2em;
      border-radius: 8px;

      .divider {
        border-right: 2px solid $white;
        height: 2em;
        margin: 0 10px;
        align-self: center;
      }
    }

    button {
      @include button;
      align-self: center;
      padding: 0 30px;
      margin: 0 5px;
      height: 46px;
      font-size: 1.2em;
    }
  }
}
</style>