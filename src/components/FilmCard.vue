<template>
  <div class="Card h-100">
    <img src="@/assets/default.png" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">{{ film.filmName }}</h5>
      <h6 class="card-title">Bewertung: {{ film.bewertung }}</h6>
      <p class="card-text">{{film.kommentar}}</p>
      <h6 class="card-title">Bewertet von {{ film.bewerter }}</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilmCard',
  props: {
    film: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
