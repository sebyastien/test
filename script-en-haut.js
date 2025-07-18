document.addEventListener('DOMContentLoaded', function() {
    // Obtenir le bouton
    var mybutton = document.getElementById("scrollToTopBtn");

    // Quand l'utilisateur fait défiler la page de 20px depuis le haut, affiche le bouton
    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    // Quand l'utilisateur clique sur le bouton, faire défiler vers le haut de la page
    mybutton.addEventListener('click', function() {
        // Pour un défilement doux
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        // Pour un défilement instantané (alternative)
        // document.body.scrollTop = 0; // Pour Safari
        // document.documentElement.scrollTop = 0; // Pour Chrome, Firefox, IE et Opera
    });
});