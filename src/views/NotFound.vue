<template>
<div class="page">
    <header>
        <h1>Something went wrong!</h1>
        <h2>Now you've done it!</h2>
        <h2>You've gone and broken something.</h2>
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