<template>
  <header>
    <div class="container navigation">
      <img src="../assets/img/logo.png" alt="Logo" class="logo" />
      <navbar-port />
    </div>
  </header>
</template>

<script>
import NavbarPort from "./NavbarPort.vue";

export default {
  name: "HeaderPort",
  components: {
    NavbarPort,
  },
};
</script>

<style scoped lang="scss">
.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    width: 150px;
  }
}
</style>
