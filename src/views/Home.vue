<template>
  <div class="home">
    <HelloWorld msg="Filmebewertung"/>
    <img alt="Vue logo" src="../assets/startseite.jpg" height="500" width="1000">
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
