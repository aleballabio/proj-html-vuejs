<template>
  <div class="container">
    <div class="jumbo">
      <div class="jumbo-title">
        <h1>Distant Learning for further expansion</h1>
        <h3>
          Learning is a life long journey that in fact we never find the
          terminate stop. Stop searching, enjoy the process.
        </h3>

        <button class="button-green">
          <font-awesome-icon icon="fa-solid fa-download" class="icon-left" />
          Download free guide
        </button>

        <h3>
          Have questions?
          <span class="green-title"
            >Get Free Sample
            <font-awesome-icon
              icon="fa-solid fa-arrow-right-long"
              class="arrow-long"
          /></span>
        </h3>
      </div>
      <div class="jumbo-image">
        <div class="container-image">
          <img
            src="../assets/img/jumbo.jpg"
            alt="jumbo"
            class="circle jumbo-img"
          />
          <div class="circle-border"></div>
          <img
            src="../assets/img/maxcoach-shape-08-grey.png"
            alt="patch"
            class="patch-one"
          />

          <img
            src="../assets/img/maxcoach-shape-08-grey.png"
            alt="patch"
            class="patch-two"
          />

          <img
            src="../assets/img/maxcoach-shape-07-150x150.png"
            alt="patch"
            class="patch-three"
          />

          <img
            src="../assets/img/maxcoach-shape-02.png"
            alt="shape"
            class="shape"
          />
        </div>
      </div>
    </div>
    <div class="cont-logos">
      <div v-for="logo in logos" :key="logo.nome" class="logos">
        <img :src="logo.img" :alt="logo.name" class="logo" />
      </div>
    </div>
  </div>
</template>

<script>
import stylus from "../assets/img/client-logo-01.png";
import tree from "../assets/img/client-logo-02.png";
import brook from "../assets/img/client-logo-03.png";
import pencil from "../assets/img/client-logo-04.png";
import itsAlive from "../assets/img/client-logo-05.png";
import sixBase from "../assets/img/client-logo-06.png";

export default {
  name: "JumboPort",

  data() {
    return {
      logos: [
        {
          nome: "stylus",
          img: stylus,
        },

        {
          nome: "tree",
          img: tree,
        },

        {
          nome: "brook",
          img: brook,
        },

        {
          nome: "pencil",
          img: pencil,
        },

        {
          nome: "itsalive",
          img: itsAlive,
        },

        {
          nome: "sixbase",
          img: sixBase,
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import "../assets/temporary/variables";

.jumbo {
  display: flex;
  width: 100%;
  height: 600px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5rem;

  .jumbo-image {
    flex-basis: 60%;
    flex-grow: 2;
    height: 100%;
    margin-left: 1.5rem;
  }

  .jumbo-title {
    padding-top: 150px;
    flex-basis: 40%;
    margin-right: 1.5rem;

    .arrow-long {
      font-size: 0.9em;
    }
  }

  .container-image {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .jumbo-img {
    width: 83%;
    position: absolute;
    left: 55%;
    top: 60%;
    transform: translate(-50%, -50%);
    z-index: 5;
  }
  .circle-border {
    position: absolute;
    z-index: 5;
    left: 60px;
    bottom: 15%;
  }

  .patch-one {
    position: absolute;
    z-index: 4;
    left: 0px;
    bottom: 15%;
  }

  .patch-two {
    position: absolute;
    z-index: 4;
    left: 0px;
    top: 40%;
  }

  .patch-three {
    position: absolute;
    z-index: 4;
    right: 10%;
    bottom: -25px;
  }

  .shape {
    position: absolute;
    z-index: 5;
    top: 35%;
    right: -100px;
  }
}

.cont-logos {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 1rem;
  padding-right: 1rem;

  .logos {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem;
    flex-basis: calc(100% / 6 - 4rem);
    flex-grow: 1;
  }

  .logo {
    width: 50%;
    opacity: 0.5;
  }
}
</style>
