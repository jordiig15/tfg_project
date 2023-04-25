<template>
    <div class="content" style="text-align: center;"> 
        <br/>
        <h1 v-if="visible">
            <br> 
            Bienvenido a ADMODELS !
        </h1>
    </div>
    <div v-if="visible">
        <input type="text" class="input-box" v-model="inputValue" placeholder="APODO"> 
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
import Swal from 'sweetalert2';
export default {
    name: 'IntroComponent',
       
    data() {
        return {
        inputValue: '', // Valor de la caja de entrada de texto
        visible: true,
        showButton: true,
        showLogo: true,
        }
    },
    methods: {
        startQuestions() {
            if (!this.inputValue) {
                Swal.fire({
                        icon: 'error',
                        title: 'Ingrese un APODO',
                    })
                return
            }
            this.$store.commit("setUsername", this.inputValue);
            console.log(this.$store.getters.getUsername);
            this.visible = !this.visible //todo este componente sevuelve invisible
            this.showButton = false
            this.showLogo = false
            this.$store.commit("setShowQuestions",true)
        },
    }
}
</script>

<style scoped>
.input-box {
  border: none;
  border-bottom: 2px solid #ccc;
  font-size: 18px;
  padding: 10px;
  width: 300px;
  background-color: #f2f2f2;
  margin-bottom: 20px;
}

.input-box:focus {
  outline: none;
  border-bottom: 2px solid #007bff;
}

</style>