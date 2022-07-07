<template>
<div class="page">
<header>
    <h1>Time to fund your tripwire</h1>
    <h2>Ensure you have read and understand the <a class="blue_link" href="#">Tripwire Protocol</a>.</h2>
    <h2>These funds are accessible by you but it is not reccomended that you access them outside of an emergency.</h2>
 </header>
      <div class="form_container">
        <form>
            <div class="lg_checkbox_container">
                <input type="checkbox" v-model="checkbox" name="checkbox">
                <label for="checkbox">I have read and understand the <a class="blue_link" href="#">Tripwire Protocol</a>.</label>
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
  name: 'tripwirePostSetup1',
  components: {
    },
    methods: {
        acknowledge(){
            console.log('user ack, initiating tripwire')
            this.$router.push({ name: 'tripwirePostSetup2' })
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
