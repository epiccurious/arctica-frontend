<template>
<div class="page">
    <header>
        <h1>1 of 2 Signing Successful</h1>
        <h2>Please power off this machine. Swap SD 1 for your next available card and power on this machine.</h2>
    </header>
    

</div>

</template>

<script>
import store from '../../../store.js'

export default {
  name: '1of2success',
  components: {
    },
    computed:{
        psbtFound(){
            return store.getters.getPSBTFound
        }
    }
}
</script>

<style>

.strong{
    font-weight: 800;
}
</style>
