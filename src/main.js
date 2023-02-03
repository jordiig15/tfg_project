import { createApp } from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import store from './store'
import QuestionComponent from './components/QuestionComponent.vue'


const app = createApp(App)
            .component('QuestionComponent', QuestionComponent)
            .use(store)
            .use(Vuex)

app.mount('#app')
