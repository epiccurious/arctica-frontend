<template>
<div class="page">
<header>
<h1>Package 4 is now complete.</h1>
 <h2>Please remove DVD 4.</h2>
 <h2>Place SD card 4, and backups CD 4 and DVD 4 into Envelope 4.</h2> 
 <h2>This envelope should be stored somewhere...[placeholder text]</h2>
 </header>
      <div class="form_container">
        <form>
            <div class="checkbox_container">
                <input type="checkbox" v-model="checkbox" name="checkbox">
                <label for="checkbox">My #4 devices have been placed into Envelope 4.</label>
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
  name: 'Setup38',
  components: {
    },
    methods: {
        acknowledge(){
            console.log('user ack, package 4 completed')
            this.$router.push({ path: '/setup/39' })
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
.checkbox_container{
margin-left:10%; 
}
</style>