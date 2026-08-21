// ============================================
// IP Printers — shared site script
// Used by: home, products, about, contact
// ============================================

// Mobile menu toggle (present on every page)
const toggle = document.getElementById('menuToggle');
const menu = document.getElementById('mobileMenu');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
}

// Contact form submit handling (contact page only)
const form = document.getElementById('contactForm');
const successBox = document.getElementById('successBox');
if (form && successBox) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    form.classList.add('hide');
    successBox.classList.add('show');
  });
}
