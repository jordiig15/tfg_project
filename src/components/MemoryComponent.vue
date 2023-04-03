<template>
  <div>
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
      flippedCards: []
    };
  },
  methods: {
    flipCard(index) {
      if (!this.cards[index].show && this.flippedCards.length < 2) {
        this.cards[index].show = true;
        this.flippedCards.push(index);
        if (this.flippedCards.length === 2) {
          const firstCard = this.cards[this.flippedCards[0]];
          const secondCard = this.cards[this.flippedCards[1]];
          if (firstCard.name === secondCard.name) {
            this.flippedCards = [];
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
  }
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
</style>
