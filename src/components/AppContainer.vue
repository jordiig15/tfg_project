<template>
    <div id='test' class="container"> 
        <slot></slot>
    </div>
</template>

<script>
export default({
    name: 'AppContainer'
})
</script>

<style scoped>
.container{
    text-align: center;
    color: white;
    background-color: rgb(70, 70, 70);
    margin-top: 60px;
    height: 800px;
    margin: 0 auto;
    color: white;
    min-width: 960px;
    min-height: 800px;
}

</style>
