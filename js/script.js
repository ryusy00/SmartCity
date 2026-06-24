(function () {
  const header = document.getElementById('header');
  const menuBtn = document.querySelector('.menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (menuBtn && header && mobileMenu) {
    menuBtn.addEventListener('click', function () {
      const isOpen = header.classList.toggle('is-open');
      menuBtn.setAttribute('aria-expanded', String(isOpen));
      mobileMenu.setAttribute('aria-hidden', String(!isOpen));
    });
  }

  document.querySelectorAll('.tab-list button').forEach(function (button) {
    button.addEventListener('click', function () {
      const group = button.closest('.tab-list');
      group.querySelectorAll('button').forEach(function (item) {
        item.classList.remove('active');
      });
      button.classList.add('active');
    });
  });

  document.querySelector('.map-search')?.addEventListener('submit', function (event) {
    event.preventDefault();
  });
})();
