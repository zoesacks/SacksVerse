// Funcionalidad para la página de proyectos
document.addEventListener('DOMContentLoaded', () => {
  // Inicializar el filtro de proyectos
  initProjectsFilter();
  
  // Inicializar animaciones de hover para los proyectos
  initProjectHoverEffects();
});

// Filtro de proyectos
function initProjectsFilter() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectItems = document.querySelectorAll('.project-item');
  
  if (filterButtons.length === 0 || projectItems.length === 0) return;
  
  // Función para filtrar proyectos
  const filterProjects = (category) => {
    projectItems.forEach(item => {
      const itemCategory = item.getAttribute('data-category');
      
      if (category === 'all' || itemCategory === category) {
        gsap.to(item, {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: 'power2.out',
          onStart: function() {
            item.style.display = 'block';
          }
        });
      } else {
        gsap.to(item, {
          opacity: 0,
          scale: 0.8,
          duration: 0.5,
          ease: 'power2.out',
          onComplete: function() {
            item.style.display = 'none';
          }
        });
      }
    });
  };
  
  // Evento click para los botones de filtro
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remover clase active de todos los botones
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Agregar clase active al botón clickeado
      button.classList.add('active');
      
      // Filtrar proyectos
      const category = button.getAttribute('data-filter');
      filterProjects(category);
    });
  });
}

// Efectos de hover para los proyectos
function initProjectHoverEffects() {
  const projectCards = document.querySelectorAll('.project-card');
  
  if (projectCards.length === 0) return;
  
  projectCards.forEach(card => {
    // Efecto de vibración al hover
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        x: 2,
        y: -2,
        duration: 0.1,
        repeat: 1,
        yoyo: true,
        ease: 'power1.inOut',
        onComplete: () => {
          gsap.to(card, {
            x: 0,
            y: 0,
            duration: 0.1
          });
        }
      });
    });
    
    // Efecto de sombra neón que sigue al cursor
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Crear un radial gradient que sigue al cursor
      card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0, 200, 255, 0.1) 0%, rgba(10, 10, 10, 0) 50%)`;
    });
    
    // Restaurar al salir
    card.addEventListener('mouseleave', () => {
      card.style.background = 'none';
    });
  });
}