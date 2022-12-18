<template>
  <h1>Herzlich Willkommen bei den Filmen</h1>
  <div class="container-fluid">
    <div class="row row-cols-1 row-cols-md-2 g-4">
      <div class="col" v-for="film in filme" :key="film.id">
              <div class="col">
                <div class="card">
                  <img src="@/assets/default.png" height="50" width="50" class="card-img-top">
                  <div class="card-body">
                    <h5 class="card-title">{{ film.filmName }}</h5>
                    <h6 class="card-title">Bewertung: {{ film.bewertung }}</h6>
                    <p class="card-text">{{film.kommentar}}</p>
                    <h7 class="card-title">Bewertet von {{ film.bewerter }}</h7>
                  </div>
                </div>
              </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'FilmeView',
  data() {
    return {
      filme: [
        {
          id: 1,
          filmName: "Beispielfilm",
          bewertung: 50,
          kommentar: "Ist OK",
          bewerter: "Mustermann"
        }
      ]
    }
  }
}
</script>
