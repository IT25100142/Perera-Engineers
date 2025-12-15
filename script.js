// Initialization Function
function init() {
    // Mobile Menu
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    if (btn && menu) {
        btn.addEventListener('click', () => { menu.classList.toggle('active'); });
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => { menu.classList.remove('active'); });
        });
    }

    // --- ENHANCED ANIMATION SYSTEM ---
    const observerOptions = {
        threshold: 0.1, 
        rootMargin: "0px 0px -20px 0px" // Slightly adjusted trigger point
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                
                // Remove hidden states
                el.classList.remove('opacity-0', 'translate-y-8', '-translate-x-8', 'translate-x-8', 'scale-95');
                
                // Add visible states
                el.classList.add('opacity-100', 'translate-y-0', 'translate-x-0', 'scale-100');
                
                observer.unobserve(el);
            }
        });
    }, observerOptions);

    // 1. Fade Up Elements (Standard)
    const fadeUpElements = document.querySelectorAll(
        '.service-card, ' +
        '#gallery .group, ' +
        '#about .lg\\:w-1\\/2:last-child, ' + 
        '#contact .bg-white, ' +
        '.section-title, ' + 
        '.hero-bg p, .hero-bg .flex'
    );
    
    // 2. Fade Left Elements (Coming from left)
    const fadeLeftElements = document.querySelectorAll(
        '#about .lg\\:w-1\\/2:first-child, ' +
        '.model-showcase-bg .md\\:w-1\\/2:first-child'
    );

    // 3. Fade Right Elements (Coming from right)
    const fadeRightElements = document.querySelectorAll(
        '.model-showcase-bg .md\\:w-1\\/2:last-child'
    );

    // Helper to apply classes and observe
    const applyAnimation = (elements, classes) => {
        if (!elements) return;
        elements.forEach((el, index) => {
            el.classList.add('transition-all', 'duration-1000', 'ease-out', 'opacity-0', ...classes);
            
            // Staggered delay for lists/grids
            if (el.classList.contains('service-card') || el.classList.contains('group')) {
                const delay = (index % 2) * 200; // Staggered delay
                el.style.transitionDelay = `${delay}ms`;
            }
            observer.observe(el);
        });
    };

    applyAnimation(fadeUpElements, ['translate-y-8']);
    applyAnimation(fadeLeftElements, ['-translate-x-8']);
    applyAnimation(fadeRightElements, ['translate-x-8']);
}

// Safe Loading
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
