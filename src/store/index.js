import { createStore } from 'vuex'

export default createStore({
  state: {
    intro:[
    "Hola, a partir de ahora vas a formar parte de nuestra empresa de publicidad, nuestra epresa trata de contratar a influencers / modelos para hacer diferentes tipos de promociones.",
    "Necesitamos tu ayuda!"
    ],
     
    preguntas:[
    "1- Nos hablo una marca de comida rapida para vender su ultimo menu de hamburguesas, i necesitamos que escojas el modelo perfecto para que salga en el anuncio:",
    "Podemos utilizar el mismo modelo para promocionar su ultimo menu de ensalada o mejor escojemos a otro?",
    "tienes que recojer todos los menus rapido !",
    "2- Tambien nos ha contactado una cantante de pop muy famosa y quiere a chicos para protagonizar su videoclip, cual de ellos debemos mandar?",
    "Porque crees que este modelo es el mejor para esta promocion",
    "3- Esta empresa de comida healthy necesita una chica para presentar sus nuevos productos para adelgazar cual nos recomiendas?",
    "esta tienda de ropa cara necesita modelos para tomarse fotos con su nueva ropa de temporada, que chicas deberiamos enviar. ESCOGE 2!",
    "tienes que recojer su ropa deprisa!"
    ]
  },

  getters: {
    getPreguntas: (state) => (id) => {
        return state.preguntas[id-1];
    },
    getIntro:(state) => (id) => {
      return state.intro[id-1];
    }
  },

  mutations: {
    setPreguntas(state, id, pregunta){
        state.preguntas[id] = pregunta;
    },
    setIntro(state, id, intro){
      state.intro[id] = intro;
  }
  },

  actions: {},

  modules: {}
})
