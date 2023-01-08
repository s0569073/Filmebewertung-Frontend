<template>
<!--  <div class="row row-cols-1 row-cols-md-2 g-4">-->
<!--    <div class="col" v-for="film in filme" :key="film.id">-->
<!--      <div class="Card h-100">-->
<!--        <img src="@/assets/default.png" height="50" width="50" class="card-img-top">-->
<!--        <div class="card-body">-->
<!--          <h5 class="card-title">{{ film.filmName }}</h5>-->
<!--          <h6 class="card-title">Bewertung: {{ film.bewertung }}</h6>-->
<!--          <p class="card-text">{{film.kommentar}}</p>-->
<!--          <h6 class="card-title">Bewertet von {{ film.bewerter }}</h6>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->

  <div class="row row-cols-1 row-cols-md-4 g-4">
    <div class="col" v-for="film in filme" :key="film.id">
      <film-card :film="film"></film-card>
    </div>
  </div>
</template>

<script>
import FilmCard from '@/components/FilmCard'

export default {
  name: 'FilmCardList',
  components: {
    FilmCard
  },
  props: {
    filme: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
