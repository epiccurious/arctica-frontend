<template>
  <div class="dashboard">
    <Nav />
    <h1>This is a dashboard that will display the wallets</h1>
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