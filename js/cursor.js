// Cursor personalizado con trail
document.addEventListener('DOMContentLoaded', () => {
  initCustomCursor();
});

function initCustomCursor() {
  const cursor = document.querySelector('.cursor-follower');
  const cursorTrail = document.querySelector('.cursor-follower-trail');
  
  if (!cursor || !cursorTrail) return;
  
  // Posiciones iniciales
  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;
  let trailX = 0;
  let trailY = 0;
  
  // Velocidad de seguimiento
  const cursorSpeed = 0.2;
  const trailSpeed = 0.1;
  
  // Actualizar posición del cursor
  const updateCursorPosition = () => {
    // Calcular la nueva posición del cursor principal
    cursorX += (mouseX - cursorX) * cursorSpeed;
    cursorY += (mouseY - cursorY) * cursorSpeed;
    
    // Calcular la nueva posición del trail
    trailX += (mouseX - trailX) * trailSpeed;
    trailY += (mouseY - trailY) * trailSpeed;
    
    // Aplicar las posiciones
    cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
    cursorTrail.style.transform = `translate(${trailX}px, ${trailY}px)`;
    
    // Continuar la animación
    requestAnimationFrame(updateCursorPosition);
  };
  
  // Iniciar la animación
  updateCursorPosition();
  
  // Actualizar coordenadas del mouse
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  
  // Ocultar cursor en dispositivos táctiles
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
    cursor.style.display = 'none';
    cursorTrail.style.display = 'none';
  }
  
  // Efectos de hover
  const hoverElements = document.querySelectorAll('a, button, .project-card, .service-card, .team-member, .flip-card');
  
  hoverElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
      cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) scale(1.5)`;
      cursor.style.background = 'rgba(157, 0, 255, 0.2)';
      cursorTrail.style.width = '150px';
      cursorTrail.style.height = '150px';
    });
    
    element.addEventListener('mouseleave', () => {
      cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) scale(1)`;
      cursor.style.background = 'rgba(0, 200, 255, 0.2)';
      cursorTrail.style.width = '100px';
      cursorTrail.style.height = '100px';
    });
  });
}