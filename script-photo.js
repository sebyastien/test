document.addEventListener('DOMContentLoaded', () => {
    const manualGalleryItems = document.querySelectorAll('.manual-gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeButton = document.querySelector('.close-button');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');

    let currentImageIndex = 0;
    const images = Array.from(manualGalleryItems).map(item => item.href); // Récupère tous les chemins des images pleine taille

    // Fonction pour ouvrir la lightbox
    function openLightbox(index) {
        currentImageIndex = index;
        lightboxImg.src = images[currentImageIndex];
        lightbox.style.display = 'flex'; // Utiliser flex pour centrer l'image
    }

    // Fonction pour fermer la lightbox
    function closeLightbox() {
        lightbox.style.display = 'none';
    }

    // Fonction pour afficher l'image précédente
    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        lightboxImg.src = images[currentImageIndex];
    }

    // Fonction pour afficher l'image suivante
    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        lightboxImg.src = images[currentImageIndex];
    }

    // Écouteurs d'événements pour chaque miniature
    manualGalleryItems.forEach((item, index) => {
        item.addEventListener('click', (e) => {
            e.preventDefault(); // Empêche le comportement par défaut du lien
            openLightbox(index);
        });
    });

    // Écouteurs d'événements pour les boutons de la lightbox
    closeButton.addEventListener('click', closeLightbox);
    prevButton.addEventListener('click', showPrevImage);
    nextButton.addEventListener('click', showNextImage);

    // Fermer la lightbox en cliquant en dehors de l'image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Fermer la lightbox avec la touche Échap
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.style.display === 'flex') {
            closeLightbox();
        }
        if (lightbox.style.display === 'flex') {
            if (e.key === 'ArrowLeft') {
                showPrevImage();
            } else if (e.key === 'ArrowRight') {
                showNextImage();
            }
        }
    });
});