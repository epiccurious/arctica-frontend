<!-- User returns to primary machine for this step -->

<template>
<div class="page">
    <Header title="Please insert the setup CD" subtitle="Please insert the disc labelled 'Setup'"/>

        <div class="btn_container"> 
            <button @click="acknowledge()" class="btn">Ok</Button> 
        </div>

</div>

</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'Setup17',
  components: {
      Header
    },
    methods: {
        acknowledge(){
            console.log('user ack, proceed, consider checkbox here?')
            this.$router.push({ path: '/setup/18' })
        },

    },
}
</script>

