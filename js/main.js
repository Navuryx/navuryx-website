document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  if (!form) return;

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
});
