<template>
  <div>
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
export default {
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const canvas = this.$refs.canvas;
      const ctx = canvas.getContext("2d");

      function setCanvasDimensions() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }

      let score = 0;

      function createFruit() {
        const fruits = ["🍎", "🍌", "🍇", "🍊", "🍉"];
        const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
        const randomX = Math.random() * canvas.width;
        const speed = Math.random() * 2 + 1;

        return { x: randomX, y: 0, speed, fruit: randomFruit };
      }

      let fruits = [];

      function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        fruits.forEach((fruit, index) => {
          fruit.y += fruit.speed;
          ctx.font = "30px Arial";
          ctx.fillText(fruit.fruit, fruit.x, fruit.y);

          if (fruit.y > canvas.height) {
            fruits.splice(index, 1);
            score--;
          }
        });

        ctx.font = "30px Arial";
        ctx.fillText(`Score: ${score}`, 10, 50);

        window.requestAnimationFrame(draw);
      }

      function onClick(event) {
        const x = event.clientX;
        const y = event.clientY;

        fruits.forEach((fruit, index) => {
          const distance = Math.sqrt(
            Math.pow(x - fruit.x, 2) + Math.pow(y - fruit.y, 2)
          );

          if (distance <= 30) {
            fruits.splice(index, 1);
            score++;
          }
        });
      }

      setCanvasDimensions();
      window.addEventListener("resize", setCanvasDimensions);

      canvas.addEventListener("click", onClick);

      setInterval(() => {
        const fruit = createFruit();
        fruits.push(fruit);
      }, 1000);

      draw();
    },
  },
};
</script>

<style>
canvas {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
