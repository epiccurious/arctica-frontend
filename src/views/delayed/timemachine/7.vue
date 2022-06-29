<!-- This page will be a popup that appears everytime the user logs in, when the user has completed their first time machine operation and
is waiting for a confirmation from the second time machine operator.-->

<template>
<div class="page">
    <header>
        <h1>Your First Time Machine Operation is Complete</h1>
        <h2>We are now waiting on a second Time Machine Operator.</h2>
        <h2>Check back in 24 hours.</h2>
    </header>
    

        <div class="btn_container"> 
            <button @click="acknowledge()" class="btn">Ok</Button>
        </div>



</div>

</template>

<script>

export default {
  name: 'TimeMachine7',
  components: {
    },
    methods: {
        acknowledge(){
            console.log('user ack, closing popup')
            this.$router.push({ path: '/wallets' })
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
    font-weight: 400;
}
</style>
