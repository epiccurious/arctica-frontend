<!-- User returns to primary machine for this step -->

<template>
<div class="page">
    <header>
        <h1>Please insert the setup CD</h1>
        <h2>Insert the disc labelled 'Setup'.</h2>
    </header> 
        <div class="btn_container"> 
            <button @click="acknowledge()" class="btn">Ok</Button> 
        </div>

</div>

</template>

<script>

export default {
  name: 'Setup17',
    methods: {
        acknowledge(){
            console.log('user ack, proceed, consider checkbox here?')
            this.$router.push({ name: 'Setup18' })
        },

    },
}
</script>

