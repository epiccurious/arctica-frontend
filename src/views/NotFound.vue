<template>
<div class="page">
    <header>
        <h1>Something bad happened</h1>

        <h2>This page does not exist</h2>
    </header>
    <div class="btn_container"> 
        <button @click="goHome()" class="btn">Go Back Home</button>
    </div>
    
</div>
</template>

<script>
export default{

    methods:{
        goHome(){
            this.$router.push({ path: '/wallets' })
        }
    }

}

</script>

<style>

</style>