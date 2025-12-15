// Translation Dictionary
const translations = {
    en: {
        // Navigation
        nav_home: "Home",
        nav_portfolio: "Portfolio",
        nav_contact: "About & Contact",
        
        // Top Bar
        top_specialist: "Specialist of CNC & Lathe Works",
        top_location: "Panadura, Sri Lanka",
        
        // Home Page
        hero_tag: "Mould Manufacturing Specialist",
        hero_title: "Plastic, Rubber & Blow Moulds",
        hero_desc: "We specialize in CNC & Lathe works, delivering high-quality custom moulds for industrial and consumer applications.",
        btn_start: "Start Your Project",
        btn_explore: "Explore Services",
        
        services_tag: "Our Expertise",
        services_title: "Comprehensive Mould Categories",
        services_subtitle: "We manufacture a wide range of moulds tailored to your specific production needs.",
        
        feat_badge: "Featured Masterpiece",
        feat_title: "Calin Shampoo Bottle",
        feat_desc: "Witness the intersection of design and durability. This precision-molded bottle showcases our capability to handle complex curves and fine details.",
        btn_full_portfolio: "Explore Full Portfolio",

        // Gallery Page
        gallery_title: "Interactive Product Showcase",
        gallery_desc: "Explore our precision engineering in 3D. Interact with the models below to see the quality and detail of our work.",
        
        // Contact Page
        contact_title: "Contact Perera Engineers",
        contact_intro: "We are ready to assist you with your mould manufacturing needs. Visit us or contact us via phone.",
        addr_title: "Address",
        addr_text: "No: 428/6, Circular Road,<br>Nalluruwa, Panadura, Sri Lanka",
        phone_title: "Contact",
        btn_call: "Call Now",

        // Footer
        footer_desc: "Manufactures of Plastic Mould, Rubber Mould, Blow Mould & Specialist of CNC & Lathe Works.",
        quick_links: "Quick Links",
        contact_info: "Contact Info",
        rights: "2025 Perera Engineers. All rights reserved."
    },
    si: {
        // Navigation
        nav_home: "මුල් පිටුව",
        nav_portfolio: "නිර්මාණ එකතුව",
        nav_contact: "අපි ගැන & අමතන්න",
        
        // Top Bar
        top_specialist: "CNC සහ ලේත් වැඩ විශේෂඥයින්",
        top_location: "පානදුර, ශ්‍රී ලංකාව",
        
        // Home Page
        hero_tag: "මෝල්ඩ් නිෂ්පාදන විශේෂඥයින්",
        hero_title: "ප්ලාස්ටික්, රබර් සහ බ්ලෝ මෝල්ඩ්ස්",
        hero_desc: "කාර්මික සහ පාරිභෝගික අවශ්‍යතා සඳහා උසස් තත්ත්වයේ අභිරුචි මෝල්ඩ්ස් නිෂ්පාදනය කිරීමට අපි විශේෂඥයින් වෙමු.",
        btn_start: "ඔබේ ව්‍යාපෘතිය අරඹන්න",
        btn_explore: "අපගේ සේවාවන්",
        
        services_tag: "අපගේ විශේෂත්වය",
        services_title: "පුළුල් පරාසයක නිෂ්පාදන",
        services_subtitle: "ඔබගේ නිෂ්පාදන අවශ්‍යතා සඳහාම සැකසූ විවිධ වර්ගයේ මෝල්ඩ්ස් අපි නිෂ්පාදනය කරමු.",
        
        feat_badge: "විශේෂ නිර්මාණ",
        feat_title: "කැළණි ෂැම්පු බෝතලය",
        feat_desc: "නිර්මාණශීලීත්වය සහ කල්පැවැත්මේ සංකලනය. සංකීර්ණ හැඩතල සහ සියුම් නිමාවන් සහිත උසස් තත්ත්වයේ නිර්මාණ අප සතුය.",
        btn_full_portfolio: "සියලු නිර්මාණ බලන්න",

        // Gallery Page
        gallery_title: "අන්තර්ක්‍රියාකාරී නිර්මාණ එකතුව",
        gallery_desc: "අපගේ ඉංජිනේරු තාක්ෂණය 3D තාක්ෂණයෙන් අත්විඳින්න. පහත දැක්වෙන ආකෘති සමඟ අන්තර්ක්‍රියා කර අපගේ කාර්යයේ ගුණාත්මකභාවය බලන්න.",
        
        // Contact Page
        contact_title: "පෙරේරා ඉංජිනියර්ස් අමතන්න",
        contact_intro: "ඔබගේ මෝල්ඩ් නිෂ්පාදන අවශ්‍යතා සඳහා සහාය වීමට අපි සූදානම්. අපව හමුවන්න හෝ දුරකථනයෙන් අමතන්න.",
        addr_title: "ලිපිනය",
        addr_text: "අංක: 428/6, සර්කියුලර් පාර,<br>නල්ලුරුව, පානදුර.",
        phone_title: "දුරකථන",
        btn_call: "දැන්ම අමතන්න",

        // Footer
        footer_desc: "ප්ලාස්ටික්, රබර්, බ්ලෝ මෝල්ඩ් නිෂ්පාදකයින් සහ CNC සහ ලේත් වැඩ විශේෂඥයින්.",
        quick_links: "ඉක්මන් සබැඳි",
        contact_info: "සම්බන්ධ වීමට",
        rights: "2025 පෙරේරා ඉංජිනියර්ස්. සියලුම හිමිකම් ඇවිරිණි."
    }
};

// Function to update content based on selected language
function updateLanguage(lang) {
    localStorage.setItem('preferredLanguage', lang);
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        // Ensure translation exists before applying
        if (translations[lang] && translations[lang][key]) {
            // Always use innerHTML to preserve formatting (like <br>)
            element.innerHTML = translations[lang][key];
        }
    });
    updateButtonStyles(lang);
}

function updateButtonStyles(lang) {
    const btnEn = document.getElementById('btn-en');
    const btnSi = document.getElementById('btn-si');
    const mobileBtnEn = document.getElementById('mobile-btn-en');
    const mobileBtnSi = document.getElementById('mobile-btn-si');

    const setActive = (btn) => {
        if(btn) {
            btn.classList.remove('bg-transparent', 'text-gray-600');
            btn.classList.add('bg-brand-blue', 'text-white', 'shadow-sm');
        }
    };
    const setInactive = (btn) => {
        if(btn) {
            btn.classList.remove('bg-brand-blue', 'text-white', 'shadow-sm');
            btn.classList.add('bg-transparent', 'text-gray-600', 'hover:text-brand-blue');
        }
    };

    const setMobileActive = (btn) => { if(btn) btn.classList.add('font-bold', 'text-brand-blue'); }
    const setMobileInactive = (btn) => { if(btn) btn.classList.remove('font-bold', 'text-brand-blue'); }

    if (lang === 'en') {
        setActive(btnEn);
        setInactive(btnSi);
        setMobileActive(mobileBtnEn);
        setMobileInactive(mobileBtnSi);
    } else {
        setActive(btnSi);
        setInactive(btnEn);
        setMobileActive(mobileBtnSi);
        setMobileInactive(mobileBtnEn);
    }
}

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

    // Language Init
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    updateLanguage(savedLang);

    // Button Listeners
    const btnEn = document.getElementById('btn-en');
    const btnSi = document.getElementById('btn-si');
    if(btnEn) btnEn.addEventListener('click', () => updateLanguage('en'));
    if(btnSi) btnSi.addEventListener('click', () => updateLanguage('si'));

    const mobileBtnEn = document.getElementById('mobile-btn-en');
    const mobileBtnSi = document.getElementById('mobile-btn-si');
    if(mobileBtnEn) mobileBtnEn.addEventListener('click', () => updateLanguage('en'));
    if(mobileBtnSi) mobileBtnSi.addEventListener('click', () => updateLanguage('si'));

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
