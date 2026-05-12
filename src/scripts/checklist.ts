const wrapper = document.querySelector('.progress-wrapper');
const fill = document.querySelector('.progress-fill') as HTMLElement;
const text = document.querySelector('.progress-text');
const total = Number(wrapper?.getAttribute('data-total') || 0);
const checkboxes = document.querySelectorAll<HTMLInputElement>('[data-track="checklist_item_checked"]');

const updateProgress = () => {
  const checked = document.querySelectorAll<HTMLInputElement>('[data-track="checklist_item_checked"]:checked').length;
  const pct = total > 0 ? (checked / total) * 100 : 0;

  if (fill) fill.style.width = `${pct}%`;
  if (text) text.textContent = `${checked} / ${total}`;

  if (checked === total && total > 0) {
    showCompletionToast();
  }
};

const showCompletionToast = () => {
  const existing = document.getElementById('completion-toast');
  if (existing) return;

  const toast = document.createElement('div');
  toast.id = 'completion-toast';
  toast.className = 'toast toast-success';
  toast.textContent = '¡Felicidades! Ya piensas antes de aceptar. El mundo necesita más gente como tú.';
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('toast-visible'));
  setTimeout(() => {
    toast.classList.remove('toast-visible');
    setTimeout(() => toast.remove(), 400);
  }, 5000);
};

checkboxes.forEach(cb => cb.addEventListener('change', updateProgress));

export {};
