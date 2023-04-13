<template>
    <div class="content intro" style="text-align: center;"> 
        <br/>
        <h1 v-if="visible">
            <br> 
            Bienvenido a ADMODELS !
        </h1>
    </div>
    <div class="bright" style="text-align: center;">
        <button v-if="showButton" class="button buttonStart" @click="startQuestions"><span>EMPEZAR JUGEO</span></button>
    </div>  
    <div v-if="showButton" > 
        <br>
        <img src=https://i.ibb.co/g66dS7N/2023-03-14-10h15-39.png>
    </div>
    
</template>

<script>

export default {
    name: 'IntroComponent',
       
    data() {
        return {
        visible: true,
        showButton: true,
        showLogo: true,
        }
    },
    methods: {
        startQuestions() {
            this.visible = !this.visible //todo este componente sevuelve invisible
            this.showButton = false
            this.showLogo = false
            this.$store.commit("setShowQuestions",true)
            this.$store.commit("setVisible",true)
        },
    }
}
</script>

<style scoped>
    
</style>