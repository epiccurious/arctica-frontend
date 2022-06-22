<template>
<div class="page">
<header>
    <h1>Are you sure you want to perform a quick withdrawal?</h1>
    <h2>This is not the reccomended way to access your funds.</h2>
    <h2>Please confirm before proceeding.</h2>
 </header>
      <div class="form_container">
        <form>
            <input type="checkbox" v-model="checkbox" name="checkbox">
            <label for="checkbox">I understand and would like to withdraw</label>
        </form>
        <div class="btn_container"> 
            <button v-if="checkbox" @click="acknowledge()" class="btn">Proceed</Button>
            <button v-else @click="warn()" class="btn3">Proceed</Button>
            <button @click="goBack()" class="btn2">Go Back</button>
        </div>
    </div> 

</div>

</template>

<script>
export default {
  name: 'quick1',
  components: {
    },
    methods: {
        acknowledge(){
            console.log('user ack, proceeding to send page')
        },
        warn(){
            console.log('user trying to proceed without checkbox validation')
        },
        goBack(){
            this.$router.push({ path: '/' })
        }

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
}</style>