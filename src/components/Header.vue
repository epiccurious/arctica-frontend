<template>
<header>
    <div class="left">
        <h1>{{ title }}</h1>
        <h2>{{ subtitle }}</h2>
    </div>
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
.left{
    text-align: left;
}
</style>