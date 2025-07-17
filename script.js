document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    const dropbtn = document.querySelector('.dropbtn'); // Le bouton 'Le Club'
    const dropdownContent = document.querySelector('.dropdown-content'); // Le sous-menu

    // Gérer l'ouverture/fermeture du menu hamburger
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
            // Fermer le sous-menu si le menu principal se ferme
            if (!navLinks.classList.contains('active') && dropdownContent) {
                dropdownContent.classList.remove('show');
            }
        });
    }

    // Gérer l'ouverture/fermeture du sous-menu 'Le Club' au clic (PC et Mobile)
if (dropbtn && dropdownContent) {
    dropbtn.addEventListener('click', function(event) {
        event.preventDefault(); // Empêche TOUJOURS la navigation directe du 'dropbtn'
        dropdownContent.classList.toggle('show'); // Bascule la visibilité du sous-menu
    });

    // Fermer le sous-menu si on clique en dehors de la zone du dropdown (utile pour mobile et PC)
    document.addEventListener('click', function(event) {
        // Vérifie si le clic n'est PAS à l'intérieur du conteneur du dropdown
        if (dropdownContent && !event.target.closest('.dropdown') && dropdownContent.classList.contains('show')) {
            dropdownContent.classList.remove('show');
        }
    });


        // Fermer le sous-menu si on clique en dehors de la zone du dropdown (utile pour mobile)
        document.addEventListener('click', function(event) {
            // Vérifie si le clic n'est PAS à l'intérieur du conteneur du dropdown
            if (dropdownContent && !event.target.closest('.dropdown') && dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
            }
        });
    }
});

