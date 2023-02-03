<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="soc en Jordi"/>
  <HelloWorld msg="soc en Pau"/>
  <QuestionComponent/>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import QuestionComponent from './components/QuestionComponent.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld,
    QuestionComponent 
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
