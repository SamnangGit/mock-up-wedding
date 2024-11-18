// Navigation
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const navbar = document.getElementById('navbar');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Sticky navigation
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(248, 249, 250, 0.95)';
        navbar.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
    } else {
        navbar.style.backgroundColor = 'rgba(248, 249, 250, 0)';
        navbar.style.boxShadow = 'none';
    }
});

// Countdown Timer
function updateCountdown() {
    const weddingDate = new Date('2024-12-29T14:00:00').getTime();
    const now = new Date().getTime();
    const timeLeft = weddingDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = `
        <div class="countdown-item">
            <div class="countdown-value">${days}</div>
            <div class="countdown-label">Days</div>
        </div>
        <div class="countdown-item">
            <div class="countdown-value">${hours}</div>
            <div class="countdown-label">Hours</div>
        </div>
        <div class="countdown-item">
            <div class="countdown-value">${minutes}</div>
            <div class="countdown-label">Minutes</div>
        </div>
        <div class="countdown-item">
            <div class="countdown-value">${seconds}</div>
            <div class="countdown-label">Seconds</div>
        </div>
    `;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all timeline items and sections
document.querySelectorAll('.timeline-item, .section').forEach(item => {
    observer.observe(item);
});

// Photo Gallery
const galleryImages = [
    'placeholder-1.jpg',
    'placeholder-2.jpg',
    'placeholder-3.jpg',
    'placeholder-4.jpg',
    'placeholder-5.jpg',
    'placeholder-6.jpg',
    'placeholder-7.jpg',
    'placeholder-8.jpg',
    'placeholder-9.jpg',
    'placeholder-10.jpg',
    'placeholder-11.jpg',
    'placeholder-12.jpg'
];

const galleryGrid = document.querySelector('.gallery-grid');
galleryImages.forEach((image, index) => {
    galleryGrid.innerHTML += `
        <div class="gallery-item">
            <img 
                data-src="./images/${index + 1}.jpg"
                class="lazyload"
                alt="Gallery image ${index + 1}"
            >
        </div>
    `;
});

// RSVP Form
const rsvpForm = document.getElementById('rsvp-form');
const mealSelection = document.getElementById('meal-selection');
const attendingSelect = document.getElementById('attending');

attendingSelect.addEventListener('change', () => {
    if (attendingSelect.value === 'yes') {
        mealSelection.style.display = 'block';
    } else {
        mealSelection.style.display = 'none';
    }
});

rsvpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Collect form data
    const formData = new FormData(rsvpForm);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send this data to a server
    console.log('RSVP Submission:', data);
    
    // Show success message
    alert('Thank you for your RSVP!');
    rsvpForm.reset();
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        
        // Close mobile menu if open
        navLinks.classList.remove('active');
    });
});

// Google Maps Integration
function initMap() {
    const ceremonyLocation = { lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE };
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: ceremonyLocation,
        styles: [
            {
                "featureType": "all",
                "elementType": "geometry",
                "stylers": [{"color": "#f8f9fa"}]
            },
            // Add more custom styles as needed
        ]
    });

    new google.maps.Marker({
        position: ceremonyLocation,
        map: map,
        title: "Wedding Ceremony Location"
    });
}

// Performance optimizations
document.addEventListener('DOMContentLoaded', () => {
    // Defer non-critical images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
});



// New
// Language configurations
const translations = {
    en: {
        story: 'Our Story',
        details: 'Details',
        timeline: 'Timeline',
        gallery: 'Gallery',
        rsvp: 'RSVP',
        ceremony: 'Ceremony',
        reception: 'Reception',
        fullName: 'Full Name',
        email: 'Email',
        attending: 'Will you be attending?',
        joyfullyAccept: 'Joyfully Accept',
        regretfullyDecline: 'Regretfully Decline',
        mealPreference: 'Meal Preference',
        specialNotes: 'Special Notes',
        sendRSVP: 'Send RSVP',
        days: 'Days',
        hours: 'Hours',
        minutes: 'Minutes',
        seconds: 'Seconds'
    },
    kh: {
        story: 'រឿងរ៉ាវរបស់យើង',
        details: 'ព័ត៌មានលម្អិត',
        timeline: 'កាលវិភាគ',
        gallery: 'វិចិត្រសាល',
        rsvp: 'ការឆ្លើយតប',
        ceremony: 'ពិធីការ',
        reception: 'ការទទួល',
        fullName: 'ឈ្មោះពេញ',
        email: 'អ៊ីមែល',
        attending: 'តើអ្នកនឹងចូលរួមទេ?',
        joyfullyAccept: 'ទទួលយកដោយរីករាយ',
        regretfullyDecline: 'បដិសេធដោយសោកស្តាយ',
        mealPreference: 'ចំណូលចិត្តអាហារ',
        specialNotes: 'កំណត់ចំណាំពិសេស',
        sendRSVP: 'ផ្ញើការឆ្លើយតប',
        days: 'ថ្ងៃ',
        hours: 'ម៉ោង',
        minutes: 'នាទី',
        seconds: 'វិនាទី'
    }
};

// Create controls container
const controls = document.createElement('div');
controls.className = 'nav-controls';

// Create language switcher
const languageSelector = document.createElement('select');
languageSelector.className = 'language-selector';
languageSelector.innerHTML = `
    <option value="en">English</option>
    <option value="kh">ខ្មែរ</option>
`;

// Create dark mode toggle
const darkModeToggle = document.createElement('button');
darkModeToggle.className = 'dark-mode-toggle';
darkModeToggle.setAttribute('aria-label', 'Toggle dark mode');
darkModeToggle.innerHTML = `<i class="fas fa-moon"></i>`;

// Add controls to navigation
const navContent = document.querySelector('.nav-content');
controls.appendChild(languageSelector);
controls.appendChild(darkModeToggle);
navContent.appendChild(controls);

// Add necessary styles
const customStyles = document.createElement('style');
customStyles.textContent = `
    .nav-controls {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-left: 1rem;
    }

    .language-selector {
        padding: 0.5rem;
        border-radius: 4px;
        border: 1px solid var(--border-color, #dee2e6);
        background-color: transparent;
        color: inherit;
        font-family: 'Montserrat', sans-serif;
        font-size: 0.9rem;
    }

    .dark-mode-toggle {
        padding: 0.5rem;
        border: none;
        background: transparent;
        color: inherit;
        cursor: pointer;
        font-size: 1.2rem;
    }

    @media (max-width: 768px) {
        .nav-controls {
            position: absolute;
            top: 1rem;
            right: 4rem;
        }
    }

    /* Dark mode styles */
    body.dark-mode {
        --bg-color: #1a1a1a;
        --text-color: #ffffff;
        --nav-bg: rgba(26, 26, 26, 0.95);
        --card-bg: #2d2d2d;
        --border-color: #404040;
    }

    body.dark-mode {
        background-color: var(--bg-color);
        color: var(--text-color);
    }

    body.dark-mode #navbar {
        background-color: var(--nav-bg);
    }

    body.dark-mode .detail-card,
    body.dark-mode .timeline-item,
    body.dark-mode .rsvp-form input,
    body.dark-mode .rsvp-form select,
    body.dark-mode .rsvp-form textarea {
        background-color: var(--card-bg);
        border-color: var(--border-color);
        color: var(--text-color);
    }

    body.dark-mode .hero-content {
        background-color: rgba(0, 0, 0, 0.6);
    }

    body.dark-mode .countdown-item {
        background-color: var(--card-bg);
        color: var(--text-color);
    }
`;

document.head.appendChild(customStyles);

// Language switching functionality
let currentLang = localStorage.getItem('language') || 'en';
languageSelector.value = currentLang;

function updateLanguage() {
    // Update navigation links
    document.querySelector('a[href="#story"]').textContent = translations[currentLang].story;
    document.querySelector('a[href="#details"]').textContent = translations[currentLang].details;
    document.querySelector('a[href="#timeline"]').textContent = translations[currentLang].timeline;
    document.querySelector('a[href="#gallery"]').textContent = translations[currentLang].gallery;
    document.querySelector('a[href="#rsvp"]').textContent = translations[currentLang].rsvp;

    // Update section headings
    document.querySelector('#story h2').textContent = translations[currentLang].story;
    document.querySelector('#details h2').textContent = translations[currentLang].details;
    document.querySelector('#timeline h2').textContent = translations[currentLang].timeline;
    document.querySelector('#gallery h2').textContent = translations[currentLang].gallery;
    document.querySelector('#rsvp h2').textContent = translations[currentLang].rsvp;

    // Update RSVP form
    document.querySelector('label[for="name"]').textContent = translations[currentLang].fullName;
    document.querySelector('label[for="email"]').textContent = translations[currentLang].email;
    document.querySelector('label[for="attending"]').textContent = translations[currentLang].attending;
    document.querySelector('label[for="meal"]').textContent = translations[currentLang].mealPreference;
    document.querySelector('label[for="notes"]').textContent = translations[currentLang].specialNotes;
    document.querySelector('.submit-btn').textContent = translations[currentLang].sendRSVP;

    // Update countdown labels
    document.querySelectorAll('.countdown-label').forEach(label => {
        const key = label.textContent.toLowerCase();
        if (translations[currentLang][key]) {
            label.textContent = translations[currentLang][key];
        }
    });

    // Save language preference
    localStorage.setItem('language', currentLang);
}

languageSelector.addEventListener('change', (e) => {
    currentLang = e.target.value;
    updateLanguage();
});

// Dark mode functionality
let isDarkMode = localStorage.getItem('darkMode') === 'true';

// Set initial dark mode state
if (isDarkMode) {
    document.body.classList.add('dark-mode');
    darkModeToggle.innerHTML = `<i class="fas fa-sun"></i>`;
}

darkModeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode');
    darkModeToggle.innerHTML = isDarkMode ? `<i class="fas fa-sun"></i>` : `<i class="fas fa-moon"></i>`;
    localStorage.setItem('darkMode', isDarkMode);
});

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    updateLanguage();
});

// Update the original countdown function to handle translations
const originalUpdateCountdown = updateCountdown;
updateCountdown = function() {
    originalUpdateCountdown();
    // Update countdown labels after updating the countdown values
    document.querySelectorAll('.countdown-label').forEach(label => {
        const key = label.textContent.toLowerCase();
        if (translations[currentLang][key]) {
            label.textContent = translations[currentLang][key];
        }
    });
};



