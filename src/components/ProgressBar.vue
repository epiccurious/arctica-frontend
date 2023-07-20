<template>
<div id="progressbar">
    <div v-if="setupStage == 1" id="stage1" class="stage active">Initial Flash</div>
    <div v-else id="stage1" class="stage">Initial Flash</div>
    <div v-if="setupStage == 2" id="stage2" class="stage active">Key Gen</div>
    <div v-else id="stage2" class="stage">Key Gen</div>
    <div v-if="setupStage == 3" id="stage3" class="stage active">Wallets & Backups</div>
    <div v-else id="stage3" class="stage">Wallets & Backups</div>
    <div v-if="setupStage == 4" id="stage4" class="stage active">Sync Bitcoin</div>
    <div v-else id="stage4" class="stage">Sync Bitcoin</div>
</div>
</template>


<script>
import store from '../store.js'



export default{
    name: 'ProgressBar',
    methods: {},
    computed: {
        currentHW(){
        return store.getters.getcurrentHW
      },
      setupStage(){
        return store.getters.getSetupStage
      }
    },
    data(){
      return{
      }
  },
    }
</script>

<style scoped>
#progressbar {
    padding-top: 15%;
    padding-bottom: 5%;
    padding-right: 10%;
    padding-left: 10%;
    display: flex;
    height: 20px;
    width: 100%;
    border: 1px solid black;
    border-radius:10px;
}.stage {
    width: 25%;
    text-align: center;
    line-height: 20px;
    background-color: lightgray;
}.active {
    background-color: blue;
    color: white;
}
</style>