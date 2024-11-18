<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = htmlspecialchars(trim($_POST['name']));
  $email = htmlspecialchars(trim($_POST['email']));
  $message = htmlspecialchars(trim($_POST['message']));

  $to = "agamriyandana7@gmail.com"; // Ganti dengan alamat email Anda
  $subject = "Pesan Baru dari $name";
  $headers = "From: $email" . "\r\n" .
             "Reply-To: $email" . "\r\n" .
             "Content-Type: text/plain; charset=UTF-8";

  $body = "Nama: $name\n";
  $body .= "Email: $email\n\n";
  $body .= "Pesan:\n$message\n";

  if (mail($to, $subject, $body, $headers)) {
    echo "<script>alert('Pesan berhasil dikirim!'); window.location.href = 'form.html';</script>";
  } else {
    echo "<script>alert('Pesan gagal dikirim. Silakan coba lagi.'); window.location.href = 'form.html';</script>";
  }
} else {
  header("Location: form.html");
  exit;
}
?>
