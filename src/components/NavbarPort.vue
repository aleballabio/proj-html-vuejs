<template>
  <nav>
    <ul>
      <li v-for="section in arrCategories" :key="section.category">
        {{ section.category }}
        <font-awesome-icon icon="fa-solid fa-chevron-down" />
      </li>
      <li class="login-cont">
        <button class="border-sm circle login">
          <font-awesome-icon icon="fa-regular fa-user" class="login-icon" />
        </button>
      </li>
      <li>
        <form @submit.prevent="noReload">
          <input
            name="search"
            id="searchBar"
            class="searchBarClass"
            type="text"
            v-model="textToSearch"
            placeholder="Search..."
            @keyup.enter="search()"
          />
          <font-awesome-icon
            for="search"
            icon="fa-solid fa-magnifying-glass"
            class="search-icon"
          />
        </form>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBarPort",

  data() {
    return {
      textToSearch: "",
      arrCategories: [
        {
          category: "Home",
        },

        {
          category: "Pages",
        },

        {
          category: "Courses",
        },

        {
          category: "Features",
        },

        {
          category: "Blog",
        },

        {
          category: "Shop",
        },
      ],
    };
  },
  methods: {
    noReload() {},
    search() {},
  },
};
</script>

<style scoped lang="scss">
@import "../assets/temporary/variables";

nav {
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    font-size: 1.1rem;
    color: $black;
    flex-wrap: nowrap;

    li {
      padding: 1.1rem;
      vertical-align: middle;

      .fa-chevron-down {
        padding-left: 5px;
        font-size: 0.6em;
        vertical-align: baseline;
      }

      .login-icon {
        font-size: 1rem !important;
        position: absolute;
        transform: translate(-50%, -50%);
        top: 60%;
        left: 48%;
      }

      .login {
        width: 18px;
        height: 18px;
        position: relative;
        overflow: hidden;
      }

      .searchBarClass {
        flex-grow: 11111;
        border: none;
        padding: 10px;
        margin-right: 0.5rem;
      }

      .searchBarClass::-webkit-input-placeholder {
        font-size: 1.1rem;
      }

      .search-icon {
        color: $green;
      }
    }
  }
  .login-cont {
    padding-left: 0.6rem;
  }
}
</style>
