import { createApp } from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import store from './store'
import AppContainer from './components/AppContainer.vue'
import IntroComponent from './components/IntroComponent.vue'
import QuestionsForm from './components/QuestionsForm.vue'
import provesV from './components/provesV.vue'
import GameComponent1 from './components/GameComponent1.vue';
import GameComponent2 from './components/GameComponent2.vue';
import MemoryComponent from './components/MemoryComponent.vue';
const app = createApp(App)
            .component('AppContainer', AppContainer)
            .component('IntroComponent', IntroComponent)
            .component('QuestionsForm', QuestionsForm)
            .component('GameComponent1',GameComponent1)
            .component('GameComponent2',GameComponent2)
            .component('MemoryComponent',MemoryComponent)
            .component('provesV', provesV)
            .use(store)
            .use(Vuex)

app.mount('#app')
