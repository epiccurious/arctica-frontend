<template>
<Header title="Welcome to Arctica" subtitle="Everything looks good. Glad to have you back."/>
<!-- consider breaking this into seperate header & subheader components -->
</template>

<script>
import Header from './components/Header'


export default {
  name: 'App',
  components: {
    Header,
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400&display=swap');
#app {
  font-family: 'Inter';
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 21px;
  color: #2c3e50;
  background: #FFFFFF;
  margin-top: 60px;
}

.btn {
  background: #F7931A;
  box-shadow: 0px 4px 4p rgba(0, 0, 0, 0.25);
  border-radius:5px;
  color: #FFFFFF;
  width: 335px;
  height: 46px;
  font-size: 18px;
  line-height: 18px;

}

.btn2 {
  background: #FFFFFF;
  box-shadow: 0px 4px 4p rgba(0, 0, 0, 0.25);
  border-radius:5px;
  color: #000000;
  width: 335px;
  height: 46px;
  font-size: 18px;
  line-height: 18px;

}
</style>
