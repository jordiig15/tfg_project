<template>
    <div class="content"> 
        <br/>
        <h2 v-if!="visible">{{this.$store.getters.getIntro(1)}}</h2>
        <h2 v-if!="visible">{{this.$store.getters.getIntro(2)}}</h2>
    </div>
    <div class="bStart">
        <button class="button buttonStart"><span>Ver anuncios pendientes</span></button>
    </div>

    
</template>

<script>
export default({
    name: 'IntroComponent',
    data: () => ({
        visible: true
    }),
    
    methods: {
    },
    mounted() {
  }
})
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

</style>