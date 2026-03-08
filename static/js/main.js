// ================================
// SCROLL ANIMATIONS
// ================================

// Intersection Observer for scroll-triggered animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards and items
document.querySelectorAll('.stat-card, .experience-card, .project-card, .competency-card, .category-card, .contact-item').forEach(el => {
    observer.observe(el);
});

// ================================
// SMOOTH SCROLL BEHAVIOR
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ================================
// NAVBAR ACTIVE STATE
// ================================

function setActiveNavLink() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentLocation = location.pathname;
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentLocation || 
            (currentLocation === '/' && link.getAttribute('href') === '/')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Set active nav on page load
document.addEventListener('DOMContentLoaded', setActiveNavLink);

// Update nav on navigation
window.addEventListener('popstate', setActiveNavLink);

// ================================
// FORM VALIDATION & FEEDBACK
// ================================

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        // Form validation handled by Django
        const nameInput = this.querySelector('[name="name"]');
        const emailInput = this.querySelector('[name="email"]');
        const messageInput = this.querySelector('[name="message"]');
        
        // Add visual feedback
        if (nameInput && nameInput.value.trim()) {
            nameInput.classList.add('is-valid');
        }
        if (emailInput && emailInput.value.trim()) {
            emailInput.classList.add('is-valid');
        }
        if (messageInput && messageInput.value.trim()) {
            messageInput.classList.add('is-valid');
        }
    });
}

// ================================
// MOBILE MENU CLOSE ON LINK CLICK
// ================================

const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
            navbarToggler.click();
        }
    });
});

// ================================
// PROGRESS BAR ANIMATION
// ================================

function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
}

// Trigger on load if visible
const skillProgressSection = document.querySelector('.skill-progress');
if (skillProgressSection) {
    const progressObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateProgressBars();
                progressObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    progressObserver.observe(skillProgressSection);
}

// ================================
// PARALLAX EFFECT FOR HERO
// ================================

const heroSection = document.querySelector('.hero-section');
if (heroSection) {
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const parallaxElements = heroSection.querySelectorAll('.profile-image-wrapper, .hero-content');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            element.style.transform = `translateY(${scrollPosition * speed}px)`;
        });
    });
}

// ================================
// COUNTER ANIMATION (on home page)
// ================================

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const speed = 40;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, speed);
}

// ================================
// ADD ANIMATION CLASSES
// ================================

// Add CSS animation classes
const style = document.createElement('style');
style.textContent = `
    .animate {
        animation: fadeInUp 0.6s ease-out forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .stat-card:nth-child(1) {
        animation-delay: 0.1s;
    }
    
    .stat-card:nth-child(2) {
        animation-delay: 0.2s;
    }
    
    .stat-card:nth-child(3) {
        animation-delay: 0.3s;
    }
    
    .experience-card {
        animation-delay: 0.2s;
    }
    
    .project-card:nth-child(1) {
        animation-delay: 0.1s;
    }
    
    .project-card:nth-child(2) {
        animation-delay: 0.2s;
    }
    
    .project-card:nth-child(3) {
        animation-delay: 0.3s;
    }
    
    .project-card:nth-child(4) {
        animation-delay: 0.4s;
    }
    
    .form-control.is-valid {
        border-color: #10b981;
        background-color: rgba(16, 185, 129, 0.05);
    }
`;
document.head.appendChild(style);

// ================================
// UTILITY FUNCTIONS
// ================================

// Smooth anchor links with offset for sticky navbar
function scrollToElement(element, offset = 80) {
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
    });
}

// ================================
// INITIALIZATION
// ================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio website loaded successfully');
    
    // Initialize tooltips if using Bootstrap
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
});
