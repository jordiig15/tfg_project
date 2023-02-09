<template>
    <div class="content"> 
        <br/>
        <h2>{{message}}</h2>
        <h2 v-if="visible">{{this.$store.getters.getIntro(1)}}</h2>
        <h2 v-if="visible">{{this.$store.getters.getIntro(2)}}</h2>
    </div>
    <div class="bStart">
        <button v-if="showButton" class="button buttonStart" @click="changeMessage"><span>Ver anuncios pendientes</span></button>
    </div>
    <p id="demo"></p>
    <div class="btn-group" >
        <button v-if="showOptions" @click="optionSelected1"><img src="https://i.ibb.co/Sy34mFZ/image-37.png"></button>
        <button v-if="showOptions" @click="optionSelected2"><img src="https://i.ibb.co/rMrN8jR/image-38.png"></button>
        <button v-if="showOptions" @click="optionSelected3"><img src="https://i.ibb.co/Mp3mq9r/image-39.png"></button>
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
        showOptions: false,
        preguntaCounter:1,
        imgGrlCounter:1 //contador de 3 en 3 para grl img
        }
    },
    methods: {
        changeMessage() {
            this.message = this.$store.getters.getPreguntas(this.preguntaCounter)
            this.visible = !this.visible //todo este componente sevuelve visible
            this.showButton = false
            this.showOptions = true
        },
        optionSelected1(){
            //this.$store.mutations.setSelectedOptions("1")
            this.message = this.$store.getters.getPreguntas(this.preguntaCounter++)

        },
        optionSelected2(){
            //this.$store.mutations.setSelectedOptions("2")
            this.message = this.$store.getters.getPreguntas(this.preguntaCounter++)
        },
        optionSelected3(){
            //this.$store.mutations.setSelectedOptions("3")
            this.message = this.$store.getters.getPreguntas(this.preguntaCounter++)
            //this.message = this.$store.getters.getSelectedOptions()
        },
    }
}
</script>

<style scoped>
    .button {
        background-color:rgb(255, 0, 0);
        border: none;
        color: white;
        padding: 16px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 24px;
        margin: 4px 2px;
        transition-duration: 0.4s;
        cursor: pointer;
        border-radius: 12px;
    }

    
    .button span {
        cursor: pointer;
        display: inline-block;
        position: relative;
        transition: 0.5s;
    }

    .button span:after {
        content: '\00bb';
        position: absolute;
        opacity: 0;
        top: 0;
        right: -20px;
        transition: 0.5s;
    }

    .button:hover span {
        padding-right: 25px;
    }

    .button:hover span:after {
        opacity: 1;
        right: 0;
    }
    .buttonStart{
        
    }
    
    .bStart{
        text-align: right;
        margin: 20px;
    }

    .btn-group:after {
        content: "";
        clear: both;
        display: table;
    }

    /* Add a background color on hover */
    .btn-group button:hover {
        background-color: #3e8e41;
    }

</style>