import { createApp } from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import store from './store'
import AppContainer from './components/AppContainer.vue'
import IntroComponent from './components/IntroComponent.vue'
import QuestionsForm from './components/QuestionsForm.vue'
import provesV from './components/provesV.vue'
import GameComponent from './components/GameComponent.vue';
const app = createApp(App)
            .component('AppContainer', AppContainer)
            .component('IntroComponent', IntroComponent)
            .component('QuestionsForm', QuestionsForm)
            .component('GameComponent',GameComponent)
            .component('provesV', provesV)
            .use(store)
            .use(Vuex)

app.mount('#app')
