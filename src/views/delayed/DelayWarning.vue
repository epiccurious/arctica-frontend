<template>
    <div class="page">
        <header>
            <h1>Warning! Your Delayed Wallet is timelocked.</h1>
            <h2>Your Delayed Wallet is timelocked for... <br><span id="delay">1 year 301 days</span></h2> 
            <h2>Accessing these funds early will involve significant cost.</h2> 
            <h2>For more information, read the <a href="#">Time Machine Protocol</a>.</h2>
        </header>
        
        <div class="form_container">
            <form>
                <input type="checkbox" v-model="checkbox" name="checkbox">
                <label for="checkbox">I have read and understand the <a href="#">Time Machine Protocol</a>.</label>
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
a{
    color:#2D9CDB;
}
</style>