<template>
<div class="page">
    <header>
        <h1>SD 3 creaton complete</h1>
        <h2>Please insert SD 4 and reboot this machine.</h2>
    </header> 
        <div class="btn_container"> 
            <button @click="acknowledge()" class="btn">Ok</Button> 
            <button @click="proceed()" class="btn2">Continue (debug only)</Button>   <!--  remove this eventually -->
        </div>

</div>

</template>

<script>
export default {
  name: 'Setup15',
    methods: {
        acknowledge(){
            console.log('user ack, close application')
        },
        proceed(){
            console.log('debug proceed')
            this.$router.push({ name: 'Setup16' })
        },

    },
}
</script>

