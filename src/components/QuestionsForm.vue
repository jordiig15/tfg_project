<template>
    <div id="opt0">
        <h2 class="content">Bienvenido!</h2>
        
        <h2 class="content">{{this.$store.getters.getIntro(1)}}</h2>
        <h2 class="content">{{this.$store.getters.getIntro(2)}}</h2>
        <br>
        <h2 class="content">{{this.$store.getters.getIntro(3)}}</h2>

            <div class="bright">
                <button class="button" @click="nextQuestion('opt0', 'opt1')"><span>Ver anuncios pendientes</span></button>
            </div> 
    </div> 

    <div id="opt1" style="display:none">
        <h1 class="content">Anuncio 1:</h1>
        <h2 class="content">{{this.$store.getters.getPreguntas(1)}}</h2>
        <h2 class="content">{{this.$store.getters.getPreguntas(2)}}</h2>
        <label v-for="(option, index) in options1" :key="index">
            <input type="radio" id="p1" name="p1" :value="option.value" v-model="selectedOption">
            <img :src="option.imageUrl" :alt="option.label">
        </label>
        <div class="bright">
            <button class="button" @click="nextQuestion('opt1', 'opt2', this.selectedOption)"><span>NEXT</span></button>
        </div>
    </div>

    <div id="opt2" style="display:none">
        <h2 class="content">{{this.$store.getters.getEntretexto(1)}}</h2>
        <h2 class="content">{{this.$store.getters.getEntretexto(2)}}</h2>
        <label v-for="(option, index) in options2" :key="index">
            <input type="radio" id="p2" name="p2" :value="option.value" v-model="selectedOption">
            <img :src="option.imageUrl" :alt="option.label">
        </label>
        <div class="bright">
            <button class="button" @click="nextQuestion('opt2', 'text1', this.selectedOption)"><span>NEXT</span></button>
        </div>
    </div>

    <div id="text1" style="display:none">
        <h2 class="content">{{this.$store.getters.getEntretexto(3)}}</h2>
        <br>
        <h2 class="content">{{this.$store.getters.getEntretexto(4)}}</h2>
        <div class="bright">
            <button class="button" @click="nextQuestion('text1', 'game1')"><span>NEXT</span></button>
        </div>
    </div>

    <div id="game1" style="display:none">
        <h1 class="big">{{this.$store.getters.getScore}} puntos!</h1>
        <div class="bright">
            <button class="button" @click="nextQuestion('game1', 'scores1')"><span>NEXT</span></button>
        </div>
    </div>

    <div id="scores1" style="display:none">
        <h1 class="content">¡GENIAL! Has conseguido una puntución de  {{this.$store.getters.getScore}}.</h1>
        <br>
        <h2 v-if="equalOp" class="content">El modelo que has escogido nos ayudará mucho a vender este tipo de productos. ¡Felicidades! Has ganado un total de {{this.$store.getters.getPuntuation1}}$.</h2>
        <h2 v-if="diferentOp" class="content">Vaya... Has elegido a 2 modelos diferentes para las promociones, esto nos sale más caro ya que tenemos que contratar a los 2 modelos.</h2>
        <h2 v-if="diferentOp" class="content">Has ganado un total de {{this.$store.getters.getPuntuation1}}$.</h2>
        <h2 class="content">Has acumulado un total de {{this.$store.getters.getPuntuationTotal}}$.</h2>
        <div class="bright">
            <button class="button" @click="nextQuestion('scores1', 'opt3')"><span>NEXT</span></button>
        </div>
    </div>

    <div id="opt3" style="display:none">
        <h1 class="content">Anuncio 2:</h1>
        <h2 class="content">{{this.$store.getters.getPreguntas(3)}}</h2>
        <label v-for="(option, index) in options3" :key="index">
            <input type="radio" id="p3" name="p3" :value="option.value" v-model="selectedOption">
            <img :src="option.imageUrl" :alt="option.label">
        </label>
        <div class="bright">
            <button class="button" @click="nextQuestion('opt3', 'opt3.1', this.selectedOption)"><span>NEXT</span></button>
        </div>
    </div>

    <div id="opt3.1" style="display:none">
        <h2 class="content">{{this.$store.getters.getEntretexto(5)}}</h2>
        <h2 class="content">{{this.$store.getters.getEntretexto(6)}}</h2>
        <h2 class="content">Has acumulado un total de {{this.$store.getters.getPuntuationTotal}}$.</h2>
        <img src="https://i.ibb.co/y8NPZHT/videoclip.jpg">
        <div class="bright">
            <button class="button" @click="nextQuestion('opt3.1', 'opt4')"><span>NEXT</span></button>
        </div>
    </div>

    <div id="opt4" style="display:none">
        <h1 class="content">Anuncio 3:</h1>
        <h2 class="content">{{this.$store.getters.getPreguntas(4)}}</h2>
        <label v-for="(option, index) in options4" :key="index">
            <input type="radio" id="p4" name="p4" :value="option.value" v-model="selectedOption">
            <img :src="option.imageUrl" :alt="option.label">
        </label>
        <div class="bright">
            <button class="button" @click="nextQuestion('opt4', 'opt4.1', this.selectedOption)"><span>NEXT</span></button>
        </div>
    </div>

    <div id="opt4.1" style="display:none">
        <h2 class="content">{{this.$store.getters.getEntretexto(7)}}</h2>
        <h2 class="content">{{this.$store.getters.getEntretexto(8)}}</h2>
        <div class="bright">
            <button class="button" @click="nextQuestion('opt4.1', 'game3')"><span>NEXT</span></button>
        </div>
    </div>

    <div id="game3" style="display:none">
        <h1  v-if="memoryEnd" class="content">¡GENIAL! Has tardado un tiempo total de {{this.$store.getters.getTime}} segundos.</h1>
        <div v-if="memoryEnd" class="bright">
            <button class="button" @click="nextQuestion('game3', 'scores3')"><span>NEXT</span></button>
        </div>
    </div>

    <div id="scores3" style="display:none">
        <h2 class="content">¡Felicidades! Con tu ayuda hemos ganado {{this.$store.getters.getPuntuation3}}$.</h2>
        <h2 class="content">Has acumulado un total de {{this.$store.getters.getPuntuationTotal}}$.</h2>
        <div class="bright">
            <button class="button" @click="nextQuestion('scores3', 'opt5')"><span>NEXT</span></button>
        </div>
    </div>

    <div id="opt5" style="display:none">
        <h1 class="content">Anuncio 4:</h1>
        <h2 class="content">{{this.$store.getters.getPreguntas(5)}}</h2>
        <label v-for="(option, index) in options5" :key="index">
            <input type="radio" id="p5" name="p5" :value="option.value" v-model="selectedOption">
            <img :src="option.imageUrl" :alt="option.label">
        </label>
        <div class="bright">
            <button class="button" @click="nextQuestion('opt5', 'text2', this.selectedOption)"><span>NEXT</span></button>
        </div>
    </div>

    <div id="text2" style="display:none">
        <h2 class="content">{{this.$store.getters.getEntretexto(9)}}</h2>
        <br>
        <h2 class="content">{{this.$store.getters.getEntretexto(10)}}</h2>
        <br>
        <h1 class="content">{{this.$store.getters.getEntretexto(11)}}</h1>
        <div class="bright">
            <button class="button" @click="nextQuestion('text2', 'game2')"><span>NEXT</span></button>
        </div>
    </div>

    <div id="game2" style="display:none">
        <h1 class="big">{{this.$store.getters.getScore}} puntos!</h1>
        <div class="bright">
            <button class="button" @click="nextQuestion('game2', 'scores2')"><span>NEXT</span></button>
        </div>
    </div>

    <div id="scores2" style="display:none">
        <h1 class="content">¡GENIAL! Has conseguido una puntución de  {{this.$store.getters.getScore}}.</h1>
        <br>
        <h2 class="content"> Has ganado un total de {{this.$store.getters.getPuntuation2}}$, con esto tienes un total acumulado de {{this.$store.getters.getPuntuationTotal}}$.</h2>
        <div class="bright">
            <button class="button" @click="nextQuestion('scores2', 'final1')"><span>NEXT</span></button>
        </div>
    </div>

    <div id="final1" style="display:none">
        <h2 class="content">{{this.$store.getters.getEntretexto(14)}}</h2>
        <h2 class="content">{{this.$store.getters.getEntretexto(15)}}</h2>
        <h2 class="content">{{this.$store.getters.getEntretexto(16)}}</h2>
        <h2 class="content">{{this.$store.getters.getEntretexto(17)}}</h2>
        <div class="bright">
            <button class="button" @click="nextQuestion('final1', 'opt6')"><span>NEXT</span></button>
        </div>
    </div>

    <div id="opt6" style="display:none">
        <h1 class="content">{{this.$store.getters.getEntretexto(18)}}</h1>
        <h2 class="content">
            <div class="container">
                <div class="column">
                    <p>En la cara.</p>
                </div>
                <div class="column">
                    <p>En el cuerpo</p>
                </div>
                <div class="column">
                    <p>He pensado en sus posibles aptitudes.</p>
                </div>
            </div>
        </h2>
        <label v-for="(option, index) in options6" :key="index">
            <input type="radio" id="p6" name="p6" :value="option.value" v-model="selectedOption">
            <img :src="option.imageUrl" :alt="option.label" style="width: 28%;">
        </label>
        <div class="bright">
            <button class="button" @click="nextQuestion('opt6', 'opt7', this.selectedOption)"><span>NEXT</span></button>
        </div>
    </div>

    <div id="opt7" style="display:none">
        <h1 class="content">{{this.$store.getters.getEntretexto(19)}}</h1>
        <label v-for="(option, index) in options7" :key="index">
            <input type="radio" id="p7" name="p7" :value="option.value" v-model="selectedOption">
            <img :src="option.imageUrl" :alt="option.label">
        </label>
        <div class="bright">
            <button class="button" @click="nextQuestion('opt7', 'opt10', this.selectedOption)"><span>NEXT</span></button>
        </div>
    </div>

    <div id="opt10" style="display:none">
        <h1 class="content">{{this.$store.getters.getEntretexto(24)}}</h1>
        <label v-for="(option, index) in options10" :key="index">
            <input type="radio" id="p10" name="p10" :value="option.value" v-model="selectedOption">
            <img :src="option.imageUrl" :alt="option.label">
        </label>
        <div class="bright">
            <button class="button" @click="nextQuestion('opt10', 'opt11', this.selectedOption)"><span>NEXT</span></button>
        </div>
    </div>

    <div id="opt11" style="display:none">
        <h1 class="content">{{this.$store.getters.getEntretexto(23)}}</h1>
        <label v-for="(option, index) in options11" :key="index">
            <input type="radio" id="p11" name="p11" :value="option.value" v-model="selectedOption">
            <img :src="option.imageUrl" :alt="option.label">
        </label>
        <div class="bright">
            <button class="button" @click="nextQuestion('opt11', 'opt8', this.selectedOption)"><span>NEXT</span></button>
        </div>
    </div>

    <div id="opt8" style="display:none">
        <h1 class="content">{{this.$store.getters.getEntretexto(20)}}</h1>
        <label v-for="(option, index) in options8" :key="index">
            <input type="radio" id="p8" name="p8" :value="option.value" v-model="selectedOption">
            <img :src="option.imageUrl" :alt="option.label">
        </label>
        <div class="bright">
            <button class="button" @click="nextQuestion('opt8', 'opt9', this.selectedOption)"><span>NEXT</span></button>
        </div>
    </div>

    <div id="opt9" style="display:none">
        <h1 class="content c2">{{this.$store.getters.getEntretexto(21)}}</h1>
        <h1 class="content">{{this.$store.getters.getEntretexto(22)}}</h1>
        <label v-for="(option, index) in options9" :key="index">
            <input type="radio" id="p9" name="p9" :value="option.value" v-model="selectedOption">
            <img :src="option.imageUrl" :alt="option.label">
        </label>
        <div class="bright">
            <button class="button" @click="nextQuestion('opt9', 'opt12', this.selectedOption)"><span>NEXT</span></button>
        </div>
    </div>

    <div id="opt12" style="display:none">
        <h1 class="content">{{this.$store.getters.getEntretexto(25)}}</h1>
        <label v-for="(option, index) in options12" :key="index">
            <input type="radio" id="p12" name="p12" :value="option.value" v-model="selectedOption">
            <img :src="option.imageUrl" :alt="option.label">
        </label>
        <div class="bright">
            <button class="button" @click="nextQuestion('opt12', 'opt13', this.selectedOption)"><span>NEXT</span></button>
        </div>
    </div>

    <div id="opt13" style="display:none">
        <h1 class="content">{{this.$store.getters.getEntretexto(27)}}</h1>
        <label v-for="(option, index) in options13" :key="index">
            <input type="radio" id="p13" name="p13" :value="option.value" v-model="selectedOption">
            <img :src="option.imageUrl" :alt="option.label" style="width: 40%;">
        </label>
        <div class="bright">
            <button class="button" @click="nextQuestion('opt13', 'opt14', this.selectedOption)"><span>NEXT</span></button>
        </div>
    </div>

    <div id="opt14" style="display:none">
        <h1 class="content">{{this.$store.getters.getEntretexto(28)}}</h1>
        <label v-for="(option, index) in options14" :key="index">
            <input type="radio" id="p14" name="p14" :value="option.value" v-model="selectedOption">
            <img :src="option.imageUrl" :alt="option.label">
        </label>
        <div class="bright">
            <button class="button" @click="nextQuestion('opt14', 'opt15', this.selectedOption)"><span>NEXT</span></button>
        </div>
    </div>

    <div id="opt15" style="display:none">
        <h1 class="content">{{this.$store.getters.getEntretexto(26)}}</h1>
        <label v-for="(option, index) in options15" :key="index">
            <input type="radio" id="p15" name="p15" :value="option.value" v-model="selectedOption">
            <img :src="option.imageUrl" :alt="option.label">
        </label>
        <div class="bright">
            <button class="button" @click="nextQuestion('opt15', 'final2', this.selectedOption)"><span>NEXT</span></button>
        </div>
    </div>

    <div id="final2" style="display:none">
        <br>
        <h1 class="content c2" style="text-align: center !important;">GRACIAS POR LA PARTICIPACIÓN.</h1>
        <div class="bright">
            <button class="button" @click="nextQuestion('final2', 'end')"><span>VER RESULTADOS</span></button>
        </div>
    </div>

    <div id="end" style="display:none">
        <h1 class="content c2">{{this.$store.getters.getEntretexto(12)}}</h1>
        <br>
        <h1 class="content c2">{{this.$store.getters.getEntretexto(13)}}</h1>
        <br>
        <h1 class="content">PUNTUACIÓN FINAL = {{this.$store.getters.getPuntuationTotal}}$.</h1>
    </div>

</template>

<script>
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

export default({
    name: 'QuestionsForm',
    data(){
        return{
            equalOp: false,
            diferentOp: false,
            selectedOption: '',
            globalId: '',
            options1: [
                {
                value: 'option11',
                imageUrl: 'https://i.ibb.co/72JB02Y/2023-02-28-11h09-57.png',
                label: 'o1'
                },
                {
                value: 'option12',
                imageUrl: 'https://i.ibb.co/Tv8Pkrc/2023-02-28-11h10-32.png',
                label: 'o2'
                },
                {
                value: 'option13',
                imageUrl: 'https://i.ibb.co/wcHpcbv/2023-05-01-19h41-53-1.png',
                label: 'o3'
                }
            ],
            options2: [
                {
                value: 'option21',
                imageUrl: 'https://i.ibb.co/72JB02Y/2023-02-28-11h09-57.png',
                label: 'o1'
                },
                {
                value: 'option22',
                imageUrl: 'https://i.ibb.co/Tv8Pkrc/2023-02-28-11h10-32.png',
                label: 'o2'
                },
                {
                value: 'option23',
                imageUrl: 'https://i.ibb.co/wcHpcbv/2023-05-01-19h41-53-1.png',
                label: 'o3'
                }
            ],
            options3: [
                {
                value: 'option31',
                imageUrl: 'https://i.ibb.co/QrHT7HC/2023-04-25-12h16-22.png',
                label: 'o1'
                },
                {
                value: 'option32',
                imageUrl: 'https://i.ibb.co/g7jbS6m/2023-04-25-12h15-30.png',
                label: 'o2'
                },
                {
                value: 'option33',
                imageUrl: 'https://i.ibb.co/J7Fd9yv/2023-04-25-12h15-44.png',
                label: 'o3'
                }
            ],
            options4: [
                {
                value: 'option41',
                imageUrl: 'https://i.ibb.co/f2nDpW9/image-41.png',
                label: 'o1'
                },
                {
                value: 'option42',
                imageUrl: 'https://i.ibb.co/Mpx2nKk/image-40.png',
                label: 'o2'
                },
                {
                value: 'option43',
                imageUrl: 'https://i.ibb.co/8dC14Z0/image-42.png',
                label: 'o3'
                }
            ],
            options5: [
                {
                value: 'option51',
                imageUrl: 'https://i.ibb.co/Mp3mq9r/image-39.png',
                label: 'o1'
                },
                {
                value: 'option52',
                imageUrl: 'https://i.ibb.co/rMrN8jR/image-38.png',
                label: 'o2'
                },
                {
                value: 'option53',
                imageUrl: 'https://i.ibb.co/Sy34mFZ/image-37.png',
                label: 'o3'
                }
            ],
            options6: [
                {
                value: 'option61',
                imageUrl: 'https://i.ibb.co/B4D2XKr/2023-05-15-14h04-59.png',
                label: 'o1',
                title:'En la cara.'
                },
                {
                value: 'option62',
                imageUrl: 'https://i.ibb.co/4KFp1vv/2023-05-15-14h04-16.png',
                label: 'o2',
                title:'En el cuerpo.'
                },
                {
                value: 'option63',
                imageUrl: 'https://i.ibb.co/m0JjdLm/2023-05-15-15h22-22.png',
                label: 'o3',
                title:'He pensado en sus posibles aptitudes.'
                }
            ],
            options7: [
                {
                value: 'option7Si',
                imageUrl: 'https://i.ibb.co/55D8b41/2023-05-15-13h50-15.png',
                label: 'oY'
                },
                {
                value: 'option7No',
                imageUrl: 'https://i.ibb.co/swZBwmL/2023-05-15-13h51-12.png',
                label: 'oN'
                }
            ],
            options8: [
                {
                value: 'option8Si',
                imageUrl: 'https://i.ibb.co/55D8b41/2023-05-15-13h50-15.png',
                label: 'oY'
                },
                {
                value: 'option8No',
                imageUrl: 'https://i.ibb.co/swZBwmL/2023-05-15-13h51-12.png',
                label: 'oN'
                }
            ],
            options9: [
                {
                value: 'option9Si',
                imageUrl: 'https://i.ibb.co/55D8b41/2023-05-15-13h50-15.png',
                label: 'oY'
                },
                {
                value: 'option9No',
                imageUrl: 'https://i.ibb.co/swZBwmL/2023-05-15-13h51-12.png',
                label: 'oN'
                }
            ],
            options10: [
                {
                value: 'option10Si',
                imageUrl: 'https://i.ibb.co/55D8b41/2023-05-15-13h50-15.png',
                label: 'oY'
                },
                {
                value: 'option10No',
                imageUrl: 'https://i.ibb.co/swZBwmL/2023-05-15-13h51-12.png',
                label: 'oN'
                }
            ],
            options11: [
                {
                value: 'option11Si',
                imageUrl: 'https://i.ibb.co/55D8b41/2023-05-15-13h50-15.png',
                label: 'oY'
                },
                {
                value: 'option11No',
                imageUrl: 'https://i.ibb.co/swZBwmL/2023-05-15-13h51-12.png',
                label: 'oN'
                }
            ],
            options12: [
                {
                value: 'option12Si',
                imageUrl: 'https://i.ibb.co/55D8b41/2023-05-15-13h50-15.png',
                label: 'oY'
                },
                {
                value: 'option12No',
                imageUrl: 'https://i.ibb.co/swZBwmL/2023-05-15-13h51-12.png',
                label: 'oN'
                }
            ],
            options13: [
                {
                value: 'option13-1',
                imageUrl: 'https://i.ibb.co/PrJNbNy/2023-05-23-16h28-23.png',
                label: 'oY'
                },
                {
                value: 'option13_1i2',
                imageUrl: 'https://i.ibb.co/Jn6mwvx/2023-05-23-16h29-27.png',
                label: 'oN'
                },
                {
                value: 'option13_2i4',
                imageUrl: 'https://i.ibb.co/zhrCD3y/2023-05-23-16h29-32.png',
                label: 'oN'
                },
                { 
                value: 'option13_+4',
                imageUrl: 'https://i.ibb.co/mH4yNLX/2023-05-23-16h34-57.png',
                label: 'oN'
                },
            ],
            options14: [
                {
                value: 'option14Si',
                imageUrl: 'https://i.ibb.co/55D8b41/2023-05-15-13h50-15.png',
                label: 'oY'
                },
                {
                value: 'option14No',
                imageUrl: 'https://i.ibb.co/swZBwmL/2023-05-15-13h51-12.png',
                label: 'oN'
                }
            ],
            options15: [
                {
                value: 'option15Si',
                imageUrl: 'https://i.ibb.co/55D8b41/2023-05-15-13h50-15.png',
                label: 'oY'
                },
                {
                value: 'option15No',
                imageUrl: 'https://i.ibb.co/swZBwmL/2023-05-15-13h51-12.png',
                label: 'oN'
                }
            ],
        }
    },
    computed: {
        memoryEnd() {
            return !this.$store.getters.getMemory;
        }
    },
    methods:{
        nextQuestion: function(currentId,nextId,selectedOption){
            if(currentId == 'opt1' || currentId == 'opt2' || currentId == 'opt3' || currentId == 'opt4' || currentId == 'opt5' || currentId == 'opt6' || currentId == 'opt7' || currentId == 'opt8' || currentId == 'opt9'|| currentId == 'opt10'|| currentId == 'opt11'|| currentId == 'opt12'|| currentId == 'opt13'|| currentId == 'opt14'|| currentId == 'opt15'){
                if (selectedOption) {
                    document.getElementById(currentId).style.display = "none";
                    if(nextId != 'end'){
                        document.getElementById(nextId).style.display = "block";
                        this.submitAnswers(selectedOption); 
                        this.selectedOption = null;
                    }if(nextId == 'opt3.1'){
                        this.$store.commit('setPuntuationTotal', 300);
                    }
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Opción no seleccionada!',
                        text: 'Por favor, selecciona una opción antes de continuar.',
                    })
                }
            }else{
                document.getElementById(currentId).style.display = "none";
                if(nextId != 'end'){
                    document.getElementById(nextId).style.display = "block";
                    this.submitAnswers(selectedOption); 
                    this.selectedOption = null;
                }if(nextId == 'game1'){
                    this.$store.commit('setGame1', true);
                }
                if(nextId == 'game2'){
                    this.$store.commit('setGame2', true);
                }if(nextId == 'scores1'){
                    if(this.$store.getters.getSelectedOptions[0].charAt(this.$store.getters.getSelectedOptions[0].length - 1)==this.$store.getters.getSelectedOptions[1].charAt(this.$store.getters.getSelectedOptions[1].length - 1)){
                        this.$store.commit('setPuntuation1', this.$store.getters.getScore * 20);
                        this.equalOp = true;
                    }else{
                        this.$store.commit('setPuntuation1', this.$store.getters.getScore * 15);
                        this.diferentOp = true;
                    }
                    this.$store.commit('setPuntuationTotal', this.$store.getters.getPuntuation1);
                }if(nextId == 'scores2'){////////////////////////////
                    this.$store.commit('setPuntuation2', this.$store.getters.getScore * 25);
                    this.$store.commit('setPuntuationTotal', this.$store.getters.getPuntuation2);  
                }if(nextId == 'game3'){
                    this.$store.commit('setMemory', true);
                }if(nextId == 'scores3'){
                    this.$store.commit('setPuntuation3', 800 - 10*this.$store.getters.getTime);
                    this.$store.commit('setPuntuationTotal', this.$store.getters.getPuntuation3);
                }if(nextId == 'opt4'){
                    this.$store.commit('setPuntuationTotal', 300);
                }if(nextId == 'end'){
                    console.log("END");
                    document.getElementById(nextId).style.display = "block";
                    this.submitAnswers(selectedOption); 
                    this.$store.commit('setEndQuestions', true);
                    this.selectedOption = null;
                    this.sendEmail();
                }
            }
            
               
        },
        submitAnswers: function(selectedOption){
            if (selectedOption){
                this.$store.commit('setSelectedOptions', selectedOption);
            }
            console.log(this.$store.getters.getSelectedOptions)
            
        },

        sendEmail: function(){
            
            
            var templateParams = { ////////////////////////
                id: JSON.stringify("id: " + this.$store.getters.getUsername),
                scores: JSON.stringify("scores: " + this.$store.getters.getScores),
                time: JSON.stringify("time: " + this.$store.getters.getTime),
                puntuationTotal: JSON.stringify("puntuation: "+ this.$store.getters.getPuntuationTotal),
                message: JSON.stringify("selected Options: "+ this.$store.getters.getSelectedOptions),
            };  
            try {
                emailjs.send('service_dyrwooa','template_pr1keyv', templateParams, 'gxG-DQo0IiVfW93Tk')
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    
                }, function(error) {
                    console.log('FAILED...', error);
                });
            } catch(error) {
                console.log({error})
            }
        }
    }
})
</script>

<style scoped>
  
    label {
        cursor: pointer;
        margin-left: 20px;
    }
    input[type="radio"] {
        display: none;

    }
    input[type="radio"] + img {
        border: 4px solid transparent;
    }
    input[type="radio"]:checked + img {
        border-color: red;
    }

    .container {
        display: grid;
        text-align: center !important;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
    }

    .column {
    padding: 10px;
    }

</style>