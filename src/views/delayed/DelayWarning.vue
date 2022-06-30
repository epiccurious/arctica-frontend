<template>
    <div class="page">
        <header>
            <h1>Warning! Your Delayed Wallet is timelocked.</h1>
            <h2>Your Delayed Wallet is timelocked for... <br><span id="delay">1 year 301 days</span></h2> 
            <h2>Accessing these funds early will involve significant cost.</h2> 
            <h2>For more information, read the <a class="blue_link" href="#">Time Machine Protocol</a>.</h2>
        </header>
        
        <div class="form_container">
            <form>
                <div class="checkbox_container">
                    <input type="checkbox" v-model="checkbox" name="checkbox">
                    <label for="checkbox">I have read and understand the <a class="blue_link" href="#">Time Machine Protocol</a>.</label>
                </div>
            </form>
            <div class="btn_container"> 
                <button v-if="checkbox" @click="$emit('ackWarning')" class="btn">Proceed</Button>
                <button v-else @click="warn()" class="btn3">Proceed</Button>
            </div>
        </div> 
    </div>
</template>

<script>

export default {
    name: 'DelayWarning',
    props: [],
    data(){
        return{
            checkbox: false,
            
        }
    },
    methods:{
        warn(){
            console.log('user trying to proceed without checkbox validation')
        },
    }
}
</script>

<style scoped>
#delay{
    font-weight: 700;
}
.checkbox_container{
margin-left:10%; 
}
</style>