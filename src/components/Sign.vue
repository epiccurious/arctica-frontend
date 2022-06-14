<template>
<div class="page">
    <div class="display_block">
        <div id="back_button">
            <button class="btnclose" @click="$emit('closeOut')"><img src="@/assets/carat_left.png">Back</button>
        </div>
        this is the transaction signing page
        {{ this.transaction }}
        

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
}

</style>