<template>
<div class="page">
    <header>
        <h1>SD Card 2</h1>
        <h2>Please power off this device, insert SD card 2 and reboot the machine.</h2>
    </header> 
        <div class="btn_container"> 
            <button @click="acknowledge()" class="btn">Ok (this will close the application)</Button>
        </div>
</div>

</template>

<script>
export default {
  name: 'Setup26',
    methods: {
        acknowledge(){
            console.log('user ack, close application')
            //eventually need a step here to remove the electronic label that redirected user to step 26, added in step 10
        },
        warn(){
            console.log('user trying to proceed without checkbox validation')
        },
    },
    data(){
        return{}
    },
    }
</script>

