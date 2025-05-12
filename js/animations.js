// Animaciones con GSAP
document.addEventListener('DOMContentLoaded', () => {
  // Verificar si GSAP está disponible
  if (typeof gsap !== 'undefined') {
    // Animación del hero
    animateHero();
    
    // Animación de elementos al hacer scroll
    initScrollTriggers();
    
    // Animación de parallax
    initParallax();
  }
});

// Animación del hero
function animateHero() {
  const heroTitle = document.querySelector('.hero .glitch-title');
  const heroSubtitle = document.querySelector('.hero .subtitle');
  const ctaButtons = document.querySelector('.hero .cta-buttons');
  
  if (!heroTitle && !heroSubtitle && !ctaButtons) return;
  
  const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
  
  if (heroTitle) {
    heroTimeline.fromTo(
      heroTitle,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    );
  }
  
  if (heroSubtitle) {
    heroTimeline.fromTo(
      heroSubtitle,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      '-=0.6'
    );
  }
  
  if (ctaButtons) {
    heroTimeline.fromTo(
      ctaButtons.children,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.2 },
      '-=0.6'
    );
  }
}

// Animaciones al hacer scroll
function initScrollTriggers() {
  // Animación para las tarjetas de servicios
  const serviceCards = document.querySelectorAll('.service-card');
  
  if (serviceCards.length > 0) {
    gsap.from(serviceCards, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.services-grid',
        start: 'top 80%'
      }
    });
  }
  
  // Animación para las tarjetas de proyectos
  const projectCards = document.querySelectorAll('.projects-preview .project-card');
  
  if (projectCards.length > 0) {
    gsap.from(projectCards, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.projects-preview',
        start: 'top 80%'
      }
    });
  }
  
  // Animación para los miembros del equipo
  const teamMembers = document.querySelectorAll('.team-member');
  
  if (teamMembers.length > 0) {
    gsap.from(teamMembers, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.team-grid',
        start: 'top 80%'
      }
    });
  }
  
  // Animación para las flip cards
  const flipCards = document.querySelectorAll('.flip-card');
  
  if (flipCards.length > 0) {
    gsap.from(flipCards, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.tech-cards',
        start: 'top 80%'
      }
    });
  }
}

// Efecto parallax
function initParallax() {
  const parallaxElements = document.querySelectorAll('.parallax-element');
  
  if (parallaxElements.length === 0) return;
  
  window.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;
    
    parallaxElements.forEach(element => {
      const depth = 20;
      const moveX = mouseX * depth;
      const moveY = mouseY * depth;
      
      gsap.to(element, {
        x: moveX,
        y: moveY,
        duration: 1,
        ease: 'power2.out'
      });
    });
  });
}