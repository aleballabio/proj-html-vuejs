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

    <div class="cont-cards-awards">
      <card-awards
        v-for="award in arrAwards"
        :key="award.number"
        :award-data="award"
      />
    </div>
  </div>
</template>

<script>
import CardAwards from "./subComponents/CardAwards.vue";

export default {
  name: "OnlineCertification",
  components: {
    CardAwards,
  },

  data() {
    return {
      arrAwards: [
        {
          category: "Trained",
          how: "Succesfully",
          number: 1790,
          who: "Enrolled Learners",
        },

        {
          category: "Received",
          how: "Proudly",
          number: 19,
          who: "Countrywide Awards",
        },

        {
          category: "Established",
          how: "Firmly",
          number: 24,
          who: "Local Branches",
        },

        {
          category: "Featured on",
          how: "Getting",
          number: 1090,
          who: "Blog Posts",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.cont-cert {
  text-align: center;
  display: flex;
  justify-content: space-between;
  padding-bottom: 150px;

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

.cont-cards-awards {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
