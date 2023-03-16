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
        
        canvas.width = 960;
        canvas.height = 800;
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
        const x = event.clientX - 485;
        const y = event.clientY;
        console.log(x,y,"mouse"); 
        elementos.forEach((element, index) => {
          console.log(element.x,element.y,'element'); 
          const distance = Math.sqrt(
            Math.pow(x - element.x, 2) + Math.pow(y - element.y, 2)
          );

          if (distance <= 40) {
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
  width: 960px !important;
  height: 800px !important;
  position: absolute;
  margin-top: 20px;
  margin-left: 475px;
  left: 0;
  background-color: rgb(104, 91, 91);
}
</style>
