// Fichier : script-defilé.js (pour le diaporama manuel de la galerie)

document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 0; // Indice de l'image actuellement affichée

    // Utilisez les classes préfixées par 'manual-'
    const slides = document.querySelectorAll('.manual-gallery-slideshow img');
    const dotsContainer = document.querySelector('.manual-dots-container');
    const prevButton = document.querySelector('.manual-prev');
    const nextButton = document.querySelector('.manual-next');

    // Vérifie si les éléments existent avant d'initialiser le carrousel
    if (slides.length === 0 || !dotsContainer || !prevButton || !nextButton) {
        console.warn("Éléments de carrousel manuel introuvables. Le carrousel ne sera pas initialisé.");
        return; // Sortir si les éléments nécessaires ne sont pas là
    }

    // Générer les points indicateurs
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot'); // La classe 'dot' est générique pour le style
        dot.addEventListener('click', () => currentSlide(i));
        dotsContainer.appendChild(dot);
    }

    const dots = document.querySelectorAll('.dot'); // Récupère les points après leur création

    // Fonction pour afficher une image spécifique
    function showSlides(n) {
        // Masquer toutes les images
        slides.forEach(slide => slide.classList.remove('active'));
        // Désactiver tous les points
        dots.forEach(dot => dot.classList.remove('active'));

        // Gérer les cas où n dépasse les limites
        if (n >= slides.length) { slideIndex = 0; }
        if (n < 0) { slideIndex = slides.length - 1; }

        // Afficher l'image courante
        slides[slideIndex].classList.add('active');
        // Activer le point correspondant
        dots[slideIndex].classList.add('active');
    }

    // Fonction pour passer à l'image suivante/précédente
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // Fonction pour aller à une image spécifique via les points
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    // Écouteurs d'événements pour les boutons
    prevButton.addEventListener('click', () => plusSlides(-1));
    nextButton.addEventListener('click', () => plusSlides(1));

    // Initialiser le diaporama en affichant la première image
    showSlides(slideIndex);
});

