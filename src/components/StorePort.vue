<template>
  <div class="container">
    <div class="cont-store">
      <div class="cont-img"></div>
      <div class="cont-text">
        <div class="circle-border-lg"></div>
        <div class="text">
          <h3 class="uppercase">Get Started <span>Effortlessly</span></h3>
          <h1>Enjoy our <span class="green unset-fw">Companionship</span></h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StorePort",
};
</script>

<style lang="scss" scoped>
@import "../assets/temporary/variables";

.cont-store {
  display: flex;
  justify-content: center;
}

.cont-img {
  flex-basis: 60%;
  margin-right: 1rem;
}

.cont-text {
  flex-basis: 40%;

  .circle-border-lg {
    margin-bottom: 1rem;
  }

  .text {
    padding-left: 3rem;

    h3 {
      span {
        color: $darkblue;
      }
    }
  }
}
</style>
