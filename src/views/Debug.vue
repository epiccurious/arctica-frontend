<template>
<div class="page">
    <header>
        <h1>Debug toggles</h1>
        <h2>This is for testing only.</h2>
    </header>
    <div class="btn_container"> 
        <label for="toggleswitch" class="custom_control_label">Test</label>
        <input type="checkbox" class="custom_control_input" id="toggleswitch">
    </div>
    
</div>
</template>

<script>
export default{
    name: 'Debug',

    methods:{
        goHome(){
            this.$router.push({ name: 'dashboard' })
        }
    }

}

</script>

<style>

</style>