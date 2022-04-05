<template>
  <div class="container-full">
    <div class="cont-title">
      <h3 class="uppercase opacity-title">Great words about Maxcoach</h3>
      <h2>Our <span class="unset-fw green">top learners'</span> verbatim</h2>

      <div class="container-cards">
        <div
          class="card"
          v-for="(card, index) in testimonialTop"
          :key="card.id"
          :class="activeIndex === index ? '' : 'opacity'"
        >
          <h2 class="card-title">
            {{ card.title }}
          </h2>
          <p class="p-large">
            {{ card.text }}
          </p>
          <div class="profile-testimonial">
            <img
              :src="card.picture"
              :alt="card.nome + card.surname"
              class="profile-picture circle"
            />
            <span
              ><h2 class="profile-title uppercase">
                {{ card.name + card.surname }}
              </h2>
              <p>/ {{ card.role }}</p></span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import testimonialAvata01 from "../assets/img/testimonial-avata-01.jpg";
import testimonialAvata02 from "../assets/img/testimonial-avata-02.jpg";
import testimonialAvata03 from "../assets/img/testimonial-avata-03.jpg";
import testimonialAvata04 from "../assets/img/testimonial-avata-04.jpg";

export default {
  name: "CarrouselTestimonials",

  data() {
    return {
      activeIndex: 1,
      testimonialProfiles: [
        {
          id: 39879284,
          nome: "Florence",
          surname: "Themes",
          picture: testimonialAvata01,
          role: "Multimedia Admin",
          title: "It's a choice of quality with people with special needs",
          text: `I am a very strict person so I require everything to be organized and neat. Them, I'll be able to make things right and shine. MaxCoach guys just got me.`,
        },

        {
          id: 39879222,
          nome: "Mina",
          surname: "Hollace",
          picture: testimonialAvata02,
          role: "Freelancer",
          title: "High Level of efficiency and scientific teaching methods",
          text: `I am free to learn at my own pace, follow my own schedule and choose
            the subject I want to learn from the syllabus. Great Study portal
            for people like me.`,
        },

        {
          id: 39879212,
          nome: "Madley",
          surname: "Pondor",
          picture: testimonialAvata03,
          role: "IT Specialist",
          title:
            "Professional team of speacialists and passionate mentors at reach",
          text: `I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional whem dealing with students.`,
        },

        {
          id: 398792123,
          nome: "Geronimo",
          surname: "Macbit",
          picture: testimonialAvata04,
          role: "Freelancer",
          title: "High Level of efficiency and scientific teaching methods",
          text: `I am free to learn at my own pace, follow my own schedule and choose
            the subject I want to learn from the syllabus. Great Study portal
            for people like me.`,
        },
      ],
    };
  },

  computed: {
    testimonialTop() {
      return this.testimonialProfiles.slice(0, 3);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/temporary/variables";

.cont-title {
  text-align: center;
  padding-bottom: 5rem;
}

.container-cards {
  display: flex;
  justify-content: center;
  padding-left: 3rem;
  padding-right: 3rem;

  .card {
    flex-basis: calc(100% / 3 - 12rem);
    text-align: start;
    margin: 6rem;

    .card-title {
      font-size: 1.4rem;
    }

    h2 {
      line-height: 2.5rem;
    }

    .p-large {
      font-weight: bold;
      color: $blackgrey;
      padding-top: 0;
    }

    .profile-testimonial {
      display: flex;

      .profile-picture {
        width: 75px;
        height: 75px;
        margin-right: 1rem;
      }

      .profile-title {
        font-size: 1.4rem;
        padding: 0;
      }

      p {
        padding: 0;
      }
    }
  }

  .opacity {
    opacity: 0.5;
  }
}
</style>
