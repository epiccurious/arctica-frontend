<template>
<div class="page">
    <Header title="CD 5 Backup" subtitle="Please insert CD 5."/>
    
    <div class="form_container">
        <form>
            <input type="checkbox" v-model="checkbox" name="checkbox">
            <label for="checkbox">I have inserted CD 5.</label>
        </form>
        <div class="btn_container"> 
            <button v-if="checkbox" @click="acknowledge()" class="btn">Proceed</Button>
            <button v-else @click="warn()" class="btn3">Proceed</Button>
        </div>
    </div> 


</div>

</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'Setup39',
  components: {
      Header
    },
    methods: {
        acknowledge(){
            console.log('user ack, moving info from SD 5 to CD 5')
            this.$router.push({ path: '/setup/40' })
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

