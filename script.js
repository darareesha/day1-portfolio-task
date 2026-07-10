// scroll progress bar
  var progress = document.getElementById('progress');
  window.addEventListener('scroll', function () {
    var h = document.documentElement;
    var scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight) * 100;
    progress.style.width = scrolled + '%';
  });

  // reveal sections as they enter the viewport
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) entry.target.classList.add('in');
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(function (el) { observer.observe(el); });

  // mobile nav toggle
  var menuBtn = document.getElementById('menuBtn');
  var mobileNav = document.getElementById('mobileNav');
  menuBtn.addEventListener('click', function () {
    var open = mobileNav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open);
  });
  mobileNav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { mobileNav.classList.remove('open'); });
  });

  // "click and it moves" — small bounce on GitHub / LinkedIn links
  document.querySelectorAll('[data-bounce]').forEach(function (link) {
    link.addEventListener('click', function () {
      link.classList.remove('bounced');
      void link.offsetWidth; // restart animation
      link.classList.add('bounced');
    });
  });
