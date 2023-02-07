<template>
<div class="page">
    <header>
        <h1>Initiating this process is irreversible.</h1>
        <h2>To proceed you must release the information provided in your Personally Identifiable Information folder.</h2> 
        <h2>This information will be released to anonymous Time Machine Operators.</h2> 
        <h2>Additionally, this process will take several weeks and cost you approximately $20,000.</h2>
        <h4>Are you sure you wish to proceed?</h4>
    </header>
    
    <div class="form_container">
        <form>
            <div class="checkbox_container">
                <input type="checkbox" v-model="checkbox" name="checkbox">
                <label for="checkbox">I acknowledge these costs.</label>
            </div>
        </form>
        <div class="btn_container"> 
            <button v-if="checkbox" @click="acknowledge()" class="btn">Release my information</Button>
            <button v-else @click="warn()" class="btn3">Release my information</Button>
            <button @click="goBack()" class="btn2">Nevermind</button>
        </div>
    </div> 


</div>

</template>

<script>

export default {
  name: 'TimeMachine1',
  components: {
    },
    methods: {
        acknowledge(){
            this.$router.push({ name: 'TimeMachine2' })
        },
        warn(){
        },
        goBack(){
            this.$router.push({ name: 'dashboard' })
        }

    },
    data(){
        return{
            checkbox: false,
        }
    }
}
</script>
