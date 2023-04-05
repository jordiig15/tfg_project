<template>
  <div>
    <div class="timer">Tiempo: {{ timer }}</div>
    <div class="cards">
      <div v-for="(card, index) in cards" :key="index" class="card" @click="flipCard(index)">
        <img :src="card.show ? card.image : 'https://i.ibb.co/x1wPn1s/cartoon-pineapple-icon.webp'" :alt="card.name">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: 0,
      intervalId: null,
      cards: [
        { name: 'Image4', image: 'https://i.ibb.co/z7m6PHL/avocado-fruit-illustration-cartoon.webp', show: false },
        { name: 'Image1', image: 'https://i.ibb.co/qmmv8nM/strawberry-fruit-illustration-cartoon-png.png', show: false },
        { name: 'Image1', image: 'https://i.ibb.co/qmmv8nM/strawberry-fruit-illustration-cartoon-png.png', show: false },
        { name: 'Image2', image: 'https://i.ibb.co/KbPf3Sd/carrots-vegetables-bright-color-file.webp', show: false },     
        { name: 'Image3', image: 'https://i.ibb.co/g6kBhny/watermelon-split-cartoon.webp', show: false },
        { name: 'Image2', image: 'https://i.ibb.co/KbPf3Sd/carrots-vegetables-bright-color-file.webp', show: false },
        { name: 'Image3', image: 'https://i.ibb.co/g6kBhny/watermelon-split-cartoon.webp', show: false },
        { name: 'Image4', image: 'https://i.ibb.co/z7m6PHL/avocado-fruit-illustration-cartoon.webp', show: false },
      ],
      flippedCards: [],
      timer: 0 
      
    };
  },
  mounted() {
    this.startTimer();
  },

  methods: {
    
    startTimer() {
      this.intervalId = setInterval(() => {
        this.timer += 1;
      }, 1000);
    },

    stopTimer() {
      clearInterval(this.intervalId);
    },
    flipCard(index) {
      if (!this.cards[index].show && this.flippedCards.length < 2) {
        this.cards[index].show = true;
        this.flippedCards.push(index);
        if (this.flippedCards.length === 2) {
          const firstCard = this.cards[this.flippedCards[0]];
          const secondCard = this.cards[this.flippedCards[1]];
          if (firstCard.name === secondCard.name) {
            this.flippedCards = [];
            if (this.cards.every(card => card.show)) {
              this.stopTimer()
              this.$store.commit('setTime', this.timer);
              this.$store.commit('setPuntuation', this.$store.getters.getTime);
              this.$store.commit('setMemory', false);
            }
          } else {
            setTimeout(() => {
              firstCard.show = false;
              secondCard.show = false;
              this.flippedCards = [];
            }, 1000);
          }
        }
      }
    }
  },
};
</script>

<style scoped>
.cards {
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.card {
  width: 180px;
  height: 220px;
  margin: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.timer{
  font-size: 48px;
}
</style>
