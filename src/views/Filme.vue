<template>
  <h1>Herzlich Willkommen bei den Filmen</h1>
  <div class="container-fluid">
    <film-card-list :filme="this.filme"></film-card-list>
  </div>
  <film-create-form></film-create-form>
</template>

<script>
import FilmCardList from '@/components/FilmCardList'
import FilmCreateForm from '@/components/FilmCreateForm'

export default {
  name: 'FilmeView',
  components: {
    FilmCreateForm,
    FilmCardList
  },
  data() {
    return {
      filme: []
    }
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/filme'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(filme =>{
        this.filme.push(filme)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>
