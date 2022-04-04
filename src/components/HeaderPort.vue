<template>
  <header>
    <div class="container navigation">
      <img src="../assets/img/logo.png" alt="Logo" class="logo" />
      <navbar-port />
    </div>
    <jumbo-port />
  </header>
</template>

<script>
import NavbarPort from "./NavbarPort.vue";
import JumboPort from "./JumboPort.vue";

export default {
  name: "HeaderPort",
  components: {
    NavbarPort,
    JumboPort,
  },
};
</script>

<style scoped lang="scss">
.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  margin-bottom: 25px;

  .logo {
    width: 150px;
  }
}
</style>
