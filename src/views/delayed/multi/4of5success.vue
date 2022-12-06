<template>
<div class="page">
    <header>
        <h1>4 of 5 Signing Successful</h1>
        <h2>Please power off this machine. Swap SD 4 for SD 5 and power on this machine.</h2>
    </header>



</div>

</template>

<script>
import store from '../../../store.js'

export default {
  name: '4of5success',
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
