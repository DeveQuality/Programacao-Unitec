/*Navbar _ sombra ao rolar  e menu mobile */
const navbar = document.querySelector('.navbar'); 
const hamburgerBtn = document.getElementById('hamburgerBtn'); 
const navLinks = document.getElementById('navLinks');


/* adicionar classes ao rolar a pagina*/
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {    navbar.classList.remove('scrolled');
    }
});


/* abrie e fecha o menu ao clicar no hambuerguer */
hamburgerBtn.addEventListener('click', () => {  
    const isOpen = navLinks.classList.toggle('open');  
    hamburgerBtn.classList.toggle('active');  
    hamburgerBtn.setAttribute('aria-expanded', String(isOpen)); 
});


/* fecha o menu ao clicar em um link */
navLinks.querySelectorAll('.navbar__link').forEach(link => {  
    link.addEventListener('click', () => {    
        navLinks.classList.remove('open');    
        hamburgerBtn.classList.remove('active');    
        hamburgerBtn.setAttribute('aria-expanded', 'false');  
    }); 
});


/* Animacao dos numeros */

/** 
* Anima um número do valor 0 até o valor alvo. 
* @param {HTMLElement} el - O elemento que contém o número 
* @param {number} target - O valor final 
* @param {number} duration - Duração em milissegundos 
*/ 

function animateCounter(el, target, duration = 2000) {  
    let start = 0;  
    const step = target / (duration / 16); // ~60fps

    const timer = setInterval(() => {    
        start += step;    
        if (start >= target) {      
            el.textContent = target;      
            clearInterval(timer);    
        } else {      
            el.textContent = Math.floor(start);
        }  
    }, 16);
} 


/* ativar as animacoes quando visivel */
const observer = new IntersectionObserver((entries) => {  
    entries.forEach(entry => {    
        if (entry.isIntersecting) {      
            // Animação de fade-in para elementos genéricos      
            entry.target.classList.add('visible');
             
            // Se for um número de estatística, anima o contador      
            if (entry.target.classList.contains('stat-card__number')) {        
                const target = parseInt(entry.target.dataset.target, 10);        
                animateCounter(entry.target, target);      
            }
      
            // Para de observar após a primeira vez (animação única)     
            observer.unobserve(entry.target);    
        }  
    }); 
},{  
    threshold: 0.2, // Ativa quando 20% do elemento está visível  
    rootMargin: '0px 0px -50px 0px' // Margem interna 
});

// Observa todos os cartões e números 
    document.querySelectorAll('.feature-card, .stat-card__number, .split-section').forEach(el => {  
        observer.observe(el); 
    });
