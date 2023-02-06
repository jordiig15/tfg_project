<template>
    <div class="content"> 
        <h2 v-if!="visible">{{this.$store.getters.getPreguntas(1)}}</h2>
    </div>
</template>

<script>
export default({
    name: 'QuestionComponent',
    data: () => ({
        visible: false
    }),
    methods: {
    },
    mounted() {
  }
})
</script>

<style scoped>

</style>
