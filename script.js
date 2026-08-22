// Light / dark mode toggle
  const modeToggle = document.getElementById('modeToggle');
  modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
    const isLight = document.body.classList.contains('light');
    modeToggle.innerHTML = isLight
      ? '<span class="mode-dot" style="background:#555"></span> Dark Mode'
      : '<span class="mode-dot"></span> Light Mode';
  });

  // Copy phone number on click
  function copyPhone(){
    const phone = document.getElementById('phoneCopy').textContent.trim();
    navigator.clipboard.writeText(phone).then(() => {
      const hint = document.getElementById('copyHint');
      hint.classList.add('show');
      setTimeout(() => hint.classList.remove('show'), 1500);
    });
  }

  // Simple tab switch visual state for testimonials profile card (visual only)
  document.querySelectorAll('.profile-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.profile-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });

  // ---------- Dynamic mouse-follow background glow ----------
  const bgGlow = document.createElement('div');
  bgGlow.id = 'bg-glow';
  document.body.prepend(bgGlow);

  window.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    document.documentElement.style.setProperty('--mx', x + '%');
    document.documentElement.style.setProperty('--my', y + '%');
  });

  // ---------- Navbar background state on scroll ----------
  const navbarEl = document.querySelector('.navbar');
  const handleNavScroll = () => {
    if (window.scrollY > 10) {
      navbarEl.classList.add('scrolled');
    } else {
      navbarEl.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleNavScroll);
  handleNavScroll();

  // ---------- Scroll-reveal animation ----------
  const revealSelectors = [
    '.section-eyebrow',
    '.section-title',
    '.about-text p',
    '.about-img',
    '.skill-row',
    '.service-card',
    '.project',
    '.review-card',
    '.profile-card',
    '.exp-item',
    '.edu-item',
    '.lang-pill',
    '.contact-row'
  ];
  const revealEls = document.querySelectorAll(revealSelectors.join(','));
  revealEls.forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = (i % 6) * 0.07 + 's';
  });

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach((el) => revealObserver.observe(el));
