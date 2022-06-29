<template>
<div class="page">
<header>
    <h1>We will now configure your recovery folder</h1>
    <h2>This folder is used for both the <a href="#">Tripwire Protocol</a> and the <a href="#">Duress Protocol</a>.</h2>
    <h2>This information will remain private unless you choose to reveal it!</h2>
 </header>
      <div class="form_container">
        <form>
            <div class="checkbox_container">
                <input type="checkbox" v-model="checkbox" name="checkbox">
                <label for="checkbox">I have read and understand the <a href="#">Tripwire Protocol</a> & <a href="#">Duress Protocol</a>.</label>
            </div>
        </form>
        <div class="btn_container"> 
            <button v-if="checkbox" @click="acknowledge()" class="btn">Proceed</Button>
            <button v-else @click="warn()" class="btn3">Proceed</Button>
        </div>
    </div> 

</div>

</template>

<script>
export default {
  name: 'piiPostSetup1',
  components: {
    },
    methods: {
        acknowledge(){
            console.log('user ack, initiating pii')
            this.$router.push({ path: '/recovery/setup/2' })
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
a{
    color:#2D9CDB;
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