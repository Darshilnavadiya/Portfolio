<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Retrieve form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $comment = htmlspecialchars($_POST['comment']);

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email address.";
        exit;
    }

    // Your email address (recipient)
    $to = "darshilnavadiya.work@gmail.com"; // Replace with your email address

    // Email subject
    $emailSubject = "Contact Form Submission: $subject";

    // Email body
    $emailBody = "
        Name: $name\n
        Email: $email\n
        Subject: $subject\n
        Message: \n$comment
    ";

    // Email headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send the email
    if (mail($to, $emailSubject, $emailBody, $headers)) {
        echo "Your message has been sent successfully.";
    } else {
        echo "Failed to send your message. Please try again.";
    }
} else {
    echo "Invalid request method.";
}
?>
