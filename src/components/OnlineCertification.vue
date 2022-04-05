<template>
  <div class="container">
    <div class="cont-cert">
      <div class="cont-img">
        <div class="circle-border-sm"></div>
        <img
          src="../assets/img/maxcoach-shape-01.png"
          alt="shape"
          class="shape-max"
        />
      </div>
      <div class="cont-text">
        <h2 class="intro">
          Start Today for getting
          <span class="green unset-fw">Online Certification</span>
        </h2>
        <h1 class="title">You can be your own guiding star with our help!</h1>

        <button class="button-green start-now">Get Started Now</button>
      </div>

      <div class="cont-img-two">
        <img
          src="../assets/img/maxcoach-shape-02.png"
          alt="shape"
          class="max-shape-two"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OnlineCertification",
};
</script>

<style scoped lang="scss">
.container {
  padding-bottom: 150px;
}

.cont-cert {
  text-align: center;
  display: flex;
  justify-content: space-between;

  .cont-text {
    flex-grow: 10;

    .intro {
      font-size: 1.6rem;
      line-height: 1.6rem;
      padding-bottom: 0.5rem;
    }

    .title {
      font-size: 2.5rem;
      line-height: 2.5rem;
      padding-bottom: 20px;
    }
    .start-now {
      padding: 18px 75px;
    }
  }

  .circle-border-sm {
    margin-bottom: 1rem;
  }

  .max-shape-two {
    padding-top: 6rem;
  }
}
</style>
