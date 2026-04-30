window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 40);
});

// Formspree AJAX submit
const form = document.getElementById('estim-form');
if (form) {
  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const btn = document.getElementById('form-btn');
    const ok  = document.getElementById('form-success');
    const err = document.getElementById('form-error');
    btn.textContent = 'Envoi en cours…';
    btn.disabled = true;
    ok.style.display = 'none';
    err.style.display = 'none';
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        ok.style.display = 'block';
        form.reset();
        btn.textContent = 'Demande envoyée ✓';
      } else {
        err.style.display = 'block';
        btn.textContent = 'Demander mon estimation gratuite →';
        btn.disabled = false;
      }
    } catch {
      err.style.display = 'block';
      btn.textContent = 'Demander mon estimation gratuite →';
      btn.disabled = false;
    }
  });
}

window.io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('v'); });
}, { threshold: 0.15 });
document.querySelectorAll('.r').forEach(el => window.io.observe(el));
