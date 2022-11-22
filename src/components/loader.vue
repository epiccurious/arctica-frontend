<template>
    <div class="loader_container">
      <h1>Loading...Please wait.</h1>

      <h2>This may take a few minutes.</h2>

      <h2>{{ this.loadMessage }}</h2>
  </div>
</template>

<script>
import store from '../store.js'

export default{
    name: 'Loader',
    props: {
        text: String,
    },
    computed: {
      loadMessage(){
        return store.getters.getLoadMessage
      },
    }
}
</script>

<style scoped>
.loader-container{
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

</style>