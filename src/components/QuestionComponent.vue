<template>
    <div> 
        <h2>{{this.$store.getters.getPreguntas(1)}}</h2>
    </div>
</template>

<script>
export default({
    name: 'QuestionComponent',
    data() {
    },
    methods: {
    },
    mounted() {
  }
})
</script>

<style scoped>

</style>
