import { createStore } from 'vuex'

export default createStore({
  state: {
    showQuestions:false,
    endQuestions:false,
    game1: false,
    game2: false,

    intro:[
      "Hola, a partir de ahora vas a formar parte de nuestra empresa de publicidad llamada AdModels, nuestra epresa trata de contratar a influencers / modelos para hacer diferentes tipos de promociones.",
      "Necesitamos tu ayuda!"
    ],
     
    preguntas:[
      "1- Nos hablo una marca de comida rapida para vender su ultimo menu de hamburguesas, i necesitamos que escojas el modelo perfecto para que salga en el anuncio:",
      "2- Tambien nos ha contactado una cantante de pop muy famosa y quiere a chicos para protagonizar su videoclip, cual de ellos debemos mandar?",
      "3- Esta empresa de comida healthy necesita una chica para presentar sus nuevos productos para adelgazar cual nos recomiendas?",
      "4- Esta tienda de ropa cara necesita modelos para tomarse fotos con su nueva ropa de temporada, que chicas deberiamos enviar?",
    ],

    entretexto:[
      "Podemos utilizar el mismo modelo para promocionar su ultimo menu de ensalada o mejor escojemos a otro?",
      "tienes que recojer todos los menus rapido !",
      "Porque crees que este modelo es el mejor para esta promocion",
      "tienes que recojer su ropa deprisa!"
    ],
    grlimg:[
      "https://i.ibb.co/Sy34mFZ/image-37.png",
      "https://i.ibb.co/rMrN8jR/image-38.png",
      "https://i.ibb.co/Mp3mq9r/image-39.png",
      "https://i.ibb.co/f2nDpW9/image-41.png",
      "https://i.ibb.co/Mpx2nKk/image-40.png",
      "https://i.ibb.co/8dC14Z0/image-42.png",
    ],
    selectedOptions:[],
    scores: [],

    puntuation : 0,
  },

  getters: {
    getPreguntas: (state) => (id) => {
        return state.preguntas[id-1];
    },
    getGrlimg: (state) => (id) => {
      return state.grlimg[id-1];
    },
    getEntretexto: (state) => (id) => {
      return state.entretexto[id-1];
    },
    getIntro:(state) => (id) => {
      return state.intro[id-1];
    },
    getSelectedOptions:(state) => {
      return state.selectedOptions;
    },
    getShowQuestions:(state) =>{
      return state.showQuestions;
    },
    getEndQuestions:(state) =>{
      return state.endQuestions;
    },
    getScores:(state) => {
      return state.scores;
    },
    getScore:(state)=> {
      return state.scores[state.scores.length -1];
    },
    getGame1:(state) =>{
      return state.game1;
    },
    getGame2:(state) =>{
      return state.game2;
    },
    getPuntuation:(state) =>{
      return state.puntuation;
    },
  },

  mutations: {
    setEntretexto(state, id, entretexto){
        state.entretexto[id] = entretexto;
    },
    setGrlimg(state, id, grlimg){
      state.grlimg[id] = grlimg;
    },
    setPreguntas(state, id, pregunta){
      state.preguntas[id] = pregunta;
    },
    setIntro(state, id, intro){
      state.intro[id] = intro;
    },
    setSelectedOptions(state, answer){
      state.selectedOptions.push(answer);
    },
    setShowQuestions(state,newState){
      state.showQuestions = newState;
    },
    setEndQuestions(state,newState){
      state.endQuestions = newState;
    },
    setScores(state, score){
      state.scores.push(score);
    },
    setGame1(state,newState){
      state.game1 = newState;
    },
    setGame2(state,newState){
      state.game2 = newState;
    },
    setPuntuation:(state,newState) =>{
      state.puntuation += newState;
    },
  },

  actions: {},

  modules: {}
})
