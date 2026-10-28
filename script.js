// Initialize Lucide Icons
lucide.createIcons();

// Mobile Drawer Controls
const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const mobileDrawer = document.getElementById('mobileDrawer');
const mobileLinks = document.querySelectorAll('.mobile-link');

function openMenu() {
  mobileDrawer.classList.remove('translate-x-full');
}

function closeMenu() {
  mobileDrawer.classList.add('translate-x-full');
}

menuBtn?.addEventListener('click', openMenu);
closeBtn?.addEventListener('click', closeMenu);

mobileLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});

// Form submission handle
document.getElementById('contactForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you! Your message has been sent successfully to Nexora Tech.');
  e.target.reset();
});