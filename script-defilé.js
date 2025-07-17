// Fichier : script-carousel.js

document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 0; // Indice de l'image actuellement affichée
    const slides = document.querySelectorAll('.gallery-slideshow img'); // Toutes les images
    const dotsContainer = document.querySelector('.dots-container'); // Conteneur des points
    const prevButton = document.querySelector('.prev'); // Bouton précédent
    const nextButton = document.querySelector('.next'); // Bouton suivant

    // Vérifie si les éléments existent avant d'initialiser le carrousel
    if (slides.length === 0 || !dotsContainer || !prevButton || !nextButton) {
        console.warn("Éléments de carrousel introuvables. Le carrousel ne sera pas initialisé.");
        return; // Sortir si les éléments nécessaires ne sont pas là
    }

    // Générer les points indicateurs
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
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

    // Afficher la première image au chargement
    showSlides(slideIndex);
});