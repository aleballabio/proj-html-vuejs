<template>
  <div class="container">
    <h3 class="uppercase">Stimulated to learn?</h3>
    <h2 class="title">Feature Online Courses</h2>

    <div class="cont-courses">
      <div v-for="course in courses" :key="course.id" class="course">
        <div class="left-cont">
          <div class="cont-img circle">
            <img :src="course.image" :alt="course.nome" class="" />
          </div>
        </div>
        <div class="right-cont">
          <h2 v-if="course.price > 0" class="price">{{ course.price }}</h2>
          <h2 v-else class="price">Free</h2>
          <h3 class="course-title">
            {{ course.nome }}
          </h3>
          <div class="course-info">
            <span class="pd-right">
              <font-awesome-icon icon="fa-regular fa-file-lines" class="icon" />
              {{ course.lessons }} Lessons</span
            >

            <span>
              <font-awesome-icon icon="fa-regular fa-user" class="icon" />{{
                course.studentsEnrolled
              }}
              Students</span
            >
          </div>
        </div>
      </div>
    </div>
    <button class="button-green more-courses">
      View All Courses
      <font-awesome-icon
        icon="fa-solid fa-arrow-right-long"
        class="arrow-long"
      />
    </button>
  </div>
</template>

<script>
import course1 from "../assets/img/course-01-480x298.jpg";
import course2 from "../assets/img/course-02-480x298.jpg";
import course3 from "../assets/img/course-03-480x298.jpg";
import course4 from "../assets/img/course-04-480x298.jpg";
import course5 from "../assets/img/course-05-480x298.jpg";
import course6 from "../assets/img/course-06-480x298.jpg";

export default {
  name: "FeaturedCourses",
  data() {
    return {
      courses: [
        {
          id: 212313,
          nome: "Learning to Write as a Professional Author",
          image: course1,
          price: 40.0,
          Lessons: 20,
          studentsEnrolled: 50,
        },

        {
          id: 23213,
          nome: "Customer-centric Info-Tech Strategies",
          image: course2,
          price: 0,
          lessons: 24,
          studentsEnrolled: 769,
        },

        {
          id: 231234,
          nome: "Open Programming Courses for everyone: Phython",
          image: course3,
          price: 19.0,
          Lessons: 17,
          studentsEnrolled: 62,
        },

        {
          id: 2122233,
          nome: "Academic Listening and Note-taking",
          image: course4,
          price: 26.0,
          Lessons: 14,
          studentsEnrolled: 67,
        },

        {
          id: 21212323,
          nome: "Master jQuery in a short period of time",
          image: course5,
          price: 39.0,
          Lessons: 6,
          studentsEnrolled: 51,
        },

        {
          id: 21212123,
          nome: "Introduction to Javascript for Beginners",
          image: course6,
          price: 59.0,
          Lessons: 14,
          studentsEnrolled: 76,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/temporary/variables";

.title {
  padding-bottom: 2rem;
}
.container {
  padding-top: 10rem;
  text-align: center;
  padding-bottom: 180px;

  .cont-courses {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 2rem;

    .course {
      flex-basis: calc(100% / 2 - 4rem);
      display: flex;
      align-items: center;
      margin: 2rem;

      .left-cont {
        flex-basis: 20%;

        .cont-img {
          width: 175px;
          height: 175px;
          overflow: hidden;

          img {
            width: 100%;
            height: 100%;
            object-position: center;
            object-fit: cover;
          }
        }
      }

      .right-cont {
        flex-basis: 80%;
        overflow: hidden;
        align-self: flex-start;
        text-align: start;
        margin-left: 2rem;

        .price {
          font-size: 1.8rem;
          color: $green;
          font-weight: bolder;
          padding-bottom: 0.5rem;
        }

        .course-title {
          font-size: 1.5rem;
          color: $darkblue;
        }

        .course-info {
          color: $greyDark;
          font-size: 1.1rem;
        }

        .icon {
          padding-right: 10px;
        }

        .pd-right {
          padding-right: 2.5rem;
        }
      }
    }
  }
}
</style>
