<template>
<div class="page">
    <header>
        <h1>SD 1 creation complete</h1>
        <h2>Please power off this machine, remove SD 1, insert SD 2, and power on the machine.</h2>
    </header> 
        <div class="btn_container"> 
            <button @click="acknowledge()" class="btn">Ok</Button> 
        </div>

</div>

</template>

<script>

export default {
  name: 'Setup13',
    methods: {
        acknowledge(){
            console.log('user ack, close application')
            //eventualy create bitcoin wallet here and export pubkey to setupCD
            //eventually need to check electronic SD label and update global state here, only allow user to proceed if correct SD is inserted
        },
    },
}
</script>

