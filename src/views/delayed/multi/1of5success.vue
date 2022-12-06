<template>
<div class="page">
    <header>
        <h1>1 of 5 Signing Successful</h1>
        <h2>Please power off this machine. Swap SD 1 for SD 2 and power on this machine.</h2>
    </header>

</div>

</template>

<script>
import store from '../../../store.js'

export default {
  name: '1of5success',
  components: {
    },
    methods: {
        acknowledge(){
            console.log('user ack, closing application')
        },
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
