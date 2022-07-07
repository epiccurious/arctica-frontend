<!-- Consider adding a hyperlink to 'destroy it at this time' that walks user through proper CD destruction steps -->

<template>
<div class="page">
    <header>
        <h1>Remove the 'Setup' CD</h1>
        <h2>The setup CD is no longer needed. Please remove it from the machine and destroy it at this time.</h2>
    </header> 
        <div class="btn_container"> 
            <button @click="acknowledge()" class="btn">Ok</Button> 
        </div>

</div>

</template>

<script>
export default {
  name: 'Setup22',
    methods: {
        acknowledge(){
            console.log('user ack, proceed')
            this.$router.push({ name: 'Setup23' })
        },
    },
}
</script>

