<template>
<header>
    <h1>{{ title }}</h1>
    <h2>{{ subtitle }}</h2>
    <Button_primary />
    <Button_secondary />
</header>
</template>

<script>
import Button_primary from './Button_primary'
import Button_secondary from './Button_secondary.vue'

export default {
    name: 'Header',
    props: {
        title: String,
        subtitle: String,
},
    components: {
        Button_primary,
        Button_secondary,
    },
}
</script>

<style scoped>
header{
    display:flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 0px 50px;
    gap: 10px;
}
h1{
    font-size: 21px;
}
h2{
    font-size: 18px;
    color: #777777;
}
</style>