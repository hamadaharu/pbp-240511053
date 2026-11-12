/**
 * Muhammad Rozaan - Personal Profile Website
 * Interactive Scripts: Theme switcher, mobile menu, scroll spy, copy to clipboard
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  initScrollSpy();
  initFooterYear();
});

/* --------------------------------------------------
   Theme Management (Light / Dark)
   -------------------------------------------------- */
function initTheme() {
  const themeToggle = document.getElementById('themeToggle');
  const html = document.documentElement;

  // Check saved preference or system preference
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme) {
    html.setAttribute('data-theme', savedTheme);
  } else {
    html.setAttribute('data-theme', systemPrefersDark ? 'dark' : 'light');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = html.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }
}

/* --------------------------------------------------
   Mobile Menu Toggle
   -------------------------------------------------- */
function initMobileMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!menuToggle || !navMenu) return;

  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !isExpanded);
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close menu on nav item click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });

  // Close menu on outside click
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !menuToggle.contains(e.target) && navMenu.classList.contains('active')) {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.classList.remove('active');
      navMenu.classList.remove('active');
    }
  });
}

/* --------------------------------------------------
   Scroll Spy & Active Nav Link
   -------------------------------------------------- */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const currentId = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${currentId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

/* --------------------------------------------------
   Copy to Clipboard & Toast
   -------------------------------------------------- */
function copyToClipboard(text, triggerBtn) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(`Tersalin: ${text}`);
    }).catch(() => {
      fallbackCopy(text);
    });
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
    showToast(`Tersalin: ${text}`);
  } catch (err) {
    showToast('Gagal menyalin teks');
  }
  document.body.removeChild(textarea);
}

let toastTimeout;
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add('show');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}

/* --------------------------------------------------
   Contact Form Handler (Mailto generator)
   -------------------------------------------------- */
function handleFormSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  const recipient = 'muhammadrozaan@gmail.com';
  const mailtoSubject = encodeURIComponent(`[Website Kontak] ${subject} - dari ${name}`);
  const mailtoBody = encodeURIComponent(`Halo Muhammad Rozaan,\n\nNama: ${name}\nPesan:\n${message}\n\nSalam,\n${name}`);

  // Trigger default email client
  window.location.href = `mailto:${recipient}?subject=${mailtoSubject}&body=${mailtoBody}`;

  showToast('Membuka aplikasi email Anda...');
  event.target.reset();
}

/* --------------------------------------------------
   Dynamic Footer Year
   -------------------------------------------------- */
function initFooterYear() {
  const yearElem = document.getElementById('currentYear');
  if (yearElem) {
    yearElem.textContent = new Date().getFullYear();
  }
}
