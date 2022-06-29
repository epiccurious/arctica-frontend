<!-- This page will be a popup that appears if the user has 5 unsuccesful login attempts and Bricks the BPS relationship-->

<template>
<div class="page">
    <header>
        <h1>You have 5 failed login attempts.</h1>
        <h2>Arctica will now initialize the manual recovery process.</h2>
        <h2>This will require you access additional SD cards.</h2>
    </header>
    

        <div class="btn_container"> 
            <button @click="acknowledge()" class="btn">Ok</Button>
        </div>



</div>

</template>

<script>

export default {
  name: 'BPS_Bricked',
  components: {
    },
    methods: {
        acknowledge(){
            console.log('user ack, initiating manual recovery process')
            this.$router.push({ path: '/login/recovery' })
        },

    },
}
</script>

<style scoped>

h1{
    font-size: 21px;
    font-weight:600;
    line-height: 25px;
}
h2{
    font-size: 18px;
    color: #777777;
    font-weight: 800;
}
</style>
