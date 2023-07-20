<template>
<div id="progressbar">
    <div v-if="setupStage == 1" id="stage1" class="stage active">Stage 1</div>
    <div v-else id="stage1" class="stage">Stage 1</div>
    <div v-if="setupStage == 2" id="stage2" class="stage active">Stage 2</div>
    <div v-else id="stage2" class="stage">Stage 2</div>
    <div v-if="setupStage == 3" id="stage3" class="stage active">Stage 3</div>
    <div v-else id="stage3" class="stage active">Stage 3</div>
    <div v-if="setupStage == 4" id="stage4" class="stage active">Stage 4</div>
    <div v-else="setupStage == 4" id="stage4" class="stage">Stage 4</div>
</div>
</template>


<script>
import store from '../store.js'



export default{
    name: 'ProgressBar',
    methods: {
        setInterval(){

        }
    },
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
    display: flex;
    height: 20px;
    width: 100%;
    border: 1px solid black;
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