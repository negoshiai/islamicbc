document.addEventListener('DOMContentLoaded', () => {

    // --- Header & Mobile Menu ---
    const header = document.getElementById('header');
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuOpenIcon = document.getElementById('menu-open-icon');
    const menuCloseIcon = document.getElementById('menu-close-icon');
    const navLinks = document.querySelectorAll('.nav-link');

    // Sticky header on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            header.classList.add('bg-[#0A192F]/90', 'shadow-lg', 'backdrop-blur-sm');
        } else {
            header.classList.remove('bg-[#0A192F]/90', 'shadow-lg', 'backdrop-blur-sm');
        }
    });

    // Toggle mobile menu
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        menuOpenIcon.classList.toggle('hidden');
        menuCloseIcon.classList.toggle('hidden');
        if (!mobileMenu.classList.contains('hidden')) {
             header.classList.add('bg-[#0A192F]/90', 'shadow-lg', 'backdrop-blur-sm');
        } else if (window.scrollY <= 10) {
             header.classList.remove('bg-[#0A192F]/90', 'shadow-lg', 'backdrop-blur-sm');
        }
    });

    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    menuOpenIcon.classList.remove('hidden');
                    menuCloseIcon.classList.add('hidden');
                }
            }
        });
    });

    // --- On-Scroll Animations ---
    const animatedSections = document.querySelectorAll('.animated-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animatedSections.forEach(section => {
        observer.observe(section);
    });

    // --- Contact Form ---
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const submitStatus = document.getElementById('submit-status');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
            
            // Simulate API call
            setTimeout(() => {
                submitStatus.textContent = 'Thank you! Your inquiry has been sent successfully.';
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Inquiry';

                setTimeout(() => {
                    submitStatus.textContent = '';
                }, 5000);
            }, 1500);
        });
    }
});
