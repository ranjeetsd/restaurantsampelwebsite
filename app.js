// app.js - Interactive features for Masala Stories website

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href').substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      e.preventDefault();
      
      // Close mobile menu if open
      const navLinks = document.querySelector('.nav-links');
      const hamburger = document.querySelector('.hamburger');
      if (navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        hamburger.classList.remove('active');
      }

      // Smooth scroll to target
      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      const targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Hamburger menu setup
const navLinks = document.querySelector('.nav-links');
const hamburger = document.createElement('div');
hamburger.classList.add('hamburger');
hamburger.innerHTML = `<span></span><span></span><span></span>`;
const header = document.querySelector('.navbar');

// Insert hamburger before the actions or at the end
const navActions = document.querySelector('.nav-actions');
if (navActions) {
  header.insertBefore(hamburger, navActions);
} else {
  header.appendChild(hamburger);
}

// Toggle mobile navigation and hamburger icon states
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('active');
});

// Close menu when clicking outside of it
document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
    navLinks.classList.remove('open');
    hamburger.classList.remove('active');
  }
});

// Add fade-in animations on scroll using IntersectionObserver
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.15
};

const fadeInCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(fadeInCallback, observerOptions);

// Observe all elements with class animate-on-scroll
document.querySelectorAll('.animate-on-scroll').forEach(element => {
  observer.observe(element);
});

// Sticky navbar classes on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
