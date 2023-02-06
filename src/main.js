import { createApp } from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import store from './store'
import QuestionComponent from './components/QuestionComponent.vue'
import IntroComponent from './components/IntroComponent.vue'


const app = createApp(App)
            .component('QuestionComponent', QuestionComponent)
            .component('IntroComponent', IntroComponent)
            .use(store)
            .use(Vuex)

app.mount('#app')
