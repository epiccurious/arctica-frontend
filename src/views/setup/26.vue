<template>
<div class="page">
<header>
<h1>Package 1 is now complete.</h1>
 <h2>Please remove DVD 1.</h2>
 <h2>Place SD card 1, and backups CD 1 and DVD 1 into Envelope 1.</h2> 
 <h2>This envelope should be stored somewhere secure and easily accessible, like your attic.</h2>
 <h2>SD card 1 should be what you use first when you want to spend bitcoin.</h2>
 </header>
      <div class="form_container">
        <form>
            <div class="lg_checkbox_container">
                <input type="checkbox" v-model="checkbox" name="checkbox">
                <label for="checkbox">My #1 devices have been placed into Envelope 1.</label>
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
  name: 'Setup26',
  components: {
    },
    methods: {
        acknowledge(){
            console.log('user ack, attic key and #1 package complete')
            this.$router.push({ path: '/setup/27' })
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
