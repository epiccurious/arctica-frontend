<template>
<Confirmation v-if="sent" />
<div v-else class="page">
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

        <div class="horizontal_btn_container">
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
    }
}
</script>
