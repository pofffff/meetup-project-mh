<template>
  <div class="search__wrapper">
    <section class="search-field__section">
      <ul>
        <li>
          <input type="text" placeholder="Category" />
        </li>
        <span class="divider"></span>
        <li>
          <input type="text" placeholder="City" />
        </li>
        <span class="divider"></span>
      </ul>
      <button>GO</button>
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
  height: 22em;

  .search-field__section {
    display: flex;
    ul {
      width: auto;
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

      li {
        list-style: none;
        padding-right: 0.2em;
        outline: none;

        input {
          outline: none;
          height: 50px;
          padding: 0 10px;
          border-radius: 4px;
          border: none;
          font-weight: 500;
          background: none;
          color: $white;
          font-size: 20px;
          width: 15em;
          letter-spacing: 1.5px;
        }

        input::placeholder {
          color: $white;
          letter-spacing: 2px;
          font-family: $font;
          font-size: 16px;
        }
      }
    }
    button {
      align-self: center;
      border: none;
      background: $color_light;
      color: #0000009b;
      color: $color_dark;
      padding: 0 30px;
      margin: 0 5px;
      height: 55px;
      border-radius: 4px;
      font-weight: 900;
      font-size: 1.2em;
    }
  }
}
</style>