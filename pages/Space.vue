<template>
  <div class="individual-page">
    <Header />
    <NuxtLink :to="'/'" class="home">HOME</NuxtLink>
    <h1 class="individual-page__title">
      Space
    </h1>
    <div class="individual-page__cards">
      <div
        v-for="spaceHighlight in sortCards"
        :key="spaceHighlight.id"
        class="individual-page__card"
      >
        <div class="individual-page__images__container">
          <img
            class="individual-page__image"
            :src="spaceHighlight.image"
            alt="individual page image"
          />
          <img
            class="individual-page__logo"
            :src="logo"
            alt="individual page logo"
          />
        </div>
        <div class="individual-page__name">{{ spaceHighlight.name }}</div>
        <div class="individual-page__description">
          {{ spaceHighlight.description }}
        </div>
        <div v-if="spaceHighlight.news" class="individual-page__news">
          <span class="individual-page__news--title">NEWS: </span
          >{{ spaceHighlight.news.title }}
        </div>
        <div v-if="spaceHighlight.quiz" class="individual-page__quiz">
          <span class="individual-page--quiz">QUIZ:</span
          ><a :href="spaceHighlight.quiz">{{ spaceHighlight.quiz }}</a>
        </div>
      </div>
      <div
        v-for="spacePartner in spacePartners"
        :key="spacePartner.id"
        class="individual-page__card individual-page__card__partners"
      >
        <div class="individual-page__images__container">
          <img
            class="individual-page__image"
            :src="spacePartners.observatory.image"
            alt="individual page image"
          />
          <img
            class="individual-page__logo"
            :src="logo"
            alt="individual page logo"
          />
        </div>
        <div class="individual-page__name">{{ spacePartner.name }}</div>
        <div class="individual-page__description">
          {{ spacePartner.info }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import MuseumHighlight from './MuseumHighlight';

import Header from "@/components/Header";
export default {
  name: "SpacePage",
  components: {
    // MuseumHighlight,
    Header
  },
  mixins: [],
  props: {},
  data() {
    return {
      spaceHighlights: [
        {
          date: "2020-04-20 12:20:00",
          description:
            "Asteroids are minor planets, especially of the inner Solar System. Larger asteroids have also been called planetoids.",
          id: 1,
          image: require("@/assets/images/asteroids.jpg"),
          name: "Asteroids"
        },
        {
          date: "2020-05-20 15:50:00",
          description:
            "A comet is an icy, small Solar System body that, when passing close to the Sun, warms and begins to release gases, a process called outgassing.",
          id: 9,
          image: require("@/assets/images/comets.jpg"),
          name: "Comets"
        },
        {
          date: "2020-05-01 9:22:00",
          description:
            "The term planet is ancient, with ties to history, astrology, science, mythology, and religion.",
          id: 7,
          image: require("@/assets/images/planets.jpg"),
          name: "Planets",
          news: {
            date: "2020-08-18 18:00:00",
            title: "Attend our talk about Jupiter with Dr. Hogarth"
          },
          quiz: "https://planetquiz.space"
        },
        {
          date: "2020-07-05 4:10:00",
          description:
            "A meteor shower is a celestial event in which a number of meteors are observed to radiate, or originate, from one point in the night sky.",
          id: 12,
          image: require("@/assets/images/meteors.jpg"),
          name: "Meteor showers",
          news: {
            title: "The Lyrids will peak at on April 21-22 2021, at night"
          }
        }
      ],
      spacePartners: {
        observatory: {
          createdAt: "2020-06-01 11:45:00",
          info:
            "The Mauna Kea Observatories (MKO) are a number of independent astronomical research facilities and large telescope observatories that are located at the summit of Mauna Kea on the Big Island of Hawaiʻi, United States.",
          image: require("@/assets/images/maunaKea.jpg"),
          name: "Mauna Kea Observatories"
        }
      },
      logo: require("@/assets/images/star.png")
    };
  },
  computed: {
    sortCards() {
      return this.spaceHighlights.sort(this.sortByDate);
    }
  },
  methods: {
    getImgUrl(image) {
      return require("../assets/images/" + image);
    },
    sortByDate(a, b) {
      return new Date(a.date).valueOf() - new Date(b.date).valueOf();
    }
  },
  created() {}
};
</script>
