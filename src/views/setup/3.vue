<template>
<div class="page">
    <header>
        <h1>Time to setup your keys...</h1>
        <h2>Take 8 CDs and label them "CD 1" through "CD 7", and label the final one "setup".</h2> 
        <h2>Take 7 DVDs and label them "DVD 1" through "DVD 7".</h2> 
        <h2>Take 7 SD cards and label them "1" through "7"</h2>
        <h2>Take 7 Envelopes and label them "1" through "7"</h2>
    </header>
    
    <div class="form_container">
        <form>
            <input type="checkbox" v-model="checkbox" name="checkbox">
            <label for="checkbox">My devices are properly labelled</label>
        </form>
        <div class="btn_container"> 
            <button v-if="checkbox" @click="acknowledge()" class="btn">Continue</Button>
            <button v-else @click="warn()" class="btn3">Continue</Button>
        </div>
    </div> 


</div>

</template>

<script>

export default {
  name: 'Setup3',
  components: {
    },
    methods: {
            acknowledge(){
            console.log('user ack, media devices are ready')
            this.$router.push({ path: '/setup/4' })
        },
        warn(){
            console.log('user trying to proceed without checkbox validation')
        },

    },
    data(){
        return{
            checkbox: false,
        }
    }
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
    font-weight: 400;
}
form{
    max-width:420px;
    margin: 10px auto;
    text-align: left;
    padding:10px;
}
</style>
