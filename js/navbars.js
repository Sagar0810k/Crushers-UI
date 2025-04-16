document.addEventListener('DOMContentLoaded', () => {


    const navbarTogglers = document.querySelectorAll('.navbar-toggler');
    navbarTogglers.forEach(toggler => {
      toggler.addEventListener('click', () => {
        const targetId = toggler.getAttribute('aria-controls');
        const targetMenu = document.getElementById(targetId);
        if (targetMenu) {
          targetMenu.classList.toggle('active');
          const isExpanded = targetMenu.classList.contains('active');
          toggler.setAttribute('aria-expanded', isExpanded);
        }
      });
    });
  
    document.addEventListener('click', (event) => {
      const openMenus = document.querySelectorAll('.navbar-collapse.active');
      openMenus.forEach(menu => {
        const toggler = document.querySelector(`[aria-controls="${menu.id}"]`);
        if (!menu.contains(event.target) && !(toggler && toggler.contains(event.target))) {
          menu.classList.remove('active');
          if (toggler) {
            toggler.setAttribute('aria-expanded', 'false');
          }
        }
      });
    });
  
    const resetMobileMenus = () => {
      if (window.innerWidth > 768) {
        document.querySelectorAll('.navbar-collapse.active').forEach(menu => {
          menu.classList.remove('active');
          const toggler = document.querySelector(`[aria-controls="${menu.id}"]`);
          if (toggler) toggler.setAttribute('aria-expanded', 'false');
        });
      }
    };
    window.addEventListener('resize', resetMobileMenus);
    resetMobileMenus(); 

    
    const themeToggleButton = document.getElementById('theme-toggle-btn');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcons(savedTheme);
  
    if (themeToggleButton) {
      themeToggleButton.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const newTheme = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcons(newTheme);
      });
    }
  
    function updateThemeIcons(theme) {
      const sunIcon = document.querySelector('.sun-icon');
      const moonIcon = document.querySelector('.moon-icon');
      if (theme === 'dark') {
        sunIcon?.classList.remove('hidden');
        moonIcon?.classList.add('hidden');
      } else {
        sunIcon?.classList.add('hidden');
        moonIcon?.classList.remove('hidden');
      }
    }
  
    const transparentNavs = document.querySelectorAll('.navbar-transparent');
    function handleScroll() {
      transparentNavs.forEach(nav => {
        if (window.scrollY > 50) {
          nav.classList.add('scrolled');
        } else {
          nav.classList.remove('scrolled');
        }
      });
    }
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
  
    
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach(toggle => {
      const dropdownMenu = toggle.nextElementSibling;
      if (!dropdownMenu || !dropdownMenu.classList.contains('dropdown-menu')) return;
  
      const items = dropdownMenu.querySelectorAll('.dropdown-item');
      const lastItem = items[items.length - 1];
  
      toggle.addEventListener('blur', (e) => {
        if (!toggle.parentElement.contains(e.relatedTarget)) {
          
        }
      });
  
      if (lastItem) {
        lastItem.addEventListener('blur', (e) => {
          if (!toggle.parentElement.contains(e.relatedTarget)) {
            
          }
        });
      }
    });
  
    
    const copyBtns = document.querySelectorAll('.copy-btn');
    copyBtns.forEach(btn => {
      const copyIcon = btn.querySelector('.copy-icon');
      const checkIcon = btn.querySelector('.check-icon');
      const copyText = btn.querySelector('.copy-text');
  
      btn.addEventListener('click', () => {
        const type = btn.dataset.type;
        const container = btn.closest('.code-tabs');
        const content = container.querySelector(`.code-content.active[data-content="${type}"]`);
        let code = content?.textContent.trim();
  
        if (!code) {
          const nav = btn.closest('.component-card')?.querySelector('nav');
          if (type === 'html') {
            code = nav?.outerHTML.trim() || '<!-- Could not extract HTML automatically -->';
          } else if (type === 'css') {
            const className = nav?.classList[1]?.replace('navbar-', '') || 'example';
            code = `/* CSS in navbars.css */\n\n.navbar-${className} {\n  ...\n}`;
          } else if (type === 'js') {
            const className = nav?.classList[1]?.replace('navbar-', '') || 'example';
            code = `// JS logic for .navbar-${className} is in script.js or navbars.js\n`;
          }
        }
  
        const textarea = document.createElement('textarea');
        textarea.value = code;
        document.body.appendChild(textarea);
        textarea.select();
  
        try {
          document.execCommand('copy');
          copyIcon?.classList.add('hidden');
          checkIcon?.classList.remove('hidden');
          if (copyText) copyText.textContent = 'Copied!';
          setTimeout(() => {
            copyIcon?.classList.remove('hidden');
            checkIcon?.classList.add('hidden');
            if (copyText) copyText.textContent = 'Copy';
          }, 2000);
        } catch (e) {
          console.error('Copy failed', e);
          if (copyText) copyText.textContent = 'Error';
          setTimeout(() => {
            if (copyText) copyText.textContent = 'Copy';
          }, 2000);
        }
  
        document.body.removeChild(textarea);
      });
    });
  
  });
  
