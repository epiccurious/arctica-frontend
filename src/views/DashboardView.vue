<template>
  <div class="page">
    <Nav />
      <div class="dashboard">
        <h1>Wallets</h1>
        <h2>Immediate Wallet</h2>
        <h2>Delayed Wallet</h2>
      </div>
  </div>
</template>


<script>
import Nav from '@/components/Nav'

export default {
  name: 'DashboardView',
  components: {
    Nav
  }
}
</script>

<style scoped>
.dashboard{
  display:flex;
  flex-direction: column;
  align-items: center;
}
h1{
  margin-top: 50px;
  /* border-style: solid; 
  border-width: 0px 0px 1px 0px; */
}
</style>