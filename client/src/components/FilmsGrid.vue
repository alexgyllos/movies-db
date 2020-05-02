<template lang="html">
  <div class="film-wrapper">
    <film-grid-item v-for="(film, index) in films" :key="index" :film="film" />
    <!-- <div class="film-card">
      <p v-if="selectedFilm">{{selectedFilm.crew.director}}</p>
      <p v-if="selectedFilm">{{selectedFilm.crew.producer}}</p>
      <p v-if="selectedFilm">{{selectedFilm.plot}}</p>
    </div> -->
    <film-grid-item-details></film-grid-item-details>
  </div>
</template>

<script>
import {eventBus} from '@/main.js'
import MoviesService from '@/services/MoviesService.js'
import FilmGridItem from './FilmGridItem'
import FilmGridItemDetails from './FilmGridItemDetails'

export default {
  data(){
    return {
      films: [],
      selectedFilm: null
    }
  },
  mounted(){
    MoviesService.getFilms()
    .then(films => this.films = films)

    eventBus.$on('film-deleted', (id) => {
      const index = this.films.findIndex(film => film._id === id);
      this.films.splice(index, 1);
    })

    eventBus.$on('film-selected', (id) => {
      this.selectedFilm = this.films.find(film => film._id === id)
      console.log(this.selectedFilm);
    })
  },
  components: {
    'film-grid-item': FilmGridItem,
    'film-grid-item-details': FilmGridItemDetails
  }
}
</script>

<style lang="css" scoped>

.film-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.film-card {
  background-color: #BFDBF7;
  border: 1px solid #BFDBF7;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
  width: 25vw;
  color: black;
}
</style>
