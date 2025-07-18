document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    // Changer pour querySelectorAll pour récupérer tous les boutons dropdown
    const dropbtns = document.querySelectorAll('.dropbtn');
    const dropdownContents = document.querySelectorAll('.dropdown-content');

    // Gérer l'ouverture/fermeture du menu hamburger
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
            // Fermer tous les sous-menus si le menu principal se ferme
            dropdownContents.forEach(content => {
                if (content) { // Vérifier que l'élément existe
                    content.classList.remove('show');
                }
            });
        });
    }

    // Gérer l'ouverture/fermeture de CHAQUE sous-menu au clic
    dropbtns.forEach((dropbtn, index) => { // Parcours tous les boutons dropbtn
        const dropdownContent = dropdownContents[index]; // Récupère le contenu correspondant
        if (dropbtn && dropdownContent) {
            dropbtn.addEventListener('click', function(event) {
                event.preventDefault(); // Empêche la navigation directe du 'dropbtn'
                
                // Fermer tous les AUTRES dropdowns avant d'ouvrir celui-ci
                dropdownContents.forEach((content, i) => {
                    if (content !== dropdownContent && content.classList.contains('show')) {
                        content.classList.remove('show');
                    }
                });

                dropdownContent.classList.toggle('show'); // Bascule la visibilité du sous-menu actuel
            });
        }
    });

    // Fermer TOUS les sous-menus si on clique en dehors de la zone d'un dropdown
    document.addEventListener('click', function(event) {
        dropdownContents.forEach(content => {
            // Vérifie si le clic n'est PAS à l'intérieur du conteneur du dropdown (parent .dropdown)
            // et si le sous-menu est actuellement ouvert
            if (content && !event.target.closest('.dropdown') && content.classList.contains('show')) {
                content.classList.remove('show');
            }
        });
    });
});