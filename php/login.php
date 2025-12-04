<?php
session_set_cookie_params(0, '/');
session_start();
require_once(__DIR__ . '/../database.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';

    // Validar que los campos no estén vacíos
    if (empty($email) || empty($password)) {
        header("Location: ../login.php?error=1");
        exit();
    }

    try {
        // Buscar el usuario por email en la base de datos
        $sql = "SELECT * FROM users WHERE email = ?";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([$email]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        // Verificar si el usuario existe y la contraseña es correcta
        if ($user && password_verify($password, $user['password'])) {
            // Autenticación exitosa
            $_SESSION['user'] = [
                'id' => $user['id'],
                'name' => $user['name'],
                'email' => $user['email']
            ];
            session_write_close();
            header("Location: ../task.php");
            exit();
        } else {
            // Credenciales inválidas
            header("Location: ../login.php?error=1");
            exit();
        }
    } catch (Exception $e) {
        // Error de base de datos
        error_log("Error en login: " . $e->getMessage());
        header("Location: ../login.php?error=1");
        exit();
    }
} else {
    // Si no es POST, redirigir al login
    header("Location: ../login.php");
    exit();
}
?>
