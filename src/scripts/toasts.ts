/**
 * Funny toast messages triggered by user interactions.
 * These are pedagogical: they make the user aware of tracking patterns
 * while being entertaining.
 */
const funnyMessages: { trigger: string; message: string; delay?: number }[] = [
  { trigger: 'scroll-25', message: '¿Sabías que tu scroll también es un dato? Ya llevamos el 25% rastreado.' },
  { trigger: 'scroll-50', message: 'Mitad de página. En otro sitio, ya te habrían ofrecido 3 suscripciones.' },
  { trigger: 'scroll-75', message: 'Casi al final. Tu paciencia ya vale más que muchos términos y condiciones.' },
  { trigger: 'first-check', message: 'Primera casilla marcada. Eso ya sería "consentimiento implícito" en algunos sitios.' },
  { trigger: 'terms-visible', message: 'Entraste a los términos y condiciones. Estadísticamente, eres parte del 0.1% que llega aquí.' },
];

let triggeredToasts = new Set<string>();
let toastQueue: string[] = [];
let isShowingToast = false;

const showToast = (message: string) => {
  if (isShowingToast) {
    toastQueue.push(message);
    return;
  }
  isShowingToast = true;

  const toast = document.createElement('div');
  toast.className = 'toast toast-info';
  toast.textContent = message;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('toast-visible'));

  setTimeout(() => {
    toast.classList.remove('toast-visible');
    setTimeout(() => {
      toast.remove();
      isShowingToast = false;
      if (toastQueue.length > 0) {
        showToast(toastQueue.shift()!);
      }
    }, 400);
  }, 4000);
};

const triggerToast = (id: string) => {
  if (triggeredToasts.has(id)) return;
  const msg = funnyMessages.find(m => m.trigger === id);
  if (!msg) return;
  triggeredToasts.add(id);
  setTimeout(() => showToast(msg.message), msg.delay || 500);
};

// Scroll-based toasts
let ticking = false;
window.addEventListener('scroll', () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
    if (pct > 25) triggerToast('scroll-25');
    if (pct > 50) triggerToast('scroll-50');
    if (pct > 75) triggerToast('scroll-75');
    ticking = false;
  });
});

// First checkbox toast
document.addEventListener('change', (e) => {
  if (e.target instanceof HTMLInputElement && e.target.dataset.track === 'checklist_item_checked') {
    triggerToast('first-check');
  }
}, { once: true });

// Terms section visible toast
const termsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      triggerToast('terms-visible');
      termsObserver.disconnect();
    }
  });
}, { threshold: 0.2 });

const termsSection = document.querySelector('[data-section="terms"]');
if (termsSection) termsObserver.observe(termsSection);

export {};
