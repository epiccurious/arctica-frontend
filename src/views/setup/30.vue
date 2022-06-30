<template>
<div class="page">
<header>
<h1>Package 2 is now complete.</h1>
 <h2>Please remove DVD 2.</h2>
 <h2>Place SD card 2, and backups CD 2 and DVD 2 into Envelope 2.</h2> 
 <h2>This envelope should be stored somewhere secure and easily accessible, like your home safe.</h2>
 </header>
      <div class="form_container">
        <form>
            <div class="lg_checkbox_container">
                <input type="checkbox" v-model="checkbox" name="checkbox">
                <label for="checkbox">My #2 devices have been placed into Envelope 2.</label>
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
  name: 'Setup30',
  components: {
    },
    methods: {
        acknowledge(){
            console.log('user ack, package 2 completed')
            this.$router.push({ path: '/setup/31' })
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
