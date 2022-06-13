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
    align-items: center;
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
</style>