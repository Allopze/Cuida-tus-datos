/**
 * Lightweight IntersectionObserver for scroll-triggered reveal animations.
 * Adds `.visible` class to `.reveal` and `.stagger` elements when they
 * enter the viewport. One-shot: elements don't re-animate on scroll back.
 */
const observerOptions: IntersectionObserverInit = {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.reveal, .stagger').forEach(el => observer.observe(el));

export {};
