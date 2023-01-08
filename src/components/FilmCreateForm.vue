<template>
  <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#film-create-offcanvas" aria-controls="#film-create-offcanvas">Film bewerten</button>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="film-create-offcanvas" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasRightLabel">Neue Bewertung</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div class="mb-3">
        <label for="filmName" class="form-label">Filmtitel</label>
        <input type="text" class="form-control" id="filmName" v-model="filmName" placeholder="Bitte Filmtitel eingeben">
      </div>
      <div class="mb-3">
        <label for="bewertung" class="form-label">Bewertung</label>
        <input type="text" class="form-control" id="bewertung" v-model="bewertung" placeholder="Bitte Bewertung eingeben">
      </div>
      <div class="mb-3">
        <label for="kommentar" class="form-label">Kommentar</label>
        <input type="text" class="form-control" id="kommentar" v-model="kommentar" placeholder="Bitte Kommentar schreiben">
      </div>
      <div class="mb-3">
        <label for="bewerter" class="form-label">Bewertet von</label>
        <input type="text" class="form-control" id="bewerter" v-model="bewerter" placeholder="Bitte Ihren Namen eintragen">
      </div>
      <div class="mb-3">
        <img src="previewImage" class="uploading-image" />
        <input type="file" accept="image/jpeg" @change="uploadImage">
      </div>
    </div>
    <div class="mt-5">

      <button class="btn btn-primary me-3" type="submit" @click="createFilm">Create</button>
      <button class="btn btn-danger" type="reset">Reset</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilmCreateForm',
  data () {
    return {
      filmName: '',
      bewertung: '',
      kommentar: '',
      bewerter: ''
    }
  },
  methods: {
    createFilm () {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/filme'

      const headers = new Headers();
      headers.append("Content-Type", "application/json");

      const payload = JSON.stringify({
        "filmName": this.filmName,
        "bewertung": this.bewertung,
        "kommentar": this.kommentar,
        "bewerter": this.bewerter
      });

      const requestOptions = {
        method: 'POST',
        headers: headers,
        body: payload,
        redirect: 'follow'
      };

      fetch(endpoint, requestOptions)
        .catch(error => console.log('error', error));
    },
    uploadImage(e){
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = e =>{
        this.previewImage = e.target.result;
        console.log(this.previewImage);
      }
    }
  }
}

</script>

<style scoped>

</style>
