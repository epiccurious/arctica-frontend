<!-- User returns to primary machine for this step -->

<template>
<div class="page">
    <Header title="Initial Sync Complete" subtitle="Reboot from SD 1 to log in to your wallet."/>

        <div class="btn_container"> 
            <button @click="acknowledge()" class="btn">Ok</Button> 
        </div>

</div>

</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'Setup51',
  components: {
      Header
    },
    methods: {
        acknowledge(){
            console.log('user ack, proceed, close application')
        },

    },
}
</script>

