<template>
<div class="page">
<header>
    <h1>Are you sure you want to perform a quick withdrawal?</h1>
    <h2>This is not the reccomended way to access your funds.</h2>
    <h2>Please confirm before proceeding.</h2>
 </header>
      <div class="form_container">
        <form>
            <div class="checkbox_container">
                <input type="checkbox" v-model="checkbox" name="checkbox">
                <label for="checkbox">I understand and would like to withdraw</label>
            </div>
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
            this.$router.push({ path: '/quick/send' })
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
.checkbox_container{
margin-left:10%; 
}
</style>