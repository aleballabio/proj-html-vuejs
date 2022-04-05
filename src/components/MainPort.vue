<template>
  <main>
    <featured-courses />
    <smart-tutoring />
    <store-port />
    <carrousel-testimonials />
    <online-certification />
  </main>
</template>

<script>
import CarrouselTestimonials from "./CarrouselTestimonials.vue";
import FeaturedCourses from "./FeaturedCourses";
import OnlineCertification from "./OnlineCertification.vue";
import SmartTutoring from "./SmartTutoring.vue";
import StorePort from "./StorePort.vue";

export default {
  name: "MainPort",
  components: {
    FeaturedCourses,
    SmartTutoring,
    StorePort,
    CarrouselTestimonials,
    OnlineCertification,
  },
};
</script>

<style scoped lang="scss">
</style>
