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
    <div v-if="showButton"> 
        <br><br/>
        <img src=https://i.ibb.co/g66dS7N/2023-03-14-10h15-39.png>
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
        showLogo: true,
        }
    },
    methods: {
        startQuestions() {
            this.message = this.$store.getters.getPreguntas(this.preguntaCounter++)
            this.visible = !this.visible //todo este componente sevuelve invisible
            this.showButton = false
            this.showLogo = false
            this.$store.commit("setShowQuestions",true)
        },
    }
}
</script>

<style scoped>
    
</style>