<?php
// Adresse email de destination (pas utilisée ici, mais gardée pour l'éventuelle mise en ligne)
$email_admin = "budokarateclubpontoise@gmail.com";
$objet = "Contact via le site web";

// Vérifie que le formulaire a bien été soumis en POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // Vérifie que tous les champs sont présents et non vides
    if (
        isset($_POST["name"], $_POST["email"], $_POST["subject"], $_POST["message"]) &&
        !empty(trim($_POST["name"])) &&
        !empty(trim($_POST["email"])) &&
        !empty(trim($_POST["subject"])) &&
        !empty(trim($_POST["message"]))
    ) {
        // Nettoyage et protection des données
        $name = htmlspecialchars(trim($_POST["name"]));
        $email = htmlspecialchars(trim($_POST["email"]));
        $subject = htmlspecialchars(trim($_POST["subject"]));
        $message_content = htmlspecialchars(trim($_POST["message"]));

        // Construction du message (version texte pour test local)
        $full_message = "Nom et Prénom: " . $name . "\n";
        $full_message .= "Email: " . $email . "\n";
        $full_message .= "Sujet: " . $subject . "\n\n";
        $full_message .= "Message:\n" . $message_content . "\n";
        $full_message .= "----------------------------------------\n";

        // Écriture dans un fichier pour tester en local
        $success = file_put_contents("mails-recus.txt", $full_message, FILE_APPEND);

        if ($success !== false) {
            header("Location: contact.html?status=success");
            exit();
        } else {
            header("Location: contact.html?status=error&msg=ecriture_echec");
            exit();
        }

    } else {
        header("Location: contact.html?status=error&msg=champs_manquants");
        exit();
    }
} else {
    header("Location: contact.html?status=error&msg=soumission_incorrecte");
    exit();
}



?>
