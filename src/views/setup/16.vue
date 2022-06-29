<template>
<div class="page">
<header>
<h1>SD 4 creation complete</h1>
 <h2>Please remove SD 4 and remove the setup CD.</h2>
 <h2>Return to your primary machine, insert SD 5, and reboot.</h2> 
 </header>
        <div class="btn_container"> 
            <button @click="acknowledge()" class="btn">Ok</Button> 
            <button @click="proceed()" class="btn2">Continue (debug only)</Button>   <!--  remove this eventually -->
        </div>

</div>

</template>

<script>
export default {
  name: 'Setup16',
  components: {
    },
    methods: {
        acknowledge(){
            console.log('user ack, close application')
        },
        proceed(){
            console.log('debug proceed')
            this.$router.push({ path: '/setup/17' })
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
}</style>