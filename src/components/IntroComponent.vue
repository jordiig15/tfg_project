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
    <div v-show="showOptions1">
        <QuestionsForm/>
    </div>
    
    
</template>

<script>
import QuestionsForm from './QuestionsForm.vue'

export default {
    name: 'IntroComponent',
    components: {
        QuestionsForm,
    },
       
    data() {
        return {
        message: "",
        visible: true,
        showButton: true,
        showOptions1: false,
        }
    },
    methods: {
        startQuestions() {
            this.message = this.$store.getters.getPreguntas(this.preguntaCounter++)
            this.visible = !this.visible //todo este componente sevuelve invisible
            this.showButton = false
            this.showOptions1 = true
        },
    }
}
</script>

<style scoped>
    
</style>