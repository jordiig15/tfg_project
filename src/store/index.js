import { createStore } from 'vuex'

export default createStore({
  state: {
    showQuestions:false,
    endQuestions:false,
    game1: false,
    game2: false,
    memory: false,

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
    selectedOptions:[],
    scores: [],
    time: 0,
    puntuationTotal : 0,
    puntuation1: 0,
    puntuation2: 0,
    puntuation3: 0,
  },

  getters: {
    getPreguntas: (state) => (id) => {
        return state.preguntas[id-1];
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
    getMemory:(state) =>{
      return state.memory;
    },
    getPuntuationTotal:(state) =>{
      return state.puntuationTotal;
    },
    getPuntuation1:(state) =>{
      return state.puntuation1;
    },
    getPuntuation2:(state) =>{
      return state.puntuation2;
    },
    getPuntuation3:(state) =>{
      return state.puntuation3;
    },
    getTime:(state) =>{
      return state.time;
    },
  },

  mutations: {
    setEntretexto(state, id, entretexto){
        state.entretexto[id] = entretexto;
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
    setMemory(state,newState){
      state.memory = newState;
    },
    setPuntuationTotal:(state,newState) =>{
      state.puntuationTotal += newState;
    },
    setPuntuation1:(state,newState) =>{
      state.puntuation1 += newState;
    },
    setPuntuation2:(state,newState) =>{
      state.puntuation2 += newState;
    },
    setPuntuation3:(state,newState) =>{
      state.puntuation3 += newState;
    },
    setTime:(state,newState) =>{
      state.time += newState;
    },
  },

  actions: {},

  modules: {}
})
