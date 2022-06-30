<template>
<div class="page">
    <div class="display_block">
        <header id="transaction_head">
            <h1>Transaction</h1>
            <button class="btnclose" @click="$emit('closeOut')"><img src="@/assets/X.png"></button>
        </header>
        <div id="description_block">
            <input type="text" placeholder="Enter a description...">
        </div>

        <div class="tx_block">
            <h2>To</h2>
            <h3>{{ this.transaction.address }}</h3>
        </div>

        <div class="tx_block">
            <h2>Amount</h2>
            <h3>{{ this.transaction.balance }}</h3>
        </div>

        <div class="tx_block">
            <h2>Fee</h2>
            <h3>{{ this.transaction.fee }}</h3>
        </div>

        <div class="tx_block">
            <h2>Time</h2>
            <h3>{{ this.transaction.datetime }}</h3>
        </div>

        <div class="tx_block">
            <h2>Status</h2>
            <h3 v-if="this.transaction.status=='Confirmed'" id="confirmed" >{{ this.transaction.status }}</h3>
            <h3 v-else id="unconfirmed" >{{ this.transaction.status }}</h3>
        </div>

        <div id="footer_block">
            <h2>View in explorer</h2>
            <div><img src="@/assets/carat_right.png"></div>
        </div>

    </div>
</div>
</template>


<script>
export default {
    props: ['transaction'],
    methods: {},
}
</script>

<style scoped>
.display_block{
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: flex-start;
    width:30%;
    padding:2%;
    margin: 0 auto;
    background: #FFFFFF;
    border-radius:10px;
}
.page{
  width:100%;
  padding-top:5%;
  padding-bottom:5%;
  background: rgba(0, 0, 0, 0.5);
  margin: 0 auto;
}
#transaction_head{
    display:flex;
    flex-direction: row;
    width:100%;
    justify-content: space-between;
    
}
#description_block{
    display:flex;
    align-self:center;
    justify-self:center;
    width:100%;
}

.tx_block{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-content:center;
    width:90%;
    border-style: solid; 
    border-width: 0px 0px 1px 0px;
    border-color: #DEDEDE;
}

#footer_block{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-content:center;
    align-items:center;
    width:90%;
}
h2{
    color:#000000;
}
h3{
    font-family: 'Inter';
    text-align:right;
    color: #404040;
}
#confirmed{
    color:#27AE60;
}
#unconfirmed{
    color: #EB5757;
}

input{
    width:100%;
    padding:12px;
    border:none;
    text-align:center;
}
</style>