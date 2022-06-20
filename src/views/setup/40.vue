<template>
<div class="page">
    <Header title="DVD 5 Backup" subtitle="Please remove CD 5 and insert DVD 5."/>
    
    <div class="form_container">
        <form>
            <input type="checkbox" v-model="checkbox" name="checkbox">
            <label for="checkbox">I have inserted DVD 5.</label>
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
  name: 'Setup40',
  components: {
      Header
    },
    methods: {
        acknowledge(){
            console.log('user ack, moving info from SD 5 to DVD 5')
            this.$router.push({ path: '/setup/41' })
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

