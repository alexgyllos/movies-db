<template lang="html">
  <div v-if="selectedFilm" class="film-card">
    <h1>Details</h1>
    <p>Director: {{selectedFilm.crew.director}}</p>
    <p>Producer: {{selectedFilm.crew.producer}}</p>
    <p>Plot: {{selectedFilm.plot}}</p>
  </div>
</template>

<script>
import MoviesService from '@/services/MoviesService.js';
import {eventBus} from '@/main.js'

export default {
  name: 'film-grid-item-details',
  props: ['film'],
  data() {
    return {
      selectedFilm: null
    }
  },
  mounted(){
    eventBus.$on('film-selected', (film) => {
      this.selectedFilm = film
      // console.log(this.selectedFilm);
  })
}}
</script>

<style lang="css" scoped>
.film-card {
  background-color: #BFDBF7;
  border: 1px solid #BFDBF7;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
  width: 25vw;
}
</style>
