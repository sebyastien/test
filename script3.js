// Attendre que le DOM soit complètement chargé avant d'exécuter le script
document.addEventListener('DOMContentLoaded', function() {

    // Gestion du menu hamburger (si tu l'as déjà dans ton script.js)
    const hamburgerButton = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    if (hamburgerButton && navLinks) {
        hamburgerButton.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburgerButton.classList.toggle('active'); // Ajoute une classe 'active' pour styler l'icône du hamburger
        });
    }

    // Gestion de la galerie d'images
    const toggleGalleryBtn = document.getElementById('toggleGalleryBtn');
    const galleryGrid = document.getElementById('galleryGrid');

    if (toggleGalleryBtn && galleryGrid) {
        toggleGalleryBtn.addEventListener('click', function() {
            // Bascule la classe 'hidden' sur la grille de la galerie
            galleryGrid.classList.toggle('hidden');

            // Change le texte du bouton en fonction de l'état de la galerie
            if (galleryGrid.classList.contains('hidden')) {
                toggleGalleryBtn.textContent = 'Voir toutes les images';
            } else {
                toggleGalleryBtn.textContent = 'Masquer les images';
            }
        });
    }

    // Gestion des dropdowns (si tu l'as déjà dans ton script.js)
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const dropbtn = dropdown.querySelector('.dropbtn');
        dropbtn.addEventListener('click', function(event) {
            event.preventDefault(); // Empêche le lien de naviguer si tu le souhaites
            dropdown.classList.toggle('active'); // Ajoute/retire une classe 'active' pour montrer/cacher le contenu

            // Optionnel: Ferme les autres dropdowns ouverts
            dropdowns.forEach(otherDropdown => {
                if (otherDropdown !== dropdown && otherDropdown.classList.contains('active')) {
                    otherDropdown.classList.remove('active');
                }
            });
        });
    });

    // Optionnel: Fermer le dropdown si l'utilisateur clique en dehors
    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropbtn')) {
            dropdowns.forEach(dropdown => {
                if (dropdown.classList.contains('active')) {
                    dropdown.classList.remove('active');
                }
            });
        }
    });

}); // Fin de DOMContentLoaded