<template>
  <div class="dashboard">
    <Nav />
    <h1>Wallets</h1>
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
  width:100%;
}
</style>