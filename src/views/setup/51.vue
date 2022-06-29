<!-- User returns to primary machine for this step -->

<template>
<div class="page">
    <header>
        <h1>Initial Sync Complete</h1>
        <h2>Reboot from SD 1 to log in to your wallet.</h2>
    </header>
        <div class="btn_container"> 
            <button @click="acknowledge()" class="btn">Ok</Button> 
        </div>

</div>

</template>

<script>

export default {
  name: 'Setup51',
  components: {},
    methods: {
        acknowledge(){
            console.log('user ack, proceed, close application')
        },

    },
}
</script>

