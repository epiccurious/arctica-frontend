<template>
<div class="page">
    <header>
        <h1>Let's finish setting up SD 1</h1>
        <h2>Please keep SD 1 inserted and click below to proceed.</h2>
    </header>    
    <div class="btn_container"> 
            <button @click="acknowledge()" class="btn">Proceed</Button>
        </div>


</div>

</template>

<script>

export default {
  name: 'Setup4b',
    methods: {
        acknowledge() {
            console.log('user ack, creating persistence & automounts & appropriate symlinks')
        },

    },
}
</script>