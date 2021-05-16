<template>
  <div class="individual-page">
    <Header />
    <NuxtLink :to="'/'" class="home">HOME</NuxtLink>
    <h1 class="individual-page__title">
      Dinosaurs
    </h1>
    <div class="individual-page__cards">
      <div
        v-for="person in $store.state.store.apiData"
        :key="person.created"
        class="individual-page__card individual-page--style"
      >
        <div>{{ person.name }}</div>
        <div>Birth year: {{ person.birth_year }}</div>
        <div>Eye colour: {{ person.eye_color }}</div>
        <div>Hair colour: {{ person.hair_color }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "DinosaursPage",
  components: {
    Header
  },
  mixins: [],
  props: {},
  data() {
    return {};
  },
  computed: {},
  mounted() {
    this.$store.dispatch("store/fetchData");
  },
  methods: {},
  created() {}
};
</script>
