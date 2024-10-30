<?php
// Configura la dirección de correo electrónico que recibirá el mensaje
$to = "contacto@petrovsci.com.mx";

// Obtén los datos del formulario
$name = isset($_POST['name']) ? strip_tags(trim($_POST['name'])) : '';
$email = isset($_POST['email']) ? filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL) : '';
$message = isset($_POST['message']) ? strip_tags(trim($_POST['message'])) : '';

// Verifica que los datos estén completos
if (empty($name) || empty($email) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    // Si falta algún campo, devuelve un error
    http_response_code(400);
    echo "Por favor completa todos los campos y proporciona un correo válido.";
    exit;
}

// Configura el asunto del correo
$subject = "Nuevo mensaje de contacto de $name";

// Construye el cuerpo del mensaje
$email_content = "Nombre: $name\n";
$email_content .= "Email: $email\n\n";
$email_content .= "Mensaje:\n$message\n";

// Establece las cabeceras del correo
$headers = "From: $name <$email>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Envía el correo
if (mail($to, $subject, $email_content, $headers)) {
    // Si el correo se envió correctamente
    http_response_code(200);
    echo "Mensaje enviado exitosamente";
} else {
    // Si el correo no se pudo enviar
    http_response_code(500);
    echo "Hubo un problema al enviar el mensaje. Inténtalo nuevamente.";
}
?>
