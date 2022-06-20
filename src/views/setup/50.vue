<template>
<div class="page">
<header>
<h1>Congratulations. You have successfully completed setup.</h1>
 <h2>Now we must wait for Bitcoin Core to finish it's initial sync.</h2>
 <h2>This computer should remain on and unlocked until the blockchain has finished it's sync.</h2> 
 <h2>This can take anywhere from a few hours to a few weeks depending on your internet connection.</h2>
 <h3>Progress: 56% complete.</h3>
 </header>
      <div class="form_container">
        <div class="btn_container"> 
            <button v-if="synced" @click="acknowledge()" class="btn">Proceed</Button>
            <button v-else @click="warn()" class="btn3">Proceed</Button>
            <button @click="proceed()" class="btn2">Continue (debug only)</Button>   <!--  remove this eventually -->
        </div>
    </div> 

</div>

</template>

<script>
export default {
  name: 'Setup50',
  components: {
    },
    methods: {
        acknowledge(){
            console.log('user ack, sync complete')
            // this.$router.push({ path: '/setup/50' })
        },
        warn(){
            console.log('user trying to proceed without checkbox validation')
        },
        proceed(){
            console.log('debug proceed')
            this.$router.push({ path: '/setup/20' })
        },

    },
    data(){
        return{
            synced: false,
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
}</style>