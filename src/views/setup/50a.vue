<template>
<div class="page">
    <header>
        <h1>SD Card 1</h1>
        <h2>Please swap over to your primary machine, power it off, insert SD card 1 and power on the machine.</h2>
    </header> 
        <div class="btn_container"> 
            <button @click="acknowledge()" class="btn">Ok (this will close the application)</Button>
        </div>
</div>

</template>

<script>
export default {
  name: 'Setup50a',
    methods: {
        acknowledge(){
            console.log('user ack, close application')
        },
    }
    }
</script>

