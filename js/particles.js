// Animación de partículas para el hero
document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('particles-canvas');
  
  if (!canvas) return;
  
  initParticles(canvas);
});

function initParticles(canvas) {
  const ctx = canvas.getContext('2d');
  
  // Ajustar el tamaño del canvas
  function resizeCanvas() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  
  // Llamar al inicio y al cambiar el tamaño de la ventana
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  
  // Configuración de partículas
  const particlesArray = [];
  const numberOfParticles = 100;
  
  // Colores de las partículas
  const colors = [
    'rgba(0, 200, 255, 0.5)',
    'rgba(157, 0, 255, 0.5)',
    'rgba(255, 0, 200, 0.5)'
  ];
  
  // Clase Partícula
  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 3 + 1;
      this.speedX = Math.random() * 1 - 0.5;
      this.speedY = Math.random() * 1 - 0.5;
      this.color = colors[Math.floor(Math.random() * colors.length)];
    }
    
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      
      // Rebote en los bordes
      if (this.x > canvas.width || this.x < 0) {
        this.speedX = -this.speedX;
      }
      
      if (this.y > canvas.height || this.y < 0) {
        this.speedY = -this.speedY;
      }
    }
    
    draw() {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  
  // Crear las partículas
  function init() {
    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle());
    }
  }
  
  // Conectar partículas cercanas con líneas
  function connect() {
    let opacityValue = 1;
    
    for (let a = 0; a < particlesArray.length; a++) {
      for (let b = a; b < particlesArray.length; b++) {
        const dx = particlesArray[a].x - particlesArray[b].x;
        const dy = particlesArray[a].y - particlesArray[b].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          opacityValue = 1 - (distance / 150);
          const gradient = ctx.createLinearGradient(
            particlesArray[a].x,
            particlesArray[a].y,
            particlesArray[b].x,
            particlesArray[b].y
          );
          
          gradient.addColorStop(0, particlesArray[a].color);
          gradient.addColorStop(1, particlesArray[b].color);
          
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1;
          ctx.globalAlpha = opacityValue;
          ctx.beginPath();
          ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
          ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
      }
    }
  }
  
  // Animar las partículas
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < particlesArray.length; i++) {
      particlesArray[i].update();
      particlesArray[i].draw();
    }
    
    connect();
    requestAnimationFrame(animate);
  }
  
  // Iniciar la animación
  init();
  animate();
}