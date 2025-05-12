// Funcionalidad para la página de contacto
document.addEventListener('DOMContentLoaded', () => {
  // Inicializar validación del formulario
  initFormValidation();
  
  // Inicializar animaciones del formulario
  initFormAnimations();
});

// Validación del formulario
function initFormValidation() {
  const contactForm = document.getElementById('contact-form');
  
  if (!contactForm) return;
  
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  
  const nameValidation = document.getElementById('name-validation');
  const emailValidation = document.getElementById('email-validation');
  const messageValidation = document.getElementById('message-validation');
  
  // Validar nombre
  if (nameInput && nameValidation) {
    nameInput.addEventListener('blur', () => {
      if (nameInput.value.trim() === '') {
        nameValidation.textContent = 'Por favor, ingresa tu nombre';
      } else if (nameInput.value.trim().length < 2) {
        nameValidation.textContent = 'El nombre debe tener al menos 2 caracteres';
      } else {
        nameValidation.textContent = '';
      }
    });
    
    nameInput.addEventListener('input', () => {
      if (nameInput.value.trim() !== '' && nameInput.value.trim().length >= 2) {
        nameValidation.textContent = '';
      }
    });
  }
  
  // Validar email
  if (emailInput && emailValidation) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    emailInput.addEventListener('blur', () => {
      if (emailInput.value.trim() === '') {
        emailValidation.textContent = 'Por favor, ingresa tu email';
      } else if (!emailRegex.test(emailInput.value.trim())) {
        emailValidation.textContent = 'Por favor, ingresa un email válido';
      } else {
        emailValidation.textContent = '';
      }
    });
    
    emailInput.addEventListener('input', () => {
      if (emailRegex.test(emailInput.value.trim())) {
        emailValidation.textContent = '';
      }
    });
  }
  
  // Validar mensaje
  if (messageInput && messageValidation) {
    messageInput.addEventListener('blur', () => {
      if (messageInput.value.trim() === '') {
        messageValidation.textContent = 'Por favor, ingresa tu mensaje';
      } else if (messageInput.value.trim().length < 10) {
        messageValidation.textContent = 'El mensaje debe tener al menos 10 caracteres';
      } else {
        messageValidation.textContent = '';
      }
    });
    
    messageInput.addEventListener('input', () => {
      if (messageInput.value.trim() !== '' && messageInput.value.trim().length >= 10) {
        messageValidation.textContent = '';
      }
    });
  }
  
  // Envío del formulario
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Validar todos los campos antes de enviar
    let isValid = true;
    
    if (nameInput.value.trim() === '' || nameInput.value.trim().length < 2) {
      nameValidation.textContent = 'Por favor, ingresa un nombre válido';
      isValid = false;
    }
    
    if (emailInput.value.trim() === '' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
      emailValidation.textContent = 'Por favor, ingresa un email válido';
      isValid = false;
    }
    
    if (messageInput.value.trim() === '' || messageInput.value.trim().length < 10) {
      messageValidation.textContent = 'Por favor, ingresa un mensaje válido';
      isValid = false;
    }
    
    if (isValid) {
      // Animación de envío
      const submitBtn = contactForm.querySelector('.submit-btn');
      const btnText = submitBtn.querySelector('span');
      
      btnText.textContent = 'Enviando...';
      submitBtn.disabled = true;
      
      // Simular envío (aquí iría la lógica real de envío)
      setTimeout(() => {
        // Mostrar mensaje de éxito
        contactForm.innerHTML = `
          <div class="success-message">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="success-icon">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <h2>¡Mensaje Enviado!</h2>
            <p>Gracias por contactarnos. Te responderemos lo antes posible.</p>
          </div>
        `;
        
        // Animar mensaje de éxito
        gsap.from('.success-message', {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out'
        });
      }, 2000);
    }
  });
}

// Animaciones del formulario
function initFormAnimations() {
  const formGroups = document.querySelectorAll('.form-group');
  
  if (formGroups.length === 0) return;
  
  // Animar entrada de los campos del formulario
  gsap.from(formGroups, {
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out'
  });
  
  // Animar botón de envío
  const submitBtn = document.querySelector('.submit-btn');
  if (submitBtn) {
    gsap.from(submitBtn, {
       y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out'
    });
  }
}