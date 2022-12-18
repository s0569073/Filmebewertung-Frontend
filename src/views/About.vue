<template>
  <div class="about">
    <HelloWorld msg="Dies ist mein Projekt, in dem ich es ermögliche eure Lieblingsfilme zu bewerten."/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'AboutView',
  components: {
    HelloWorld
  }
}
</script>
