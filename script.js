// script.js  – einfacher Intersection-Observer
document.addEventListener('DOMContentLoaded', () => {
  const blocks = document.querySelectorAll('.neon-block');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('show');
      });
    },
    { threshold: 0.15 }
  );

  blocks.forEach(b => observer.observe(b));
});