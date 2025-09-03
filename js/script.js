        // Create animated particles
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 50;

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                
                // Random position
                particle.style.left = Math.random() * 100 + 'vw';
                particle.style.top = Math.random() * 100 + 'vh';
                
                // Random animation delay
                particle.style.animationDelay = Math.random() * 6 + 's';
                
                // Random animation duration
                particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
                
                particlesContainer.appendChild(particle);
            }
        }

        // Smooth scroll for navigation links
        document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Initialize particles when page loads
        window.addEventListener('load', createParticles);

        // Add scroll effect to navigation
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 100) {
                nav.style.background = 'rgba(15, 15, 35, 0.95)';
            } else {
                nav.style.background = 'rgba(15, 15, 35, 0.9)';
            }
        });

        // Add intersection observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all sections for animation
        document.querySelectorAll('section').forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(50px)';
            section.style.transition = 'all 0.8s ease-out';
            observer.observe(section);
        });


        // Hero section should be visible immediately
        document.querySelector('.hero').style.opacity = '1';
        document.querySelector('.hero').style.transform = 'translateY(0)';