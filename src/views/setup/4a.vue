<template>
<div class="page">
    <header>
        <h1>You have successfully created SD 1</h1>
        <h2>Please keep SD 1 inserted and reboot your machine.</h2>
    </header>    
    <div class="btn_container"> 
            <button @click="acknowledge()" class="btn">Ok (This will close the application)</Button>
        </div>


</div>

</template>

<script>

export default {
  name: 'Setup4a',
    methods: {
        acknowledge() {
            console.log('user ack, closing application (sim)')
        },

    },
}
</script>