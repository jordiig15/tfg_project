import { createStore } from 'vuex'

export default createStore({
  state: {
    preguntas:["pregunta 1 vvvpregunta 1pregunta 1pregunta 1pregunta 1pregunta 1pregunta 1pregunta 1vvv?","pregunta 2","pregunta3"]
  },

  getters: {
    getPreguntas: (state) => (id) => {
        return state.preguntas[id-1];
    }
  },

  mutations: {
    setPreguntas(state, id, pregunta){
        state.preguntas[id] = pregunta;
    }
  },

  actions: {},

  modules: {}
})
