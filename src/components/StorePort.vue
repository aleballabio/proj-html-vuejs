<template>
  <div class="container">
    <div class="cont-store">
      <div class="cont-img">
        <img
          class="yt-preview"
          src="../assets/img/yt-popup.jpg"
          alt="yt-preview"
        />
        <img
          src="../assets/img/icon-youtube-play.png"
          alt="yt-logo"
          class="yt-logo"
        />

        <img
          src="../assets/img/maxcoach-shape-05.png"
          alt="patch-round"
          class="patch-one"
        />

        <img
          src="../assets/img/maxcoach-shape-07.png"
          alt="patch-square"
          class="patch-two"
        />

        <img src="../assets/img/splatter.png" alt="splatter" class="splatter" />
      </div>
      <div class="cont-text">
        <div class="circle-border-lg"></div>
        <div class="text">
          <h3 class="uppercase">Get Started <span>Effortlessly</span></h3>
          <h1>Enjoy our <span class="green unset-fw">Companionship</span></h1>
          <p class="p-large">
            Sneak peak of what has in store for you on our online teaching and
            mentoring portal. Seek for some hidden hints of early-bird rewards
            as well.
          </p>
          <a href="#!" class="link-green"
            >Download free guidebook
            <font-awesome-icon
              icon="fa-solid fa-arrow-right-long"
              class="arrow-long"
            />
          </a>
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

.container {
  padding-bottom: 250px;
}

.cont-store {
  display: flex;
  justify-content: center;
}

.cont-img {
  flex-basis: 60%;
  margin-right: 4rem;
  position: relative;
  margin-top: 4rem;

  .yt-preview {
    width: 100%;
    border-radius: 6px;
    z-index: 100;
  }

  .yt-logo {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .patch-one {
    position: absolute;
    z-index: -2;
    top: 13%;
    left: -104px;
  }

  .patch-two {
    position: absolute;
    z-index: -3;
    bottom: -105px;
    right: -15px;
  }

  .splatter {
    position: absolute;
    z-index: -4;
    top: -114px;
    left: -77px;
  }
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

    p {
      padding-bottom: 4rem !important;
    }

    .link-green {
      color: $green;
      font-weight: bold;
      font-size: 1.1rem !important;
    }
  }
}
</style>
