<template>
<div class="page">
    <header>
        <h1>SD Card 4</h1>
        <h2>Please swap over to your secondary machine, power it off, insert SD card 4 and power on the machine.</h2>
    </header> 
        <div class="btn_container"> 
            <button @click="acknowledge()" class="btn">Ok (this will close the application)</Button>
        </div>
</div>

</template>

<script>
export default {
  name: 'Setup34',
    methods: {
        acknowledge(){
            console.log('user ack, close application')
        },
    },
    }
</script>

