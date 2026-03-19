// script.js – Neon-Block beim Scrollen weich einblenden
document.addEventListener('DOMContentLoaded', () => {
  const heroBlock = document.querySelector('.neon-block');

  const showBlock = () => {
    const trigger = window.innerHeight * 0.75;       // 75 % der Viewport-Höhe
    const top     = heroBlock.getBoundingClientRect().top;

    if (top < trigger) heroBlock.classList.add('show');
  };

  window.addEventListener('scroll', showBlock);
  showBlock();   // sofort prüfen, falls Block schon im Sichtfeld ist
});