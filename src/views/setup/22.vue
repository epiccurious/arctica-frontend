<!-- Consider adding a hyperlink to 'destroy it at this time' that walks user through proper CD destruction steps -->

<template>
<div class="page">
    <Header title="Remove the 'Setup' CD" subtitle="The setup CD is no longer needed. Please remove it from the machine and destroy it at this time."/>

        <div class="btn_container"> 
            <button @click="acknowledge()" class="btn">Ok</Button> 
        </div>

</div>

</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'Setup22',
  components: {
      Header
    },
    methods: {
        acknowledge(){
            console.log('user ack, proceed')
            this.$router.push({ path: '/setup/23' })
        },
    },
}
</script>

