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

function animateHomeIntro() {
    const introCopy = document.querySelector('#home .memory-intro-copy');
    if (!introCopy || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const fullText = introCopy.textContent.trim();
    const accessibleText = document.createElement('span');
    accessibleText.className = 'typing-sr-only';
    accessibleText.textContent = fullText;

    const typingText = document.createElement('span');
    typingText.className = 'typing-copy is-typing';
    typingText.setAttribute('aria-hidden', 'true');
    introCopy.replaceChildren(accessibleText, typingText);

    let characterIndex = 0;
    const typeNextCharacter = () => {
        if (characterIndex >= fullText.length) {
            typingText.classList.remove('is-typing');
            return;
        }

        const character = fullText[characterIndex++];
        typingText.textContent += character;
        window.setTimeout(typeNextCharacter, /[.,:;]/.test(character) ? 150 : 22);
    };

    typeNextCharacter();
}

animateHomeIntro();

// Data roster siswa
const studentsData = [
    { name: "FOIRENT FEBRIANTY", avatar: "tkj2/fio.jpeg" },
    { name: "FITO AZKA WIRADANA", avatar: "tkj2/fito.jpeg" },
    { name: "GALANG FERDIANTO", avatar: "tkj2/galfer.jpeg" },
    { name: "GALANG SAKTIAWAN", avatar: "tkj2/galsak.jpeg" },
    { name: "GIANT EVO ARIANTO", avatar: "tkj2/neo.jpeg" },
    { name: "HANIEFUL FEBRIANSAH", avatar: "tkj2/hanip.jpeg" },
    { name: "HEFDZIL AKBAR", avatar: "tkj2/hefdzil.jpeg" },
    { name: "HELSA INDNAZIL ARSY", avatar: "tkj2/helsa.jpeg" },
    { name: "IPAN MAULANA", avatar: "tkj2/ipan.jpeg" },
    { name: "JAY ADITYA MAHOTRA", avatar: "tkj2/jay.jpeg" },
    { name: "JELITA KEYZA MAHARANI", avatar: "tkj2/jelita.jpeg" },
    { name: "JESSICA ANASTASYA OKTAFIANA", avatar: "tkj2/jesica.jpeg" },
    { name: "JOKO SATRIO", avatar: "tkj2/joko.jpeg" },
    { name: "JONATAN KRISTIAN", avatar: "tkj2/jonatan.jpeg" },
    { name: "JOVAN CORNELY", avatar: "tkj2/jovan.jpeg" },
    { name: "KEYRA AQEELA PUTRI NOVIA", avatar: "tkj2/keyra.jpeg" },
    { name: "KRISTIYA ANDARAKASIH", avatar: "tkj2/kris.jpeg" },
    { name: "LEITO PRATAMA PUTRA", avatar: "tkj2/leito.jpeg" },
    { name: "LUSIANA ARISTIANTY KUSUMA DEWI", avatar: "tkj2/lusiana.jpeg" },
    { name: "(#ALMARHUN#) M. ARIFIN ROZAK", avatar: "tkj2/ripin.jpeg" },
    { name: "M. PARAMA MAHAPUTRA ROKHIM", avatar: "tkj2/parama.jpeg" },
    { name: "MANDA HARTIKA", avatar: "tkj2/manda.jpeg" },
    { name: "MARGARET CANTIKA", avatar: "tkj2/margaret.jpeg" },
    { name: "MARVEL SETIA PERDANA", avatar: "tkj2/marvel.jpeg" },
    { name: "MARVEL SURYA ATMAJA", avatar: "tkj2/mansur.jpeg" },
    { name: "MELVIANA MILLYANA PUTRI ARIFTI", avatar: "tkj2/melvi.jpeg" },
    { name: "MOH. ILHAM AL-FARUQ", avatar: "tkj2/faruq.jpeg" },
    { name: "MOH. NURIL ARIFIN", avatar: "tkj2/nuril.jpeg" },
    { name: "MOHAMMAD KAKA ILHAM NUDIN", avatar: "tkj2/kaka.jpeg" },
    { name: "MOHAMMAD FARDAN ZAKI ARIAN SAPUTRA", avatar: "tkj2/fardan.jpeg" },
    { name: "MUH. RENDY SAPUTRA", avatar: "tkj2/rendy.jpeg" },
    { name: "MUHAMMAD ILHAM ULINUHA FADIL", avatar: "tkj2/ulin.jpeg" },
    { name: "MUHAMMAD AGUS BAHTIAR", avatar: "tkj2/agus.jpeg" },
    { name: "MUHAMMAD AKBAR MAULANA", avatar: "tkj2/akbar.jpeg" },
    { name: "MUHAMMAD NASRUL MUKMIN", avatar: "tkj2/nasrul.jpeg" },
    { name: "MUHAMMAD ZAENAL", avatar: "tkj2/zaenal.jpeg" },
    { name: "MUHAMMAD ZAKY IRJA NA'IM", avatar: "tkj2/zaky.jpeg" },
    { name: "NADINE KEYSHA ALIVIA", avatar: "tkj2/nadin.jpeg" },
    { name: "NAFINSA RESIACA PUTRI", avatar: "tkj2/resi.jpeg" },
    { name: "NAFISHA SALSABILA WAHYUNINGTYAS", avatar: "tkj2/nafisha.jpeg" }
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

const pageBySection = {
    home: 'index.html',
    'all-students': 'siswa.html',
    'wali-kelas': 'wali-kelas.html',
    structure: 'struktur.html',
    gallery: 'galeri.html',
    comments: 'komentar.html'
};

function navigateToSection(sectionId) {
    const page = pageBySection[sectionId];
    if (!page) return;
    window.location.href = page;
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
    studentsData.forEach(student => {
        const card = document.createElement('article');
        card.className = 'student-card';

        const header = document.createElement('div');
        header.className = 'student-card-header';

        const avatarContainer = document.createElement('div');
        avatarContainer.className = 'student-card-avatar';

        const avatar = document.createElement('img');
        avatar.src = student.avatar;
        avatar.alt = `Foto ${student.name}`;
        avatar.width = 128;
        avatar.height = 128;
        avatar.loading = 'lazy';
        avatar.decoding = 'async';
        avatarContainer.appendChild(avatar);

        const name = document.createElement('h3');
        name.textContent = student.name;
        header.append(avatarContainer, name);
        card.appendChild(header);
        grid.appendChild(card);
    });
}

// ===== GALLERY MODAL FUNCTIONS =====
const totalGalleryImages = 174;
const galleryData = [];
const galleryAlbumPhotos = {
    class10: [],
    class11: [],
    class12: [],
    random: []
};
const classGalleryPhotoNumbers = {
    class10: [],
    class11: [],
    class12: []
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
    return galleryAlbumPhotos[albumKey] || [];
}

for (let i = 1; i <= totalGalleryImages; i++) {
    galleryData.push({
        src: `gambar/${i}.jpeg`,
        fullSrc: `gambar/${i}.jpeg`,
        caption: getGalleryCaption(i),
        icon: 'fa-images'
    });
}

let activeGalleryAlbum = 'random';
let randomizedGalleryPhotoNumbers = [];

async function loadGalleryFolderPhotos() {
    const folders = {
        class10: 'gambar/kls 10',
        class11: 'gambar/kls 11',
        class12: 'gambar/kls 12',
        random: 'gambar/random'
    };

    try {
        const response = await fetch('gallery-manifest.json', { cache: 'no-cache' });
        if (!response.ok) throw new Error(`Manifest request failed: ${response.status}`);

        const manifest = await response.json();
        Object.entries(folders).forEach(([albumKey, path]) => {
            const classNumber = albumKey.replace('class', '');
            const photoFiles = (Array.isArray(manifest[albumKey]) ? manifest[albumKey] : [])
                .filter(fileName => typeof fileName === 'string' && /^\d+\.jpeg$/i.test(fileName))
                .sort((first, second) => Number.parseInt(first, 10) - Number.parseInt(second, 10));

            if (albumKey !== 'random') {
                classGalleryPhotoNumbers[albumKey].push(...photoFiles.map(fileName => Number.parseInt(fileName, 10)));
            }

            photoFiles.forEach(fileName => {
                const photoNumber = Number.parseInt(fileName, 10);
                const imagePath = `${path}/${fileName}`;
                galleryData.push({
                    src: imagePath,
                    fullSrc: imagePath,
                    caption: albumKey === 'random'
                        ? `Foto ${photoNumber} - Galeri TKJ 2`
                        : `Foto ${photoNumber} - Kelas ${classNumber}`,
                    icon: 'fa-images'
                });
                galleryAlbumPhotos[albumKey].push(galleryData.length);
            });
        });
    } catch (error) {
        console.error('Tidak dapat memuat gallery-manifest.json', error);
    }

    randomizedGalleryPhotoNumbers = [...galleryAlbumPhotos.random];
    for (let index = randomizedGalleryPhotoNumbers.length - 1; index > 0; index--) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [randomizedGalleryPhotoNumbers[index], randomizedGalleryPhotoNumbers[randomIndex]] =
            [randomizedGalleryPhotoNumbers[randomIndex], randomizedGalleryPhotoNumbers[index]];
    }

    galleryData.push({
        src: 'tkj2/egg.jpeg',
        fullSrc: 'tkj2/egg.jpeg',
        caption: 'Selamat, kamu menemukan item rahasia!',
        icon: 'fa-egg',
        isEasterEgg: true
    });
}

const galleryFoldersReady = loadGalleryFolderPhotos();

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
    const albumPhotoNumbers = getGalleryAlbumPhotoNumbers(activeGalleryAlbum);
    const currentAlbumPosition = albumPhotoNumbers.indexOf(currentImageIndex + 1);

    if (currentAlbumPosition !== -1) {
        const nextAlbumPosition = (currentAlbumPosition + direction + albumPhotoNumbers.length) % albumPhotoNumbers.length;
        currentImageIndex = albumPhotoNumbers[nextAlbumPosition] - 1;
    } else {
        currentImageIndex = (currentImageIndex + direction + galleryData.length) % galleryData.length;
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

// ===== GALLERY AND COMMENTS INTERACTIONS =====
document.addEventListener('DOMContentLoaded', async () => {
    await galleryFoldersReady;

    const homeFeatureImage = document.querySelector('#home .memory-feature img');
    if (currentPage === 'index.html' && homeFeatureImage) {
        const photoStorageKey = 'tkj2-last-home-photo';
        const classPhotos = Object.entries(classGalleryPhotoNumbers).flatMap(([albumKey, photoNumbers]) =>
            photoNumbers.map(photoNumber => ({ albumKey, photoNumber }))
        );

        if (classPhotos.length > 0) {
            const previousPhoto = sessionStorage.getItem(photoStorageKey);
            const availablePhotos = classPhotos.filter(photo => `${photo.albumKey}/${photo.photoNumber}` !== previousPhoto);
            const selectedPhoto = availablePhotos[Math.floor(Math.random() * availablePhotos.length)] || classPhotos[0];
            const classNumber = selectedPhoto.albumKey.replace('class', '');

            sessionStorage.setItem(photoStorageKey, `${selectedPhoto.albumKey}/${selectedPhoto.photoNumber}`);
            homeFeatureImage.src = `gambar/kls ${classNumber}/${selectedPhoto.photoNumber}.jpeg`;
            homeFeatureImage.alt = `Foto kenangan TKJ 2 kelas ${classNumber} nomor ${selectedPhoto.photoNumber}`;
        }
    }

    const studentsGrid = document.getElementById('studentsGrid');
    if (currentPage === 'siswa.html' && studentsGrid) loadAllStudents();

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

});
