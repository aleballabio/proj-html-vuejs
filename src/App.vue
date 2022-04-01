<template>
  <div id="app">
    <HeaderPort />
    <MainPort />
    <FooterPort />
  </div>
</template>

<script>
import HeaderPort from "./components/HeaderPort";
import MainPort from "./components/MainPort";
import FooterPort from "./components/FooterPort";

export default {
  name: "App",
  components: {
    HeaderPort,
    MainPort,
    FooterPort,
  },
};
</script>

<style lang="scss">
@import "./assets/style";

#app {
}
</style>
