<template>
  <div class="search__wrapper">
    <section class="search-field__section">
      <ul>
        <li>
          <input type="text" placeholder="By name" />
        </li>
        <li>
          <input type="text" placeholder="By city" />
        </li>
        <li>
          <input type="text" placeholder="By country" />
        </li>
        <button>GO</button>
      </ul>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.search__wrapper {
  display: flex;
  width: auto;
  justify-content: center;
  align-items: center;
  height: 26em;

  .search-field__section {
    ul {
      width: auto;
      display: flex;
      background: $color_dark;
      padding: 0.3em;
      border-radius: 8px;
      li {
        list-style: none;
        padding-right: 0.3em;

        input {
          outline: none;
          height: 50px;
          padding: 0 10px;
          border: 0.5px solid $white;
          border-radius: 4px;
          font-weight: 500;
          background: none;
          color: $white;
          font-size: 0.8em;
          width: 22em;
          letter-spacing: 1.5px;
          opacity: 0.5;
        }

        input::placeholder {
          color: $white;
          letter-spacing: 2px;
          font-family: $font;
        }
      }
      button {
        align-self: center;
        border: none;
        background: $color_light;
        color: #0000009b;
        padding: 0 18px;
        height: 50px;
        border-radius: 4px;
        font-weight: 900;
        font-size: 1em;
      }
    }
  }
}
</style>