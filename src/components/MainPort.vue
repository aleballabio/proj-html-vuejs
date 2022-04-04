<template>
  <main>
    <featured-courses />
    <smart-tutoring />
  </main>
</template>

<script>
import FeaturedCourses from "./FeaturedCourses";
import SmartTutoring from "./SmartTutoring.vue";
export default {
  name: "MainPort",
  components: {
    FeaturedCourses,
    SmartTutoring,
  },
};
</script>

<style scoped lang="scss">
</style>
