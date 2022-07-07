<template>
<div class="page">
<header>
<h1>Package 5 is now complete.</h1>
 <h2>Please remove DVD 5.</h2>
 <h2>Place SD card 5, and backups CD 5 and DVD 5 into Envelope 5.</h2> 
 <h2>This envelope should be stored somewhere...[placeholder text]</h2>
 </header>
      <div class="form_container">
        <form>
            <div class="lg_checkbox_container">
                <input type="checkbox" v-model="checkbox" name="checkbox">
                <label for="checkbox">My #5 devices have been placed into Envelope 5.</label>
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
  name: 'Setup42',
  components: {
    },
    methods: {
        acknowledge(){
            console.log('user ack, package 5 completed')
            this.$router.push({ name: 'Setup43' })
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
