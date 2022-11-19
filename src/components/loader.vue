<template>
    <h1>Loading...Please wait.</h1>

    <h2>This may take a few minutes.</h2>

    <h2>{{ this.loadMessage }}</h2>
</template>

<script>
export default{
    name: 'Loader',
    props: {
        text: String,
    },
    computed: {
      loadMessage(){
        return store.getters.getLoadMessage
      },
    }
}
</script>