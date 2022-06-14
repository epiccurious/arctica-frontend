<template>
<div class="page">
    <div class="display_block">
        this is the transaction signing page
        {{ this.transaction }}
        <button class="btnclose" @click="$emit('closeOut')"><img src="@/assets/X.png"></button>

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

</style>