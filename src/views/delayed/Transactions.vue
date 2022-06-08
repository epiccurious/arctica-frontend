<template>
  <div class="page">
    <Nav />
      <div class="dashboard">
        <div class="head_container">
          <h1>Transactions</h1>
        </div>
        <div class="transaction_container">
          <div class="transaction_container_left">
          <h2>Luigi's pizza</h2>
          <h3>2 minutes ago</h3>
          </div>
          <div class="transaction_container_right">
            <h2 class="balance">₿ -21,736 sats</h2>
            <h2 class="fiat_currency">$ -12.75</h2>
          </div>
        </div>
      </div>
  </div>
</template>


<script>
import Nav from '@/components/Nav'

export default {
  name: 'delayed',
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
  align-content: center;
  justify-content: center;
  width:70%;
}
h1{
  margin-top: 50px;
  padding:10px;
}
.head_container{
  border-style: solid; 
  border-width: 0px 0px 1px 0px;
  border-color: #DEDEDE;
  width: 80%;
}
.transaction_container{
  display:flex;
  flex-direction: row;
  border-style: solid; 
  border-width: 0px 0px 1px 0px;
  border-color: #DEDEDE;
  width: 80%;
}
.transaction_container_left{
  display:flex;
  flex-direction: column;
  align-items:flex-start;
  width:50%;
}
.transaction_container_right{
  display:flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items:center;
  align-content:center;
  width:50%;
}
.fiat_currency{
    color: #777777;
}
</style>