<!-- This component should only show for transactions with more than one output! -->

<template>
<Confirmation v-if="sent" />
<div v-else class="page">
    <!-- <div id="back_button">
        <button class="btnclose" @click="$emit('closeOut')"><img src="@/assets/carat_left.png">Back</button>
    </div> -->
    <div class="display_block">
        <h1>Ready to send?</h1>
        <img src="@/assets/checkmark_green.png">
        <div class="tx_block">
            <h2>To</h2>
            <h3>{{ this.transaction.address }}</h3>
        </div>

        <div class="tx_block">
            <h2>Amount</h2>
            <h3>₿ {{ this.transaction.amount }}</h3>
        </div>

        <div class="tx_block">
            <h2>Fee</h2>
            <h3>₿ {{ this.transaction.fee }}</h3>
        </div>

        <div class="btn_container">
            <button @click="broadcast(this.transaction)" class="btn">Send</button>
            <button @click="$emit('closeOut')" class="btn2">Discard</button>
        </div>
        

    </div>
</div>
</template>


<script>
import Confirmation from '@/components/Confirmation'

export default {
    props: ['transaction'],
    components: {
        Confirmation
    },
    methods: {
        broadcast(){
            console.log('broadcasting...')
            this.sent = true
        }
    },
    data(){
        return{
        sent: false
        }
    },
}
</script>

<style scoped>
.display_block{
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 4%;
    width: 40%;
}
.btn_container{
    margin-top: 2%;
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
#back_btn{
    display:flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    justify-items: center;
    justify-content: center;
}
.btnclose{
    display:flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    font-weight:500;
    font-size:18px;
    line-height: 18px;
}
h3{
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
}
</style>