import { createStore } from 'vuex'

export default createStore({
  state: {
    username: '',
    showQuestions:false,
    endQuestions:false,
    game1: false,
    game2: false,
    memory: false,

    intro:[
      "A partir de ahora vas a formar parte de nuestra empresa de publicidad llamada AdModels.",
      "Nuestro objetivo es contratar a influencers / modelos para hacer diferentes tipos de promociones.",
      "Te necesitamos..."
    ],
     
    preguntas:[
      "Ha contactado con nosotros McBurguer, la conocida empresa de comida rápida. Nos pide ayuda para promocionar su NUEVO menú de hamburguesas.",
      "Necesitamos que escojas el modelo perfecto para el cartel publicitario:",
      "Ha contactado con nosotros Sarah, la famosa cantante de pop,  necesita a un chico para protagonizar su videoclip, ¿a cual de ellos debemos mandar?",
      "Ha contactado con nosotros Vida Sana, un empresa de comida healthy, necesita una chica para presentar sus nuevos productos para adelgazar, ¿cuál deberíamos mandar?",
      "Ha contactado con nosotros la marca de moda Louis Vuitton para promocionar algunos complementos de ropa, necesita una modelo para su nueva promocion, ¿que chica deberíamos mandar?",
    ],

    entretexto:[
      "¿Utilizarías el mismo modelo para promocionar su nuevo menú healthy?",
      "Escoge en este caso el modelo perfecto:",
      "Ahora que ya has escogido el modelo perfecto para promocionar los nuevos menús, necesitamos tu ayuda para promocionar la marca.",
      "¡Para hacerlo haz click sobre el máximo de productos que puedas antes de que se te acabe el tiempo!",
      "¡Genial, el videoclip ha salido perfecto!",
      "Por tu colaboración te pagamos un total de 300$",
      "Muy bien, ya has escogido a la modelo para promocionar los productos para adelgazar. Ahora necesitamos que nos ayudes a promocionar la marca healthy.",
      "Para hacerlo encuentra las parejas lo más rápido posible para poder promocionar la marca:",
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
    getUsername:(state) =>{
      return state.username;
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
    setUsername:(state,newState) =>{
      state.username = newState;
    },
  },

  actions: {},

  modules: {}
})
