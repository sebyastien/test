document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get('status');
    const notificationDiv = document.getElementById('notification-message');
    let timeoutId; // Pour stocker l'ID du timeout afin de pouvoir l'annuler

    if (notificationDiv) { // S'assurer que la div de notification existe

        if (status) {
            // Nettoyer l'URL immédiatement après avoir lu le statut
            history.replaceState(null, '', window.location.pathname);

            let messageContent = '';
            let messageClass = ''; // Utilisera 'success' ou 'error'

            if (status === 'success') {
                messageContent = "Votre message a été envoyé avec succès ! Nous vous répondrons bientôt.";
                messageClass = 'success';
            } else if (status === 'error') {
                const errorMsg = urlParams.get('msg');
                if (errorMsg === 'champs_manquants') {
                    messageContent = "Veuillez remplir tous les champs du formulaire.";
                } else if (errorMsg === 'soumission_incorrecte') {
                    messageContent = "La soumission du formulaire est invalide.";
                } else {
                    messageContent = "Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer.";
                }
                messageClass = 'error';
            }

            notificationDiv.textContent = messageContent;
            notificationDiv.classList.add(messageClass);
            
            // --- Déclencher le fondu en entrée ---
            // 1. Rendre la div visible (display: block) SANS transition, juste avant d'appliquer l'animation
            notificationDiv.style.display = 'block';

            // 2. Un petit délai est nécessaire pour que le navigateur ait le temps
            //    d'appliquer 'display: block' avant d'appliquer l'état 'message-show'
            //    et que la transition CSS soit visible.
            setTimeout(() => {
                notificationDiv.classList.add('message-show'); // Ajoute la classe pour l'affichage avec transition
            }, 50); // Un très court délai (ex: 50ms)

            // --- Masquer automatiquement le message après quelques secondes ---
            const displayDuration = (status === 'success') ? 5000 : 8000; // 5s pour succès, 8s pour erreur

            timeoutId = setTimeout(() => {
                notificationDiv.classList.remove('message-show'); // Retire la classe d'affichage pour déclencher le fondu en sortie

                // 3. Après la fin de l'animation de fondu en sortie, masquer complètement la div
                //    La durée du setTimeout doit correspondre à la durée de la transition CSS (0.5s = 500ms)
                //    Plus un petit tampon pour s'assurer que l'animation est bien terminée.
                setTimeout(() => {
                    notificationDiv.style.display = 'none'; // Cache la div et retire son espace
                    notificationDiv.textContent = ''; // Nettoyer le contenu
                    notificationDiv.classList.remove('success', 'error'); // Nettoyer les classes de style
                }, 600); // 500ms (transition) + 100ms (tampon)

            }, displayDuration);

        } else {
            // Si aucun statut n'est présent dans l'URL ou si la page est chargée normalement,
            // s'assurer que la div est cachée et n'occupe pas d'espace.
            notificationDiv.style.display = 'none';
            notificationDiv.classList.remove('message-show'); // Assurez-vous qu'elle n'a pas cette classe
            notificationDiv.textContent = '';
            notificationDiv.classList.remove('success', 'error');
        }
    }
});