<template>
    <div class="transactionBlock">
        This is the transaction details
        <button @click="$emit('closeOut')">X</button>
    </div>
</template>


<script>
export default {
    props: ['transactions' ],
    methods: {},
}
</script>

<style scoped>
.transactionBlock{
    margin:25px;
}
</style>