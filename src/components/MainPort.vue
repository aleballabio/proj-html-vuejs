<template>
  <main>
    <featured-courses />
    <smart-tutoring />
    <store-port />
  </main>
</template>

<script>
import FeaturedCourses from "./FeaturedCourses";
import SmartTutoring from "./SmartTutoring.vue";
import StorePort from "./StorePort.vue";
export default {
  name: "MainPort",
  components: {
    FeaturedCourses,
    SmartTutoring,
    StorePort,
  },
};
</script>

<style scoped lang="scss">
</style>
