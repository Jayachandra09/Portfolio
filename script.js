document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for nav links
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          window.scrollTo({
            top: targetEl.offsetTop - 60,
            behavior: 'smooth'
          });
        }
      });
    });
  
    // Intersection Observer for scroll reveal
    const revealElements = document.querySelectorAll('.reveal');
    const revealOnScroll = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.15
    });
  
    revealElements.forEach((el) => {
      revealOnScroll.observe(el);
    });
  });
  