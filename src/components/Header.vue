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