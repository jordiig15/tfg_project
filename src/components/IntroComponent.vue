<template>
    <div class="content"> 
        <br/>
        <h2 v-if="visible">
            {{this.$store.getters.getIntro(1)}}
            <br><br/>
            {{this.$store.getters.getIntro(2)}}
        </h2>
    </div>
    <div class="bright">
        <button v-if="showButton" class="button buttonStart" @click="startQuestions"><span>Ver anuncios pendientes</span></button>
    </div>    
    
</template>

<script>

export default {
    name: 'IntroComponent',
       
    data() {
        return {
        message: "",
        visible: true,
        showButton: true,
        }
    },
    methods: {
        startQuestions() {
            this.message = this.$store.getters.getPreguntas(this.preguntaCounter++)
            this.visible = !this.visible //todo este componente sevuelve invisible
            this.showButton = false
            this.$store.commit("setShowQuestions",true)
        },
    }
}
</script>

<style scoped>
    
</style>