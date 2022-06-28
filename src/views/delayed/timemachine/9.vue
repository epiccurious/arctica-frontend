<!-- This page will be a popup that appears everytime the user logs in, when the user has completed their second time machine operation and
can now spend from delayed-->

<template>
<div class="page">
    <header>
        <h1>Your Second Time Machine Operation is Complete</h1>
        <h2>Your funds are now accessible from your delayed wallet.</h2>
    </header>
    

        <div class="btn_container"> 
            <button @click="acknowledge()" class="btn">Ok</Button>
        </div>



</div>

</template>

<script>

export default {
  name: 'TimeMachine9',
  components: {
    },
    methods: {
        acknowledge(){
            console.log('user ack, closing popup')
            this.$router.push({ path: '/wallets/delayed' })
            //update a global delayed wallet unlocked variable here
        },

    },
}
</script>

<style scoped>
header{
    display:flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 0px 25px;
    margin: 0 auto;
    margin-top: 5%;
}
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
