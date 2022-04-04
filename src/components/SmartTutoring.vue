<template>
  <div class="container">
    <h3 class="uppercase">Maxcoach available Courses</h3>
    <h2>
      Access <span class="green unset-fw">Smart Tutoring</span> Program for
      Benefits.
    </h2>

    <div class="cont-features">
      <div class="feature">
        <img
          src="../assets/img/smart-1.png"
          alt="logo-preferences"
          class="feature-image"
        />
        <h3>Customize Preferences</h3>
        <p>
          Learners are given the right to arrange and customize their study
          schedule and timetable based on preferences.
        </p>

        <a href="#!"
          >Start Here
          <font-awesome-icon
            icon="fa-solid fa-arrow-right-long"
            class="arrow-long"
          />
        </a>
      </div>

      <div class="feature">
        <img
          src="../assets/img/smart-2.png"
          alt="logo-storage"
          class="feature-image"
        />
        <h3>Cloud Storage</h3>
        <p>
          You can store online lessons via online cloud or download to your
          device and revise lessons on the way.
        </p>

        <a href="#!"
          >Get Free Quote
          <font-awesome-icon
            icon="fa-solid fa-arrow-right-long"
            class="arrow-long"
          />
        </a>
      </div>

      <div class="feature">
        <img
          src="../assets/img/smart-3.png"
          alt="logo-multimedia"
          class="feature-image"
        />
        <h3>Multimedia Channels</h3>
        <p>
          We provide study materials with various formats: video, audio, slides,
          doc, prints, books and applications.
        </p>

        <a href="#!"
          >Start Now
          <font-awesome-icon
            icon="fa-solid fa-arrow-right-long"
            class="arrow-long"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SmartTutoring",
};
</script>

<style lang="scss" scoped>
@import "../assets/temporary/variables";

.container {
  text-align: center;
  padding-bottom: 180px;
}

.cont-features {
  padding-top: 2rem;
  display: flex;
  justify-content: center;

  .feature {
    flex-basis: calc(100% / 3 - 5rem);
    text-align: start;
    margin: 1rem;
    margin-left: 2.5rem;
    margin-right: 2.5rem;

    .feature-image {
      margin-bottom: 2.2rem;
    }

    h3 {
      color: $darkblue;
      font-size: 1.8rem;
    }

    p {
      font-size: 1.1rem;
      line-height: 2rem;
      padding-bottom: 2rem;
    }

    a {
      color: $greyDark;
      font-weight: bold;
      color: $greydarkdark;
    }

    .arrow-long {
      margin-left: 5px;
      vertical-align: middle;
    }
  }
}
</style>
