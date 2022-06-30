<template>
<div class="page">
    <header>
        <h1>SD 7 creation complete</h1>
        <h2>Please insert SD 1 and reboot the machine.</h2>
    </header> 
        <div class="btn_container"> 
            <button @click="acknowledge()" class="btn">Ok</Button> 
            <button @click="proceed()" class="btn2">Continue (debug only)</Button>   <!--  remove this eventually -->
        </div>

</div>

</template>

<script>
export default {
  name: 'Setup20',
    methods: {
        acknowledge(){
            console.log('user ack, close application')
        },
        proceed(){
            console.log('debug proceed')
            this.$router.push({ path: '/setup/21' })
        },

    },
}
</script>

