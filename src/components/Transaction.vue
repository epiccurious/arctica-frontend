<template>
<div class="page">
    <div class="transaction_block">
        <header id="transaction_head">
            <h1>Transaction</h1>
            <button class="btnclose" @click="$emit('closeOut')"><img src="@/assets/X.png"></button>
        </header>
        <div id="description_block">
            <input type="text" placeholder="Enter a description...">
        </div>

        <div class="tx_block">
            <h2>To</h2>
            <h3>address here</h3>
        </div>

        <div class="tx_block">
            <h2>Amount</h2>
            <h3>amount here</h3>
        </div>

        <div class="tx_block">
            <h2>Fee</h2>
            <h3>fee here</h3>
        </div>

        <div class="tx_block">
            <h2>Time</h2>
            <h3>time here</h3>
        </div>

        <div class="tx_block">
            <h2>Status</h2>
            <h3>status here</h3>
        </div>

        <div id="footer_block">
            <h2>View in explorer</h2>
            <img src="@/assets/carat_right.png">
        </div>

    </div>
</div>
</template>


<script>
export default {
    props: ['transactions' ],
    methods: {},
}
</script>

<style scoped>
.transaction_block{
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: flex-start;
    width:70%;
    margin: 0 auto;
    
    background: #FFFFFF;
}
.page{
  width:100%;
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
}

#tx_block{
    display:flex;
    flex-direction: row;
}

#footer_block{
    display:flex;
    flex-direction: row;
}
</style>