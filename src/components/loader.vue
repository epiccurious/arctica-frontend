<template>
  <div class="page">
    <header>
      <h1>Loading...Please wait.</h1>

      <h2>This might take anywhere from a few minutes to many hours.</h2>

      <h2>{{ this.loadMessage }}</h2>
    </header>
  </div>
</template>

<script>
import store from '../store.js'

export default{
    name: 'Loader',
    computed: {
      loadMessage(){
        return store.getters.getLoadMessage
      },
    }
}
</script>