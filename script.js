function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Theme toggle (light/dark)
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('theme', theme); } catch (e) {}
    const btn = document.getElementById('theme-toggle');
    const btnM = document.getElementById('theme-toggle-mobile');
    const label = theme === 'dark' ? 'Light' : 'Dark';
    if (btn) btn.textContent = label;
    if (btnM) btnM.textContent = label;
}

function initTheme() {
    let saved = null;
    try { saved = localStorage.getItem('theme'); } catch (e) {}
    if (!saved) {
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        saved = prefersDark ? 'dark' : 'light';
    }
    applyTheme(saved);
}

function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    applyTheme(current === 'dark' ? 'light' : 'dark');
}

document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    const t1 = document.getElementById('theme-toggle');
    const t2 = document.getElementById('theme-toggle-mobile');
    if (t1) t1.addEventListener('click', toggleTheme);
    if (t2) t2.addEventListener('click', toggleTheme);
});

// Enhanced smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 100; // Offset for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
                
                // Close mobile menu if open
                const menu = document.querySelector(".menu-links");
                if (menu.classList.contains("open")) {
                    toggleMenu();
                }
            }
        });
    });
});
  