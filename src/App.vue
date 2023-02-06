<template>
<IntroComponent/>
<QuestionComponent/>
</template>

<script>
import QuestionComponent from './components/QuestionComponent.vue'
import IntroComponent from './components/IntroComponent.vue'

export default {
  name: 'App',
  components: {
    QuestionComponent,
    IntroComponent,
  },
};

</script>

<style>
.content{
        text-align: justify;
        margin: 20px;

    }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 50%;
  height: 800px;
  margin: 0 auto;
  color: white;
  background-color: rgb(70, 70, 70);
  margin-top: 60px;
}
</style>
