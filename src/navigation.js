document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navPanel = document.querySelector('.nav-panel');
  const navOverlay = document.querySelector('.nav-overlay');
  const closeBtn = document.querySelector('.close-btn');
  const navLinks = document.querySelectorAll('.nav-panel a');

  function openNav() {
    navPanel.classList.add('active');
    navOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeNav() {
    navPanel.classList.remove('active');
    navOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (hamburger) {
    hamburger.addEventListener('click', openNav);
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeNav);
  }

  if (navOverlay) {
    navOverlay.addEventListener('click', closeNav);
  }

  navLinks.forEach(link => {
    link.addEventListener('click', closeNav);
  });

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
});
