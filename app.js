/**
 * AeroStudio - Core Application Logic
 * Implements Theme Toggle, Responsive Navigation, Scroll Spy, 
 * Form Validation, and Interactive UI Effects.
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  initHeaderScroll();
  initActiveNavLinks();
  initContactForm();
});

/**
 * 1. THEME MANAGEMENT (Light / Dark Mode)
 */
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  
  // Check user preference in localStorage, fallback to system preference (default Dark)
  const savedTheme = localStorage.getItem('theme') || 'dark';
  setTheme(savedTheme);

  themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  });
}

function setTheme(theme) {
  const body = document.body;
  const themeToggle = document.getElementById('theme-toggle');
  
  body.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  
  // Update toggle button icon and accessibility states
  if (theme === 'light') {
    themeToggle.innerHTML = `
      <svg class="icon-sun" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
    `;
  } else {
    themeToggle.innerHTML = `
      <svg class="icon-moon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    `;
  }
}

/**
 * 2. MOBILE MENU INTERACTIVITY
 */
function initMobileMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  menuToggle.addEventListener('click', () => {
    const isActive = navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
    
    // Accessibility states
    menuToggle.setAttribute('aria-expanded', isActive);
  });

  // Close menu when clicking on any navigation link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      menuToggle.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/**
 * 3. HEADER SCROLL EFFECT (Adding shadows and changing height)
 */
function initHeaderScroll() {
  const header = document.getElementById('header');
  
  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll);
  // Run on load in case page is refreshed while scrolled
  handleScroll();
}

/**
 * 4. ACTIVE LINK SELECTION (Highlights current active page in navigation)
 */
function initActiveNavLinks() {
  const path = window.location.pathname;
  const page = path.split("/").pop();
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');

    // Default home page matching
    if (page === '' || page === 'index.html' || page === '/') {
      if (href === 'index.html' || href === '#inicio') {
        link.classList.add('active');
      }
    } else if (href === page) {
      link.classList.add('active');
    }
  });
}

/**
 * 5. CONTACT FORM VALIDATION AND SIMULATED RESPONSE
 */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('form-name');
    const emailInput = document.getElementById('form-email');
    const messageInput = document.getElementById('form-message');
    const submitBtn = document.getElementById('form-submit');
    
    let isValid = true;

    // Basic Validation Checks
    [nameInput, emailInput, messageInput].forEach(input => {
      if (!input.value.trim()) {
        showInputError(input, 'Este campo es obligatorio');
        isValid = false;
      } else {
        clearInputError(input);
      }
    });

    if (emailInput.value.trim() && !validateEmail(emailInput.value)) {
      showInputError(emailInput, 'Por favor, ingresa un correo electrónico válido');
      isValid = false;
    }

    if (isValid) {
      // Simulate form submission to backend
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Enviando...';
      submitBtn.disabled = true;

      setTimeout(() => {
        // Successful simulation response
        showToast('¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.');
        form.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 1500);
    }
  });
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function showInputError(input, message) {
  input.style.borderColor = '#ef4444'; // Red error border
  
  // Prevent duplicate error messages
  let errorMsg = input.parentNode.querySelector('.error-message');
  if (!errorMsg) {
    errorMsg = document.createElement('span');
    errorMsg.className = 'error-message';
    errorMsg.style.color = '#ef4444';
    errorMsg.style.fontSize = '0.8rem';
    errorMsg.style.marginTop = '0.25rem';
    errorMsg.style.marginLeft = '0.25rem';
    input.parentNode.appendChild(errorMsg);
  }
  errorMsg.textContent = message;
}

function clearInputError(input) {
  input.style.borderColor = '';
  const errorMsg = input.parentNode.querySelector('.error-message');
  if (errorMsg) {
    errorMsg.remove();
  }
}

/**
 * Toast notification for form responses
 */
function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast-notification';
  toast.textContent = message;
  
  // Custom styles for toast
  Object.assign(toast.style, {
    position: 'fixed',
    bottom: '2rem',
    right: '2rem',
    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', // Emerald gradient
    color: '#ffffff',
    padding: '1rem 2rem',
    borderRadius: '12px',
    boxShadow: '0 10px 25px rgba(16, 185, 129, 0.3)',
    zIndex: '1000',
    opacity: '0',
    transform: 'translateY(20px)',
    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontWeight: '600'
  });

  document.body.appendChild(toast);

  // Trigger animation frame
  requestAnimationFrame(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';
  });

  // Remove toast after duration
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
    setTimeout(() => {
      toast.remove();
    }, 400);
  }, 4000);
}
