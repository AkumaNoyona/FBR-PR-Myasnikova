const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('mainNav');
const scrollTopBtn = document.getElementById('scrollTop');

// гамбургер-меню
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  nav.classList.toggle('active');

  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', !expanded);

  document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
});

// кнопка "Наверх"
window.addEventListener('scroll', () => {
  scrollTopBtn.classList.toggle('visible', window.scrollY > 300);
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
