// ===== LIVE CLOCK WIDGET =====
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const clock = document.getElementById('liveClockTime');
    if (clock) clock.textContent = `${hours}:${minutes}`;
}
updateClock();
setInterval(updateClock, 1000);

// ===== CUSTOM THEME SWITCHER =====
let currentTheme = localStorage.getItem('tkj2-theme') || 'default';

function initThemeSwitcher() {
    const themeBtns = document.querySelectorAll('.theme-btn');
    const html = document.documentElement;

    html.setAttribute('data-theme', currentTheme);
    updateActiveThemeBtn(currentTheme);

    themeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const theme = btn.getAttribute('data-theme');
            currentTheme = theme;
            html.setAttribute('data-theme', theme);
            localStorage.setItem('tkj2-theme', theme);
            updateActiveThemeBtn(theme);
        });
    });
}

function updateActiveThemeBtn(theme) {
    const themeBtns = document.querySelectorAll('.theme-btn');
    themeBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-theme') === theme) {
            btn.classList.add('active');
        }
    });
}

initThemeSwitcher();

const mobileThemeToggle = document.getElementById('mobileThemeToggle');
const savedColorMode = localStorage.getItem('tkj2-color-mode') || 'light';

function setColorMode(mode) {
    const isDark = mode === 'dark';
    document.documentElement.setAttribute('data-color-mode', isDark ? 'dark' : 'light');
    localStorage.setItem('tkj2-color-mode', isDark ? 'dark' : 'light');

    if (mobileThemeToggle) {
        mobileThemeToggle.setAttribute('aria-pressed', String(isDark));
        mobileThemeToggle.setAttribute('aria-label', isDark ? 'Aktifkan tema terang' : 'Aktifkan tema gelap');
        mobileThemeToggle.title = isDark ? 'Beralih ke tema terang' : 'Beralih ke tema gelap';
        mobileThemeToggle.innerHTML = `<i class="fas fa-${isDark ? 'sun' : 'moon'}" aria-hidden="true"></i>`;
    }
}

setColorMode(savedColorMode);
let colorModeTransitionTimer;

mobileThemeToggle?.addEventListener('click', () => {
    const nextMode = document.documentElement.getAttribute('data-color-mode') === 'dark' ? 'light' : 'dark';
    const html = document.documentElement;

    html.classList.add('color-mode-transitioning');
    setColorMode(nextMode);
    window.clearTimeout(colorModeTransitionTimer);
    colorModeTransitionTimer = window.setTimeout(() => {
        html.classList.remove('color-mode-transitioning');
    }, 360);
});

// 40 DATA SISWA (nama, tanggal lahir, telepon, alamat, instagram, gelar)
const studentsData = [
    { id: 1, name: "FOIRENT FEBRIANTY", gender: "perempuan", birthDate: "03 Februari 2009", phone: "-", address: "-", avatar: "tkj2/fio.jpeg", instagram: "-", gelar: "-" },
    { id: 2, name: "FITO AZKA WIRADANA", gender: "laki-laki", birthDate: "09 April 2009", phone: "-", address: "-", avatar: "tkj2/fito.jpeg", instagram: "-", gelar: "-" },
    { id: 3, name: "GALANG FERDIANTO", gender: "laki-laki", birthDate: "04 November 2008", phone: "-", address: "-", avatar: "tkj2/galfer.jpeg", instagram: "-", gelar: "-" },
    { id: 4, name: "GALANG SAKTIAWAN", gender: "Laki-laki", birthDate: "22 Mei 2008", phone: "-", address: "-", avatar: "tkj2/galsak.jpeg", instagram: "-", gelar: "-" },
    { id: 5, name: "GIANT EVO ARIANTO", gender: "Laki-laki", birthDate: "09 Desember 2008", phone: "-", address: "-", avatar: "tkj2/neo.jpeg", instagram: "-", gelar: "-" },
    { id: 6, name: "HANIEFUL FEBRIANSAH", gender: "Laki-laki", birthDate: "16 Februari 2008", phone: "-", address: "-", avatar: "tkj2/hanip.jpeg", instagram: "-", gelar: "-" },
    { id: 7, name: "HEFDZIL AKBAR", gender: "Laki-laki", birthDate: "12 juli 2009", phone: "-", address: "-", avatar: "tkj2/hefdzil.jpeg", instagram: "-", gelar: "-" },
    { id: 8, name: "HELSA INDNAZIL ARSY", gender: "Perempuan", birthDate: "02 mei 2008", phone: "-", address: "-", avatar: "tkj2/helsa.jpeg", instagram: "-", gelar: "-" },
    { id: 9, name: "IPAN MAULANA", gender: "Laki-laki", birthDate: "16 Oktober 2008", phone: "-", address: "-", avatar: "tkj2/ipan.jpeg", instagram: "-", gelar: "-" },
    { id: 10, name: "JAY ADITYA MAHOTRA", gender: "Laki-laki", birthDate: "25 November 2008", phone: "-", address: "-", avatar: "tkj2/jay.jpeg", instagram: "-", gelar: "-" },
    { id: 11, name: "JELITA KEYZA MAHARANI", gender: "Perempuan", birthDate: "04 Mei 2009", phone: "-", address: "- ", avatar: 'tkj2/jelita.jpeg', instagram: "-", gelar: "-" },
    { id: 12, name: 'JESSICA ANASTASYA OKTAFIANA', gender: 'Perempuan', birthDate: '27 Oktober 2008', phone: '-', address: '-', avatar: 'tkj2/jesica.jpeg', instagram: '-', gelar: '-' },
    { id: 13, name: 'JOKO SATRIO', gender: 'Laki-laki', birthDate: '25 Mei 2008', phone: '-', address: '-', avatar: 'tkj2/joko.jpeg', instagram: '-', gelar: '-' },
    { id: 14, name: 'JONATAN KRISTIAN', gender: 'Laki-laki', birthDate: '18 Juli 2008', phone: '-', address: '-', avatar: 'tkj2/jonatan.jpeg', instagram: '-', gelar: '-' },
    { id: 15, name: 'JOVAN CORNELY', gender: 'Laki-laki', birthDate: '15 Maret 2009', phone: '-', address: '-', avatar: 'tkj2/jovan.jpeg', instagram: '-', gelar: '-' },
    { id: 16, name: "KEYRA AQEELA PUTRI NOVIA", gender: "Perempuan", birthDate: "25 Mei 2009", phone: "-", address: "- ", avatar: 'tkj2/keyra.jpeg', instagram: '-', gelar: '-' },
    { id: 17, name: "KRISTIYA ANDARAKASIH", gender: "Perempuan", birthDate: "25 Agustus 2009", phone: "-", address: "-", avatar: "tkj2/kris.jpeg", instagram: '-', gelar: '-' },
    { id: 18, name: "LEITO PRATAMA PUTRA", gender: "Laki-laki", birthDate: "18 Januari 2009", phone: "-", address: "-", avatar: "tkj2/leito.jpeg", instagram: '-', gelar: '-' },
    { id: 19, name: "LUSIANA ARISTIANTY KUSUMA DEWI", gender: "Perempuan", birthDate: "05 Februari 2009", phone: "-", address: "-", avatar: "tkj2/lusiana.jpeg", instagram: '-', gelar: '-' },
    { id: 20, name: "(#ALMARHUN#) M. ARIFIN ROZAK", gender: "Laki-laki", birthDate: "26 Juli 2008", phone: "-", address: "-", avatar: "tkj2/ripin.jpeg", instagram: '-', gelar: '-' },
    { id: 21, name: "M. PARAMA MAHAPUTRA ROKHIM", gender: "Laki-laki", birthDate: "03 Februari 2009", phone: "-", address: "-", avatar: 'tkj2/parama.jpeg', instagram: '-', gelar: '-' },
    { id: 22, name: "MANDA HARTIKA", gender: "Perempuan", birthDate: '10 Agustus 2008', phone: '-', address: '-', avatar: 'tkj2/manda.jpeg', instagram: '-', gelar: '-' },
    { id: 23, name: 'MARGARET CANTIKA', gender: 'Perempuan', birthDate: '04 Agustus 2009', phone: '-', address: '-', avatar: 'tkj2/margaret.jpeg', instagram: '-', gelar: '-' },
    { id: 24, name: 'MARVEL SETIA PERDANA', gender: 'Laki-laki', birthDate: '15 Maret 2008', phone: '-', address: '-', avatar: 'tkj2/marvel.jpeg', instagram: '-', gelar: '-' },
    { id: 25, name: "MARVEL SURYA ATMAJA ", gender: 'Laki-laki', birthDate: '12 Maret 2009', phone: '-', address: '-', avatar: 'tkj2/mansur.jpeg', instagram: '-', gelar: '-' },
    { id: 26, name: 'MELVIANA MILLYANA PUTRI ARIFTI', gender: 'Perempuan', birthDate: '24 Mei 2008', phone: '-', address: '-', avatar: 'tkj2/melvi.jpeg', instagram: '-', gelar: '-' },
    { id: 27, name: "MOH. ILHAM AL-FARUQ", gender: "Laki-laki", birthDate: "06 November 2008", phone: "-", address: "-", avatar: "tkj2/faruq.jpeg", instagram: '-', gelar: '-' },
    { id: 28, name: "MOH. NURIL ARIFIN", gender: "Laki-laki", birthDate: "22 Mei 2008", phone: "-", address: "-", avatar: "tkj2/nuril.jpeg", instagram: '-', gelar: '-' },
    { id: 29, name: "MOHAMMAD KAKA ILHAM NUDIN", gender: "Laki-laki", birthDate: "10 Maret 2008", phone: "-", address: "-", avatar: "tkj2/kaka.jpeg", instagram: '-', gelar: '-' },
    { id: 30, name: "MOHAMMAD FARDAN ZAKI ARIAN SAPUTRA", gender: "Laki-laki", birthDate: "05 Mei 2008", phone: "-", address: "-", avatar: "tkj2/fardan.jpeg", instagram: '-', gelar: '-' },
    { id: 31, name: "MUH. RENDY SAPUTRA", gender: "Laki-laki", birthDate: "05 Januari 2008", phone: "-", address: "-", avatar: "tkj2/rendy.jpeg", instagram: '-', gelar: '-' },
    { id: 32, name: "MUHAMMAD ILHAM ULINUHA FADIL", gender: "Laki-laki", birthDate: "14 Agustus 2008", phone: "-", address: "-", avatar: "tkj2/ulin.jpeg", instagram: '-', gelar: '-' },
    { id: 33, name: "MUHAMMAD AGUS BAHTIAR", gender: "Laki-laki", birthDate: "16 Maret 2009", phone: "-", address: "-", avatar: "tkj2/agus.jpeg", instagram: '-', gelar: '-' },
    { id: 34, name: "MUHAMMAD AKBAR MAULANA", gender: "Laki-laki", birthDate: "29 Desember 2008", phone: "-", address: "-", avatar: "tkj2/akbar.jpeg", instagram: '-', gelar: '-' },
    { id: 35, name: "MUHAMMAD NASRUL MUKMIN", gender: "Laki-laki", birthDate: "3 Juli 2008", phone: "- ", address: '-', avatar: 'tkj2/nasrul.jpeg', instagram: '-', gelar: '-' },
    { id: 36, name: 'MUHAMMAD ZAENAL', gender: 'Laki-laki', birthDate: '08 Agustus 2008', phone: '-', address: '-', avatar: 'tkj2/zaenal.jpeg', instagram: '-', gelar: '-' },
    { id: 37, name: 'MUHAMMAD ZAKY IRJA NA\'IM', gender: 'Laki-laki', birthDate: '22 Februari 2009', phone: '-', address: '-', avatar: 'tkj2/zaky.jpeg', instagram: '-', gelar: '-' },
    { id: 38, name: 'NADINE KEYSHA ALIVIA', gender: 'Perempuan', birthDate: '20 Oktober 2008', phone: '-', address: '-', avatar: 'tkj2/nadin.jpeg', instagram: '-', gelar: '-' },
    { id: 39, name: 'NAFINSA RESIACA PUTRI', gender: 'Perempuan', birthDate: '14 Mei 2009', phone: '-', address: '-', avatar: 'tkj2/resi.jpeg', instagram: '-', gelar: '-' },
    { id: 40, name: 'NAFISHA SALSABILA WAHYUNINGTYAS', gender: 'Perempuan', birthDate: '04 November 2008', phone: '-', address: '-', avatar: 'tkj2/nafisha.jpeg', instagram: '-', gelar: '-' }
];

// Mobile menu
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

function setMobileMenuOpen(isOpen) {
    if (!mobileMenuBtn || !navLinks) return;

    navLinks.classList.toggle('active', isOpen);
    mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));
    mobileMenuBtn.setAttribute('aria-label', isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi');
    mobileMenuBtn.innerHTML = isOpen ? '<i class="fas fa-times" aria-hidden="true"></i>' : '<i class="fas fa-bars" aria-hidden="true"></i>';
}

if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
        setMobileMenuOpen(!navLinks.classList.contains('active'));
    });

    document.addEventListener('keydown', event => {
        if (event.key !== 'Escape' || !navLinks.classList.contains('active')) return;

        setMobileMenuOpen(false);
        mobileMenuBtn.focus();
    });

    document.addEventListener('click', event => {
        if (!navLinks.classList.contains('active')) return;
        const eventPath = event.composedPath();
        if (eventPath.includes(navLinks) || eventPath.includes(mobileMenuBtn)) return;

        setMobileMenuOpen(false);
    });
}

// Dropdown siswa
const studentDropdown = document.getElementById('studentDropdown');
function generateStudentDropdown() {
    if (!studentDropdown) return;
    studentDropdown.innerHTML = '';

    const gridContainer = document.createElement('div');
    gridContainer.className = 'dropdown-students-grid';

    studentsData.forEach(s => {
        const card = document.createElement('a');
        card.className = 'dropdown-student-card';
        card.href = `siswa.html?id=${s.id}`;
        card.innerHTML = `
            <img src="${s.avatar}" alt="${s.name}" class="avatar">
            <div class="name">${s.name}</div>
        `;
        gridContainer.appendChild(card);
    });

    studentDropdown.appendChild(gridContainer);
}
generateStudentDropdown();

const pageBySection = {
    home: 'index.html',
    'all-students': 'siswa.html',
    'student-profile': 'siswa.html',
    'wali-kelas': 'wali-kelas.html',
    structure: 'struktur.html',
    gallery: 'galeri.html',
    comments: 'komentar.html'
};

function navigateToSection(sectionId, studentId = null) {
    const page = pageBySection[sectionId];
    if (!page) return;
    const query = sectionId === 'student-profile' && studentId ? `?id=${studentId}` : '';
    window.location.href = `${page}${query}`;
}

window.navigateToSection = navigateToSection;

const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const homeLink = document.querySelector('.logo[href="index.html"]');
if (currentPage === 'index.html' && homeLink) homeLink.setAttribute('aria-current', 'page');

document.querySelectorAll('.nav-link[data-page]').forEach(link => {
    if (link.dataset.page === currentPage) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
    }
});

if (navLinks) {
    navLinks.querySelectorAll('a[href]').forEach(link => {
        link.addEventListener('click', () => {
            setMobileMenuOpen(false);
        });
    });
}

function loadAllStudents() {
    const grid = document.getElementById('studentsGrid');
    if (!grid) return;
    grid.innerHTML = '';
    studentsData.forEach(s => {
        const details = [
            { icon: 'fa-birthday-cake', value: s.birthDate },
            { icon: 'fa-phone', value: s.phone },
            { icon: 'fa-map-marker-alt', value: s.address }
        ].filter(detail => detail.value && detail.value.trim() !== '-');
        const card = document.createElement('a');
        card.className = 'student-card';
        card.href = `siswa.html?id=${s.id}`;
        card.innerHTML = `
            <div class="student-card-header">
                <div class="student-card-avatar"><img src="${s.avatar}" alt="Foto ${s.name}" loading="lazy"></div>
                <h3>${s.name}</h3>
            </div>
            <div class="student-card-body">
                ${details.map(detail => `<div class="student-card-detail-item"><i class="fas ${detail.icon}" aria-hidden="true"></i> ${detail.value}</div>`).join('')}
            </div>
        `;
        grid.appendChild(card);
    });
}

function loadStudentProfile(id) {
    const student = studentsData.find(item => item.id == id);
    if (!student) return;
    const profile = document.getElementById('student-profile');
    if (!profile) return;
    const details = [
        { icon: 'fa-birthday-cake', label: 'Tanggal Lahir', value: student.birthDate },
        { icon: 'fa-phone', label: 'Telepon', value: student.phone },
        { icon: 'fa-map-marker-alt', label: 'Alamat', value: student.address },
        { icon: 'fa-medal', label: 'Gelar Kelas', value: student.gelar }
    ].filter(detail => detail.value && detail.value.trim() !== '-');
    const instagramLink = student.instagram !== '-' ? `<a href="https://instagram.com/${student.instagram}" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 8px; padding: 10px 16px; background: #f09433; color: white; border-radius: 20px; text-decoration: none; font-weight: 500; transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 20px rgba(240, 148, 51, 0.3)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none';"><i class="fab fa-instagram"></i> Instagram</a>` : '';
    profile.innerHTML = `
        <div class="student-container">
            <div class="student-header">
                <div class="student-avatar"><img src="${student.avatar}" alt="Foto ${student.name}"></div>
                <div class="student-info">
                    <h2>${student.name}</h2>
                </div>
            </div>
            <div class="student-details-simple">
                ${details.map(detail => `<div class="detail-row"><i class="fas ${detail.icon}" aria-hidden="true"></i><span class="label">${detail.label}</span><span class="value">${detail.value}</span></div>`).join('')}
            </div>
            ${student.instagram !== '-' ? `<div class="profile-social-row">${instagramLink}</div>` : ''}
            <div class="profile-back-row"><a href="siswa.html" class="filter-btn profile-back-link"><i class="fas fa-arrow-left" aria-hidden="true"></i> Kembali ke daftar siswa</a></div>
        </div>
    `;
}

// ===== GALLERY MODAL FUNCTIONS =====
const totalGalleryImages = 174;
const galleryData = [];
const galleryAlbumPhotos = {
    class10: [], // Nomor tambahan jika caption foto tidak menyebut kelas 10
    class11: Array.from({ length: 10 }, (_, index) => index + 1), // Momen Pondok Ramadan
    class12: [] // Nomor tambahan jika caption foto tidak menyebut kelas 12
};
const galleryCaptions = {
   
};
const galleryCaptionGroups = [
    { start: 1, end: 10, caption: 'Foto bersama saat Pondok Ramadan kelas 11' }
];

function getGalleryCaption(photoNumber) {
    if (galleryCaptions[photoNumber]) return galleryCaptions[photoNumber];

    const group = galleryCaptionGroups.find(item => photoNumber >= item.start && photoNumber <= item.end);
    return group?.caption || `Foto ${photoNumber} - Galeri TKJ 2`;
};

function getGalleryAlbumPhotoNumbers(albumKey) {
    if (albumKey === 'random') return randomizedGalleryPhotoNumbers;

    const classNumber = albumKey.replace('class', '');
    const classRomanNumerals = { 10: 'x', 11: 'xi', 12: 'xii' };
    const classPattern = new RegExp(`\\bkelas\\s*(?:${classNumber}|${classRomanNumerals[classNumber]})\\b`, 'i');
    const captionMatches = galleryData.flatMap((item, index) =>
        !item.isEasterEgg && classPattern.test(item.caption) ? [index + 1] : []
    );

    return [...new Set([...(galleryAlbumPhotos[albumKey] || []), ...captionMatches])].sort((a, b) => a - b);
}

for (let i = 1; i <= totalGalleryImages; i++) {
    galleryData.push({
        src: `gambar/${i}.jpeg`,
        fullSrc: `gambar/${i}.jpeg`,
        caption: getGalleryCaption(i),
        icon: 'fa-images'
    });
}

galleryData.push({
    src: 'tkj2/egg.jpeg',
    fullSrc: 'tkj2/egg.jpeg',
    caption: 'Selamat, kamu menemukan item rahasia!',
    icon: 'fa-egg',
    isEasterEgg: true
});

let activeGalleryAlbum = 'random';
let randomizedGalleryPhotoNumbers = Array.from({ length: totalGalleryImages }, (_, index) => index + 1);
for (let index = randomizedGalleryPhotoNumbers.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [randomizedGalleryPhotoNumbers[index], randomizedGalleryPhotoNumbers[randomIndex]] =
        [randomizedGalleryPhotoNumbers[randomIndex], randomizedGalleryPhotoNumbers[index]];
}

let currentImageIndex = 0;
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const modalCaption = document.getElementById('modalCaption');
const modalLoading = document.getElementById('modalLoading');

function loadGallery(filterText = '') {
    const grid = document.getElementById('galeriGrid');
    if (!grid) return;

    grid.innerHTML = '';
    let displayedCount = 0;
    const searchLower = filterText.toLowerCase();
    const showEasterEgg = searchLower === 'j2';
    const photoNumbers = getGalleryAlbumPhotoNumbers(activeGalleryAlbum);

    photoNumbers.forEach(itemNumber => {
        const item = galleryData[itemNumber - 1];
        const captionLower = item.caption.toLowerCase();
        const shouldDisplay = searchLower === '' || captionLower.includes(searchLower) || itemNumber.toString().includes(filterText);

        if (!shouldDisplay) return;

        const galleryItem = document.createElement('div');
        galleryItem.className = 'galeri-item';
        galleryItem.onclick = () => openModal(itemNumber - 1);
        galleryItem.innerHTML = `
            <img src="${item.src}" alt="${item.caption}" loading="lazy">
            <div class="galeri-overlay"><i class="fas fa-search-plus"></i></div>
            <div class="galeri-caption"><i class="fas ${item.icon}"></i> ${item.caption}</div>
        `;
        grid.appendChild(galleryItem);
        displayedCount++;
    });

    if (showEasterEgg) {
        const egg = galleryData.find(item => item.isEasterEgg);
        if (egg) {
            const eggIndex = galleryData.indexOf(egg);
            const galleryItem = document.createElement('div');
            galleryItem.className = 'galeri-item';
            galleryItem.onclick = () => openModal(eggIndex);
            galleryItem.innerHTML = `
                <img src="${egg.src}" alt="${egg.caption}" loading="lazy">
                <div class="galeri-overlay"><i class="fas fa-search-plus"></i></div>
                <div class="galeri-caption"><i class="fas ${egg.icon}"></i> ${egg.caption}</div>
            `;
            grid.appendChild(galleryItem);
            displayedCount++;
        }
    }

    if (displayedCount === 0) {
        const emptyMessage = photoNumbers.length === 0
            ? 'Belum ada foto di album ini.'
            : `Tidak ada foto yang cocok dengan pencarian "${filterText}"`;
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #68736d; font-size: 1rem;">${emptyMessage}</div>`;
    }
}

function openModal(index) {
    currentImageIndex = index;
    modal.style.display = 'block';
    showImage();
}

function closeModal() {
    modal.style.display = 'none';
}

function showImage() {
    const item = galleryData[currentImageIndex];
    modalLoading.style.display = 'block';
    modalImg.style.display = 'none';

    const image = new Image();
    image.onload = function () {
        modalLoading.style.display = 'none';
        modalImg.style.display = 'block';
        modalImg.src = this.src;
        modalCaption.innerHTML = `<i class="fas ${item.icon}"></i> ${item.caption}`;
    };
    image.src = item.fullSrc;
}

function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex >= galleryData.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = galleryData.length - 1;
    }
    showImage();
}

document.addEventListener('keydown', event => {
    if (!modal || modal.style.display !== 'block') return;
    if (event.key === 'ArrowLeft') changeImage(-1);
    else if (event.key === 'ArrowRight') changeImage(1);
    else if (event.key === 'Escape') closeModal();
});

if (modal) {
    modal.addEventListener('click', event => {
        if (event.target === modal) closeModal();
    });
}

// ===== GALLERY, COMMENTS, AND CHATBOT INTERACTIONS =====
document.addEventListener('DOMContentLoaded', () => {
    const homeFeatureImage = document.querySelector('#home .memory-feature img');
    if (currentPage === 'index.html' && homeFeatureImage) {
        const totalPhotos = 174;
        const photoStorageKey = 'tkj2-last-home-photo';
        let photoNumber = Math.floor(Math.random() * totalPhotos) + 1;
        const previousPhoto = Number(sessionStorage.getItem(photoStorageKey));

        if (photoNumber === previousPhoto) {
            photoNumber = (photoNumber % totalPhotos) + 1;
        }

        sessionStorage.setItem(photoStorageKey, String(photoNumber));
        homeFeatureImage.src = `gambar/${photoNumber}.jpeg`;
        homeFeatureImage.alt = `Foto kenangan TKJ 2 nomor ${photoNumber}`;
    }

    const studentsGrid = document.getElementById('studentsGrid');
    const studentProfile = document.getElementById('student-profile');
    const studentListPage = document.getElementById('all-students');
    const studentId = new URLSearchParams(window.location.search).get('id');

    if (currentPage === 'siswa.html' && studentsGrid) loadAllStudents();
    if (currentPage === 'siswa.html' && studentProfile && studentId) {
        if (studentListPage) {
            studentListPage.hidden = true;
            studentListPage.classList.remove('active');
        }
        studentProfile.classList.add('active');
        loadStudentProfile(studentId);
    }

    if (currentPage === 'galeri.html' && document.getElementById('galeriGrid')) loadGallery();

    const albumTabs = document.querySelectorAll('[data-gallery-album]');
    albumTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            activeGalleryAlbum = tab.dataset.galleryAlbum;
            albumTabs.forEach(item => item.setAttribute('aria-pressed', String(item === tab)));
            const searchInput = document.getElementById('gallerySearch');
            if (searchInput) searchInput.value = '';
            loadGallery();
        });
    });

    const easterEggBtn = document.getElementById('easterEggBtn');
    if (easterEggBtn) {
        easterEggBtn.addEventListener('click', event => {
            event.preventDefault();
            event.stopPropagation();
            openModal(galleryData.length - 1);
        });
        easterEggBtn.addEventListener('mouseenter', () => { easterEggBtn.style.opacity = '0.5'; });
        easterEggBtn.addEventListener('mouseleave', () => { easterEggBtn.style.opacity = '0.12'; });
    }

    const searchInput = document.getElementById('gallerySearch');
    const clearBtn = document.getElementById('clearSearchBtn');
    if (searchInput) {
        searchInput.addEventListener('input', event => loadGallery(event.target.value));
        searchInput.addEventListener('keydown', event => {
            if (event.key === 'Enter') event.preventDefault();
        });
        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                searchInput.value = '';
                loadGallery('');
            });
        }
    }

    // ===== COMMENTS TO ADMIN FEATURE =====
    const commentsForm = document.getElementById('commentsForm');
    const commentsDisplay = document.getElementById('commentsDisplay');
    const adminWhatsApp = '+6285336860656';
    let commentsHistory = [];

    function renderComments() {
        if (!commentsDisplay) return;
        if (commentsHistory.length === 0) {
            commentsDisplay.innerHTML = `
                <div class="no-comments-msg">
                    <i class="fas fa-inbox"></i>
                    <p>Belum ada komentar</p>
                </div>
            `;
            return;
        }

        commentsDisplay.innerHTML = '';
        commentsHistory.forEach(comment => {
            const commentEl = document.createElement('div');
            commentEl.className = 'comment-item';
            commentEl.innerHTML = `
                <div class="comment-text">${escapeHtml(comment.text)}</div>
                <div class="comment-time">${comment.time}</div>
            `;
            commentsDisplay.appendChild(commentEl);
        });
    }

    function escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, match => map[match]);
    }

    renderComments();
    if (commentsForm) {
        commentsForm.addEventListener('submit', event => {
            event.preventDefault();
            const commentMessage = document.getElementById('commentMessage').value.trim();
            if (!commentMessage) {
                alert('Tulis pesan terlebih dahulu!');
                return;
            }

            const now = new Date();
            const timeString = now.toLocaleDateString('id-ID') + ' ' + now.toLocaleTimeString('id-ID');
            commentsHistory.push({ text: commentMessage, time: timeString });
            renderComments();

            const encodedMessage = encodeURIComponent(commentMessage);
            const whatsappUrl = `https://wa.me/${adminWhatsApp}?text=${encodedMessage}`;
            window.open(whatsappUrl, '_blank');
            commentsForm.reset();
        });
    }

    // ===== CHATBOT FUNCTIONALITY =====
    const chatbotBtn = document.getElementById('chatbotBtn');
    const chatbotWindow = document.getElementById('chatbotWindow');
    const closeChatBtn = document.getElementById('closeChatBtn');
    const chatInput = document.getElementById('chatInput');
    const sendChatBtn = document.getElementById('sendChatBtn');
    const chatbotMessages = document.getElementById('chatbotMessages');

    if (!chatbotBtn || !chatbotWindow) return;

    chatbotBtn.addEventListener('click', () => chatbotWindow.classList.toggle('active'));
    if (closeChatBtn) closeChatBtn.addEventListener('click', () => chatbotWindow.classList.remove('active'));

    let chatHistory = [];
    const MAX_MESSAGES = 50;
    let isAdmin = false;
    let isSpecialAccess = false;
    let chatbotDataPromise;

    function loadChatbotData() {
        if (typeof getBotResponse === 'function') return Promise.resolve();
        if (!chatbotDataPromise) {
            chatbotDataPromise = new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = 'chatbot-data.js';
                script.onload = resolve;
                script.onerror = () => {
                    chatbotDataPromise = null;
                    reject(new Error('Chatbot data could not be loaded'));
                };
                document.head.appendChild(script);
            });
        }
        return chatbotDataPromise;
    }

    function loadChatHistory() {
        chatHistory = [];
        chatbotMessages.innerHTML = '';
        chatbotMessages.scrollTop = 0;
    }

    async function handleChat() {
        const text = chatInput.value.trim();
        if (!text) return;

        try {
            await loadChatbotData();
        } catch {
            addMessage('Maaf, chatbot belum bisa dimuat. Silakan coba lagi.', 'bot');
            return;
        }

        if (text === 'admin') {
            isSpecialAccess = true;
            chatInput.value = '';
            const greetings = [
                "🔥 WADUH! Ada tamu VVIP nih! Welcome back bosku anak TKJ 2 paling solid se-kecamatan! 😎\n\n(Akses Khusus TKJ 2 AKTIF! Coba tanya soal 'rahasia guru', 'sirkel kelas', atau 'kasus' wkwk)",
                "🚀 GOKIL! Emang cuma anak TKJ 2 yang tau kode sakti ginian. Mau nanya apa hari ini ngab?\n\n(Mode Rahasia Terbuka! Coba tanya hal-hal yang gak diketahui orang luar)",
                "✨ ANJAY! Mode 'Anak Kesayangan' aktif! Sikat ngab, mau spill apa kita hari ini?",
                "😎 Mantap bener! Aura anak TKJ 2 emang beda ya. Akses rahasia terbuka buat lu bos!"
            ];
            addMessage(greetings[Math.floor(Math.random() * greetings.length)], 'bot');
            return;
        }

        if (text === 'stop') {
            isSpecialAccess = false;
            isAdmin = false;
            chatInput.value = '';
            const closings = [
                "👋 Yah, mau cabut ya? Oke deh, hati-hati di jalan bosku. Jangan lupa besok mabar lagi!",
                "✨ Siap laksanakan! Mode rahasia dinonaktifkan. Sampai ketemu lagi anak TKJ 2 paling keren!",
                "🫡 Oke ngab, gue balik ke server dulu. Kalau kangen ketik 'admin' lagi ya!",
                "🚀 Cabut dulu bos? Sip, jangan lupa tugas dikerjain jangan mabar mulu! Haha."
            ];
            addMessage(closings[Math.floor(Math.random() * closings.length)], 'bot');
            return;
        }

        if (text === 'akun123') {
            isAdmin = true;
            isSpecialAccess = true;
            chatInput.value = '';
            addMessage('🔒 Admin Mode.', 'bot');
            return;
        }

        if (text === 'ikan123') {
            isAdmin = false;
            isSpecialAccess = false;
            chatInput.value = '';
            addMessage('🔓 Admin Mode Mati');
            return;
        }

        addMessage(text, 'user');
        chatInput.value = '';

        const typingDiv = document.createElement('div');
        typingDiv.className = 'bot-msg typing';
        typingDiv.innerHTML = '<i class="fas fa-ellipsis-h"></i>';
        chatbotMessages.appendChild(typingDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

        setTimeout(() => {
            if (typingDiv.parentNode) typingDiv.parentNode.removeChild(typingDiv);
            const localReply = getBotResponse(text, isSpecialAccess);
            addMessage(localReply, 'bot');

            const isFallback = localReply.includes('Waduh sori bro') ||
                localReply.includes('otak AI gue tiba-tiba nge-blank') ||
                localReply.includes('gue kurang paham') ||
                localReply.includes('Sayangnya gue nggak tau') ||
                localReply.includes('sinyal otak buatan gue') ||
                localReply.includes('Gue ini cuma bot asisten');

            if (isFallback && isAdmin) {
                const suggestDiv = document.createElement('div');
                suggestDiv.className = 'admin-suggest';
                suggestDiv.innerHTML = `
                    <button onclick="copyResponFormat('${text.replace(/'/g, "\\'")}' )">
                        <i class="fas fa-plus-circle"></i> Tambah Jawaban (Admin)
                    </button>
                `;
                chatbotMessages.appendChild(suggestDiv);
                chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
            }
        }, 600);
    }

    window.copyResponFormat = function (userInput) {
        const format = `    {
    keywords: ["${userInput.toLowerCase()}"],
    response: "ISI_JAWABAN_DI_SINI"
},`;
        navigator.clipboard.writeText(format).then(() => {
            alert("Gokil! Format kode udah di-copy ngab.\n\nLangkah selanjutnya:\n1. Buka file 'chatbot-data.js'\n2. Scroll ke paling bawah (sebelum tanda ])\n3. Paste kodenya di sana\n4. Ganti 'ISI_JAWABAN_DI_SINI' sama jawaban lu.");
        });
    };

    function addMessage(msg, type) {
        const msgDiv = document.createElement('div');
        msgDiv.className = type === 'user' ? 'user-msg' : 'bot-msg';
        msgDiv.textContent = msg;
        chatbotMessages.appendChild(msgDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        chatHistory.push({ role: type, text: msg });
        if (chatHistory.length > MAX_MESSAGES) chatHistory.shift();
    }

    loadChatHistory();
    const clearChatBtn = document.getElementById('clearChatBtn');
    if (clearChatBtn) {
        clearChatBtn.addEventListener('click', () => {
            if (confirm('Hapus semua history chat, ngab?')) {
                chatHistory = [];
                chatbotMessages.innerHTML = '<div class="bot-msg">History dihapus! Ada yang bisa gue bantu lagi?</div>';
            }
        });
    }

    if (sendChatBtn) sendChatBtn.addEventListener('click', handleChat);
    if (chatInput) {
        chatInput.addEventListener('keypress', event => {
            if (event.key === 'Enter') handleChat();
        });
    }
});
