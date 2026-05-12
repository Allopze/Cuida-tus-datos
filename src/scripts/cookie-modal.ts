const overlay = document.getElementById('cookie-modal-overlay');
const cookieModal = document.getElementById('cookie-modal');
const errorModal = document.getElementById('error-modal');
const btnAccept = document.getElementById('btn-accept');
const btnReject = document.getElementById('btn-reject');
const btnErrorContinue = document.getElementById('btn-error-continue');
const attemptCounter = document.getElementById('attempt-counter');
const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;

let rejectAttempts = 0;

const getFocusableElements = () => {
  if (!overlay) return [];
  return Array.from(
    overlay.querySelectorAll<HTMLElement>('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')
  ).filter(el => !el.hasAttribute('disabled') && !el.classList.contains('hidden'));
};

if (btnReject) {
  btnReject.style.transition = 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';

  const moveButton = (e: Event) => {
    e.preventDefault();
    rejectAttempts++;

    // Move the button
    const x = (Math.random() - 0.5) * 300;
    const y = (Math.random() - 0.5) * 150;
    const rot = (Math.random() - 0.5) * 30;
    btnReject.style.transform = `translate(${x}px, ${y}px) rotate(${rot}deg) scale(${Math.max(0.7, 1 - rejectAttempts * 0.03)})`;

    // Update attempt counter
    if (attemptCounter) {
      attemptCounter.style.opacity = '1';
      attemptCounter.textContent = `Intento ${rejectAttempts} de ∞`;
    }

    // Grow accept button proportionally
    if (btnAccept) {
      const scale = Math.min(1.25, 1 + rejectAttempts * 0.03);
      btnAccept.style.transform = `scale(${scale})`;
    }

    // Shake the modal
    if (cookieModal) {
      cookieModal.classList.remove('shake');
      void cookieModal.offsetWidth; // force reflow
      cookieModal.classList.add('shake');
    }
  };

  btnReject.addEventListener('mouseover', moveButton);
  btnReject.addEventListener('touchstart', moveButton, { passive: false });

  btnReject.addEventListener('click', () => {
    if (cookieModal && errorModal) {
      cookieModal.classList.add('hidden');
      errorModal.classList.remove('hidden');
      btnErrorContinue?.focus();
    }
  });
}

const closeModal = () => {
  if (overlay) {
    overlay.classList.add('hidden');
    document.body.style.overflow = 'auto';
    previousFocus?.focus();
  }
};

btnAccept?.addEventListener('click', closeModal);
btnErrorContinue?.addEventListener('click', closeModal);

if (overlay) {
  document.body.style.overflow = 'hidden';
  btnAccept?.focus();

  overlay.addEventListener('keydown', event => {
    if (event.key === 'Escape') { closeModal(); return; }
    if (event.key !== 'Tab') return;

    const focusableElements = getFocusableElements();
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    if (!firstElement || !lastElement) return;

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    }
    if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  });
}
