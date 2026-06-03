// ============================================
// MENU HAMBURGUESA
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    let menuBtn = null;
    
    function createMenuButton() {
        if (navbar.querySelector('.menu-toggle')) return;
        
        const btn = document.createElement('button');
        btn.classList.add('menu-toggle');
        btn.innerHTML = 'Menu';
        btn.setAttribute('aria-label', 'Abrir menu');
        
        navbar.appendChild(btn);
        menuBtn = btn;
        
        btn.addEventListener('click', function() {
            const isOpen = navLinks.classList.contains('active');
            
            if (isOpen) {
                navLinks.classList.remove('active');
                this.innerHTML = 'Menu';
            } else {
                navLinks.classList.add('active');
                this.innerHTML = 'Cerrar';
            }
        });
    }
    
    function handleResize() {
        if (window.innerWidth <= 768) {
            createMenuButton();
        } else {
            if (menuBtn) {
                menuBtn.remove();
                menuBtn = null;
            }
            navLinks.classList.remove('active');
        }
    }
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                if (menuBtn) menuBtn.innerHTML = 'Menu';
            }
        });
    });
    
    // ============================================
    // SCROLL SUAVE
    // ============================================
    
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
    
    // ============================================
    // FADE-IN AL SCROLL
    // ============================================
    
    const sections = document.querySelectorAll('section:not(.hero)');
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    function checkVisibility() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.85) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    }
    
    checkVisibility();
    window.addEventListener('scroll', checkVisibility);
    
    // ============================================
    // NAVBAR AL HACER SCROLL
    // ============================================
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.backgroundColor = '#1a1a1a';
            navbar.style.backdropFilter = 'none';
            navbar.style.boxShadow = 'none';
        }
    });
    
    // ============================================
    // EFECTO TYPING
    // ============================================
    
    const titulo = document.querySelector('.titulo');
    if (titulo) {
        const texto = titulo.textContent;
        titulo.textContent = '';
        titulo.style.borderRight = '3px solid #a855f7';
        titulo.style.paddingRight = '5px';
        titulo.style.display = 'inline-block';
        titulo.style.minHeight = '1.2em';
        
        let i = 0;
        function escribir() {
            if (i < texto.length) {
                titulo.textContent += texto.charAt(i);
                i++;
                setTimeout(escribir, 100);
            } else {
                setInterval(() => {
                    titulo.style.borderColor = titulo.style.borderColor === 'transparent' 
                        ? '#a855f7' 
                        : 'transparent';
                }, 500);
            }
        }
        setTimeout(escribir, 500);
    }
    
});