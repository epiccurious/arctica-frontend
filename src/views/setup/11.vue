<template>
<div class="page">
    <header>
        <h1>SD initial flash successful</h1>
        <h2>Please power off this machine, insert SD 1, and power on the machine.</h2>
    </header>   
        <div class="btn_container"> 
            <button @click="acknowledge()" class="btn">Ok (This will close the application)</Button>
        </div>

</div>

</template>

<script>
export default {
  name: 'Setup11',
    methods: {
        acknowledge(){
            console.log('user ack, closing application')
        },

    },
}
</script>

