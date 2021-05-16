<template>
  <div class="museum-listings">
    <div class="museum-listings__description">
      <h1 class="museum-listings__title">Discover</h1>
      <p class="museum-listings__paragraph">
        Find answers to your big nature questions. <br />Delve into stories
        about the Museum's collections, scientists and research. <br />Uncover
        the history of life on Earth, from dinosaurs and wildlife to oceans and
        space.
      </p>
    </div>
    <div class="museum-listings__pages">
      <div v-for="page in pages" :key="page.id" class="museum-listings__page">
        <NuxtLink :to="page.link">
          <img
            class="museum-listings__image"
            :src="page.image"
            alt="museum listings image"
          />
          <div class="museum-listings__name">
            <p>{{ page.name }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
// import MuseumHighlight from './MuseumHighlight';

import Header from "@/components/Header";
export default {
  // name: 'MuseumListings',
  components: {
    // MuseumHighlight,
    Header
  },
  mixins: [],
  props: {},
  data() {
    return {
      pages: [
        {
          id: 1,
          image: require("@/assets/images/dinosaurs.jpg"),
          name: "Dinosaurs",
          link: "/dinosaurs"
        },
        {
          id: 2,
          image: require("@/assets/images/space.jpg"),
          name: "Space",
          link: "/space"
        },
        {
          id: 3,
          image: require("@/assets/images/oceans.jpg"),
          name: "Oceans",
          link: "/oceans"
        },
        {
          id: 4,
          image: require("@/assets/images/wildlife.jpg"),
          name: "Wildlife",
          link: "/wildlife"
        }
      ]
    };
  },
  computed: {},
  methods: {},
  created() {}
};
</script>
