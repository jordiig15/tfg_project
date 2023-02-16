<template>
    <form ref="from">
        <div v-show="showOptions1">
        <label v-for="(option, index) in options1" :key="index">
                <input type="radio" id="p1" :value="option.value" v-model="selectedOption">
                <img :src="option.imageUrl" :alt="option.label">
            </label>
            <div class="bright">
                <button class="button" @click="nextQuestion('p1', 'p2')"><span>NEXT</span></button>
            </div>
        </div>

        <div v-show="showOptions2">
            <label v-for="(option, index) in options2" :key="index">
                <input type="radio" id="p2" :value="option.value" v-model="selectedOption">
                <img :src="option.imageUrl" :alt="option.label">
            </label>
            <div class="bright">
                <button class="button" @click="nextQuestion()"><span>NEXT</span></button>
            </div>
        </div>
    </form>
</template>

<script>


export default({
    name: 'QuestionsForm',
    data(){
        return{
            showOptions1:true,
            showOptions2:false,
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
                imageUrl: 'https://i.ibb.co/Sy34mFZ/image-37.png',
                label: 'o1'
                },
                {
                value: 'option22',
                imageUrl: 'https://i.ibb.co/rMrN8jR/image-38.png',
                label: 'o2'
                },
                {
                value: 'option23',
                imageUrl: 'https://i.ibb.co/Mp3mq9r/image-39.png',
                label: 'o3'
                }
            ]
        }
    },
    methods:{
        nextQuestion: function(id, idNext){
            document.getElementById(id)
            console.log(idNext)
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