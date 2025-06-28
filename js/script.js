// Fungsi untuk memuat komponen HTML dari file eksternal
async function loadComponent(url, elementId) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Gagal memuat ${url}: ${response.statusText}`);
        }
        const text = await response.text();
        document.getElementById(elementId).outerHTML = text;
    } catch (error) {
        console.error(error);
        document.getElementById(elementId).innerHTML = `<p style="color:red; text-align:center;">Gagal memuat komponen.</p>`;
    }
}

// Fungsi utama yang akan dijalankan setelah komponen dimuat
function initializeScripts() {
    // --- Fungsionalitas untuk Mobile Menu (Hamburger) ---
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');

    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileNav.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

    // --- Fungsionalitas untuk Copyright Tahun Sekarang ---
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
    
    // --- Inisialisasi Peta Leaflet.js (Multi-peta) ---
    function createMap(containerId, coords, zoom, popupText) {
        const mapDiv = document.getElementById(containerId);
        if (mapDiv) {
            const map = L.map(containerId).setView(coords, zoom);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);
            L.marker(coords).addTo(map).bindPopup(popupText).openPopup();
        }
    }

    createMap('map-borobudur', [-7.6079, 110.2038], 15, '<b>Candi Borobudur</b><br>Magelang, Jawa Tengah.');
    createMap('map-rajaampat', [-0.857, 130.517], 10, '<b>Raja Ampat</b><br>Papua Barat.');
    createMap('map-bromo', [-7.942, 112.953], 13, '<b>Gunung Bromo</b><br>Jawa Timur.');

    // --- Fungsionalitas untuk Formulir ---
    const mainForm = document.getElementById('cultureForm') || document.getElementById('contactForm');
    if (mainForm) {
        mainForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            const nama = mainForm.querySelector('input[name="nama"]').value;
            alert(`Terima kasih, ${nama}! Pesan Anda telah kami terima.`);
            mainForm.reset();
        });
    }
}

// Menunggu hingga seluruh konten halaman awal dimuat
document.addEventListener("DOMContentLoaded", async function() {
    // Muat header dan footer secara bersamaan
    await Promise.all([
        loadComponent('header.html', 'header-placeholder'),
        loadComponent('footer.html', 'footer-placeholder')
    ]);

    // Setelah header dan footer PASTI sudah dimuat, jalankan semua script lain
    initializeScripts();
});