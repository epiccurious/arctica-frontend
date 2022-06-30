<template>
<div class="page">
<header>
<h1>Package 3 is now complete.</h1>
 <h2>Please remove DVD 3.</h2>
 <h2>Place SD card 3, and backups CD 3 and DVD 3 into Envelope 3.</h2> 
 <h2>This envelope should be stored somewhere...[placeholder text]</h2>
 </header>
      <div class="form_container">
        <form>
            <div class="checkbox_container">
                <input type="checkbox" v-model="checkbox" name="checkbox">
                <label for="checkbox">My #3 devices have been placed into Envelope 3.</label>
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
  name: 'Setup34',
  components: {
    },
    methods: {
        acknowledge(){
            console.log('user ack, package 3 completed')
            this.$router.push({ path: '/setup/35' })
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
.checkbox_container{
margin-left:10%; 
}
</style>