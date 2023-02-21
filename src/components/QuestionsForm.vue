<template>
    <div id="opt1">
        <h2 class="content">{{this.$store.getters.getPreguntas(1)}}</h2>
        <label v-for="(option, index) in options1" :key="index">
            <input type="radio" id="p1" name="p1" :value="option.value" v-model="selectedOption">
            <img :src="option.imageUrl" :alt="option.label">
        </label>
        <div class="bright">
            <button class="button" @click="nextQuestion('opt1', 'opt2', this.selectedOption)"><span>NEXT</span></button>
        </div>
    </div>

    <div id="opt2" style="display:none">
        <h2 class="content">{{this.$store.getters.getPreguntas(2)}}</h2>
        <label v-for="(option, index) in options2" :key="index">
            <input type="radio" id="p2" name="p2" :value="option.value" v-model="selectedOption">
            <img :src="option.imageUrl" :alt="option.label">
        </label>
        <div class="bright">
            <button class="button" @click="nextQuestion('opt2', 'opt3', this.selectedOption)"><span>NEXT</span></button>
        </div>
    </div>

    <div id="opt3" style="display:none">
        <h2 class="content">{{this.$store.getters.getPreguntas(3)}}</h2>
        <label v-for="(option, index) in options3" :key="index">
            <input type="radio" id="p3" name="p3" :value="option.value" v-model="selectedOption">
            <img :src="option.imageUrl" :alt="option.label">
        </label>
        <div class="bright">
            <button class="button" @click="nextQuestion('opt3', 'opt4', this.selectedOption)"><span>NEXT</span></button>
        </div>
    </div>

    <div id="opt4" style="display:none">
        <h2 class="content">{{this.$store.getters.getPreguntas(4)}}</h2>
        <label v-for="(option, index) in options4" :key="index">
            <input type="radio" id="p4" name="p4" :value="option.value" v-model="selectedOption">
            <img :src="option.imageUrl" :alt="option.label">
        </label>
        <div class="bright">
            <button class="button" @click="nextQuestion('opt4', 'end', this.selectedOption)"><span>NEXT</span></button>
        </div>
    </div>
</template>

<script>


export default({
    name: 'QuestionsForm',
    data(){
        return{
            selectedOption: '',
            globalId: '',
            options1: [
                {
                value: 'option11',
                imageUrl: 'https://i.ibb.co/Sy34mFZ/image-37.png',
                label: 'o1'
                },
                {
                value: 'option12',
                imageUrl: 'https://i.ibb.co/rMrN8jR/image-38.png',
                label: 'o2'
                },
                {
                value: 'option13',
                imageUrl: 'https://i.ibb.co/Mp3mq9r/image-39.png',
                label: 'o3'
                }
            ],
            options2: [
                {
                value: 'option21',
                imageUrl: 'https://i.ibb.co/f2nDpW9/image-41.png',
                label: 'o1'
                },
                {
                value: 'option22',
                imageUrl: 'https://i.ibb.co/Mpx2nKk/image-40.png',
                label: 'o2'
                },
                {
                value: 'option23',
                imageUrl: 'https://i.ibb.co/8dC14Z0/image-42.png',
                label: 'o3'
                }
            ],
            options3: [
                {
                value: 'option31',
                imageUrl: 'https://i.ibb.co/Sy34mFZ/image-37.png',
                label: 'o1'
                },
                {
                value: 'option32',
                imageUrl: 'https://i.ibb.co/rMrN8jR/image-38.png',
                label: 'o2'
                },
                {
                value: 'option33',
                imageUrl: 'https://i.ibb.co/Mp3mq9r/image-39.png',
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
            ]
        }
    },
    methods:{
        nextQuestion: function(currentId,nextId,selectedOption){
            document.getElementById(currentId).style.display = "none";
            if(nextId != 'end'){
                document.getElementById(nextId).style.display = "block";
                this.submitAnswers(selectedOption); 
            }else{
                this.submitAnswers(selectedOption); 
            }
            

        },
        submitAnswers: function(selectedOption){

            this.$store.commit('setSelectedOptions', selectedOption);
             console.log(this.$store.getters.getSelectedOptions)
        }
    }
})
</script>

<style scoped>
  
    label {
        cursor: pointer;
    }
    input[type="radio"] {
        position: absolute;
    }
    input[type="radio"] + img {
        border: 4px solid transparent;
    }
    input[type="radio"]:checked + img {
        border-color: red;
    }
    .label-text {
        margin-left: 10px;
    }
</style>