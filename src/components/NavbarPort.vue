<template>
  <nav>
    <ul>
      <li v-for="section in arrCategories" :key="section.category">
        {{ section.category }}
        <font-awesome-icon icon="fa-solid fa-chevron-down" />
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBarPort",

  data() {
    return {
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
};
</script>

<style scoped lang="scss">
nav {
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;

    li {
      padding: 2rem;

      .fa-chevron-down {
        padding-left: 5px;
        font-size: 0.6em;
        vertical-align: baseline;
      }
    }
  }
}
</style>
