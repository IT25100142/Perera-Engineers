// Initialization Function
function init() {
    // Mobile Menu Toggle
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    
    if (btn && menu) {
        btn.addEventListener('click', () => { 
            // Toggle visibility classes instead of just 'active' for smoother Tailwind transitions if needed
            // For now, we'll stick to toggling the 'hidden' class logic or height
            if (menu.style.maxHeight && menu.style.maxHeight !== "0px") {
                menu.style.maxHeight = "0px";
                menu.style.opacity = "0";
            } else {
                menu.style.maxHeight = "400px"; // Approximate max height
                menu.style.opacity = "1";
            }
        });
        
        // Close menu when a link is clicked
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => { 
                menu.style.maxHeight = "0px";
                menu.style.opacity = "0";
            });
        });
    }

    // --- ENHANCED ANIMATION SYSTEM ---
    // Using Intersection Observer to trigger animations when elements scroll into view
    const observerOptions = {
        threshold: 0.15, // Trigger when 15% of the element is visible
        rootMargin: "0px 0px -50px 0px" // Slightly offset trigger point for better visual effect
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                
                // Remove initial hidden/offset states
                el.classList.remove('opacity-0', 'translate-y-8', '-translate-x-8', 'translate-x-8', 'scale-95');
                
                // Add visible/final states
                el.classList.add('opacity-100', 'translate-y-0', 'translate-x-0', 'scale-100');
                
                // Stop observing once animated
                observer.unobserve(el);
            }
        });
    }, observerOptions);

    // 1. Elements fading up (Standard content cards, titles, and now the About section text)
    const fadeUpElements = document.querySelectorAll(
        '.service-card, ' +
        '#gallery .group, ' +
        '#contact .bg-white, ' +
        '#about .max-w-4xl, ' + // Added selector for the new centered text
        '.section-title, ' + 
        '.hero-bg p, .hero-bg .flex, .hero-bg .inline-block'
    );
    
    // 2. Elements fading from Left (Text blocks on left side)
    const fadeLeftElements = document.querySelectorAll(
        '.model-showcase-bg .md\\:w-1\\/2:first-child' // Text on left in showcase
    );

    // 3. Elements fading from Right (Text blocks or images on right side)
    const fadeRightElements = document.querySelectorAll(
        '.model-showcase-bg .md\\:w-1\\/2:last-child' // Model on right in showcase
    );

    // Helper to apply initial classes and attach observer
    const applyAnimation = (elements, transformClasses) => {
        if (!elements) return;
        elements.forEach((el, index) => {
            // Base transition classes for smooth movement
            el.classList.add('transition-all', 'duration-1000', 'ease-out', 'opacity-0', 'will-change-transform', ...transformClasses);
            
            // Staggered delay for lists/grids to create a "waterfall" effect
            // We check specifically for grid items or cards
            if (el.classList.contains('service-card') || el.classList.contains('group')) {
                const delay = (index % 3) * 150; // Delay based on column position (approx)
                el.style.transitionDelay = `${delay}ms`;
            }
            
            observer.observe(el);
        });
    };

    // Apply specific animations
    applyAnimation(fadeUpElements, ['translate-y-12']); // Move up from 12 units down
    applyAnimation(fadeLeftElements, ['-translate-x-12']); // Move in from left
    applyAnimation(fadeRightElements, ['translate-x-12']); // Move in from right
}

// Ensure DOM is fully loaded before running init
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
