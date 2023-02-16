<template>
    <div class="container"> 
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
    margin: 0 auto;
    color: white;
    background-color: rgb(70, 70, 70);
    margin-top: 60px;
    height: 800px;
    margin: 0 auto;
    color: white;
    margin-top: 60px;
}

</style>
