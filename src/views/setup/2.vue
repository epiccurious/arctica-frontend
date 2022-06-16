<template>
  <header>
<h1>Bitcoin Core Successfully Installed</h1>
 <h2>Now that the Bitcoin Software is installed, we need to download and sync the blockchain.</h2> 
 <h2>This can take anywhere from a few days to several weeks.</h2> 
     <h2>You can stop the arctica setup process at any time, but you should leave this computer on and unlocked until the sync is finished.</h2>
    <div class="btn_container"> 
        <button @click="acknowledge()" class="btn">Ok</Button>
          </div>
    </header>

  
</template>

<script>

export default {
  name: 'Setup2',
  components: {
    },
    methods: {
        acknowledge(){
            console.log('user ack')
        },
    },
}
</script>

<style scoped>
header{
    display:flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 0px 25px;
    margin: 0 auto;
    margin-top: 5%;
}
h1{
    font-size: 21px;
    font-weight:600;
    line-height: 25px;
}
h2{
    font-size: 18px;
    color: #777777;
    font-weight: 400;
}
</style>
