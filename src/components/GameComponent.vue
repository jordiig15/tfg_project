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

      function createElement() {
        const elementos = ["🍔", "🍟", "🥤", "🌭"];
        const randomElement = elementos[Math.floor(Math.random() * elementos.length)];
        const randomX = Math.random() * canvas.width;
        const speed = Math.random() * 2 + 1;

        return { x: randomX, y: 0, speed, element: randomElement };
      }

      let elementos = [];

      function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        elementos.forEach((element, index) => {
          element.y += element.speed;
          ctx.font = "30px Arial";
          ctx.fillText(element.element, element.x, element.y);

          if (element.y > canvas.height) {
            elementos.splice(index, 1);
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

        elementos.forEach((element, index) => {
          const distance = Math.sqrt(
            Math.pow(x - element.x, 2) + Math.pow(y - element.y, 2)
          );

          if (distance <= 30) {
            elementos.splice(index, 1);
            score++;
          }
        });
      }

      setCanvasDimensions();
      window.addEventListener("resize", setCanvasDimensions);

      canvas.addEventListener("click", onClick);

      setInterval(() => {
        const element = createElement();
        elementos.push(element);
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
