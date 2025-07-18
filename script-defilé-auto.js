// Fichier : script-defilé-auto.js

document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 0; // Indice de l'image actuellement affichée
    const slides = document.querySelectorAll('.gallery-slideshow img'); // Toutes les images

    // Vérifie si des images existent pour le diaporama
    if (slides.length === 0) {
        console.warn("Images de diaporama introuvables. Le diaporama automatique ne sera pas initialisé.");
        return; // Sortir si aucune image n'est trouvée
    }

    // Initialise la première image si aucune n'est active dans le HTML
    if (document.querySelector('.gallery-slideshow img.active') === null) {
        slides[0].classList.add('active');
    }

    // Fonction pour afficher l'image suivante dans le diaporama
    function showNextSlide() {
        // Masquer l'image actuellement active
        slides[slideIndex].classList.remove('active');

        // Passer à l'image suivante
        slideIndex++;
        // Si nous avons dépassé la dernière image, revenir à la première
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }

        // Afficher la nouvelle image active
        slides[slideIndex].classList.add('active');
    }

    // Démarre le diaporama automatique
    // La fonction showNextSlide sera appelée toutes les 4 secondes (4000 millisecondes)
    setInterval(showNextSlide, 4000);
});