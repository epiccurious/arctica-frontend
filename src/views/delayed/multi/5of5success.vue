<template>
<div class="page">
    <header>
        <h1>5 of 5 Signing Successful</h1>
        <h2>Please power off this machine. Return to your primary machine, insert SD 1 & the Transfer CD and power on the primary machine.</h2>
    </header>


</div>

</template>

<script>
import store from '../../../store.js'

export default {
  name: '5of5success',
  components: {
    },
    computed:{
        psbtFound(){
            return store.getters.getPSBTFound
        },
        timeLock(){
            return store.getters.getTimeLock
        }
    }
}
</script>

<style>

.strong{
    font-weight: 800;
}
</style>
