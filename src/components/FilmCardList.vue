<template>
  <div class="row row-cols-1 row row-cols-2 row row-cols-3 row-cols-md-4 g-4">
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
