// Highlight the active nav link based on current page
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path) link.classList.add('active');
  });

  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const status = document.getElementById('form-status');
      const name = document.getElementById('name').value.trim();
      if (!name) {
        status.textContent = 'Please enter your name.';
        return;
      }
      status.textContent = `Thanks, ${name}. This form's just a demo for now, email us directly instead.`;
      form.reset();
    });
  }
});
