<template>
<div class="page">
<header>
    <!-- the below will need a full rework once page 2 and its child components are working correctly. This should be pulling in props from the previous page -->
    <h1>Does the below information look correct?</h1>
    <h2>Your Full Name [name variable will go here] <a href="#">Image</a> <a href="#">Edit</a> <a href="#">Delete</a></h2>
    <h2>Family Member #1 Name [name variable will go here] <a href="#">Image</a> <a href="#">Edit</a> <a href="#">Delete</a></h2>
 </header>
      <div class="form_container">
        <form>
            <div class="checkbox_container">
                <input type="checkbox" v-model="checkbox" name="checkbox">
                <label for="checkbox">I have verified the above information</label>
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
  name: 'piiPostSetup3',
  components: {
    },
    methods: {
        acknowledge(){
            console.log('user ack, submitting pii')
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