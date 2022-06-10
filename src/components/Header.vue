<template>
<header>
    <h1>{{ title }}</h1>
    <h2>{{ subtitle }}</h2>
</header>
</template>

<script>

export default {
    name: 'Header',
    props: {
        title: String,
        subtitle: String,
},
}
</script>

<style scoped>
header{
    display:flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 0px 25px;
    font-weight: 600;
}
h1{
    font-size: 21px;
}
h2{
    font-size: 18px;
    color: #777777;
    font-weight: 400;
}
</style>