<!-- User moves to secondary machine at this point -->

<template>
<div class="page">
    <header>
        <h1>Please insert the setup CD</h1>
        <h2>Insert the setup CD to continue.</h2>
    </header>   
    <div class="form_container">
        <form>
            <div class="checkbox_container">
                <input type="checkbox" v-model="checkbox" name="checkbox">
                <label for="checkbox">I have inserted the setup CD.</label>
            </div>
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
  name: 'Setup12',
    methods: {
        acknowledge(){
            console.log('user ack, loading pubkeys onto setup CD')
            this.$router.push({ path: '/setup/13' })
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

