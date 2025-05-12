// Funcionalidad principal del sitio
document.addEventListener('DOMContentLoaded', () => {
  // Inicializar el menú móvil
  initMobileMenu();
  
  // Inicializar el cambio de tema
  initThemeToggle();
  
  // Inicializar las animaciones de scroll
  initScrollAnimations();
});

// Menú móvil
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (!menuToggle || !navLinks) return;
  
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    document.body.classList.toggle('menu-open');
    
    // Animar las barras del menú
    menuToggle.classList.toggle('active');
  });
  
  // Cerrar el menú al hacer clic en un enlace
  const navItems = navLinks.querySelectorAll('a');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navLinks.classList.remove('active');
      document.body.classList.remove('menu-open');
      menuToggle.classList.remove('active');
    });
  });
}

// Cambio de tema (dark/light)
function initThemeToggle() {
  const themeToggle = document.querySelector('.theme-toggle');
  
  if (!themeToggle) return;
  
  // Verificar si hay un tema guardado en localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.body.classList.toggle('light-mode', savedTheme === 'light');
  }
  
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    
    // Guardar preferencia en localStorage
    const currentTheme = document.body.classList.contains('light-mode') ? 'light' : 'dark';
    localStorage.setItem('theme', currentTheme);
  });
}

// Animaciones al hacer scroll
function initScrollAnimations() {
  const revealElements = document.querySelectorAll('.reveal');
  
  if (revealElements.length === 0) return;
  
  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    
    revealElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        element.classList.add('active');
      }
    });
  };
  
  // Ejecutar al cargar la página
  revealOnScroll();
  
  // Ejecutar al hacer scroll
  window.addEventListener('scroll', revealOnScroll);
}