<template>
  <AppContainer class="center">
    <IntroComponent/>
    <div v-if="this.$store.getters.getShowQuestions == true">
        <QuestionsForm/>
    </div>
  </AppContainer>
</template>

<script>
import AppContainer from './components/AppContainer.vue'
import IntroComponent from './components/IntroComponent.vue'
import QuestionsForm from './components/QuestionsForm.vue'
//import provesV from './components/provesV.vue'

export default {
  name: 'App',
  components: {
    AppContainer,
    IntroComponent,
    QuestionsForm,
    //provesV
  },
};

</script>

<style>
.center{
  width: 50%;
  margin: 0 auto;
}
.content{
  text-align: justify;
  margin: 20px;
}
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
    
    .bright{
        text-align: right;
        margin: 20px;
    }

    .btn-group:after {
        content: "";
        clear: both;
        display: table;
    }
    
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
