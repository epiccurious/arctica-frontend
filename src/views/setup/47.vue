<template>
<div class="page">
    <header>
        <h1>CD 7 Backup</h1>
        <h2>Please insert CD 7.</h2>
    </header> 
    <div class="form_container">
        <form>
            <div class="checkbox_container">
                <input type="checkbox" v-model="checkbox" name="checkbox">
                <label for="checkbox">I have inserted CD 7.</label>
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
  name: 'Setup47',
    methods: {
        acknowledge(){
            console.log('user ack, moving info from SD 7 to CD 7')
            this.$router.push({ name: 'Setup48' })
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

