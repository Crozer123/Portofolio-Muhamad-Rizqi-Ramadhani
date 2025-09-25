document.addEventListener('DOMContentLoaded', function() {
    const fadeInObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    const elementsToFadeIn = document.querySelectorAll('.fade-in-element');
    elementsToFadeIn.forEach(element => {
        fadeInObserver.observe(element);
    });

    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('main section[id]');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                
                navLinks.forEach(link => {
                    link.classList.remove('active-link');
                });
                
                const activeLink = document.querySelector(`nav a[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active-link');
                }
            }
        });
    }, { 
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0 
    });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    const backToTopButton = document.getElementById('kembali-ke-atas');
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });

        backToTopButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

});