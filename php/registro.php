<?php
session_set_cookie_params(0, '/');
session_start();
require_once(__DIR__ . '/../database.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'] ?? '';
    $email = $_POST['correo'] ?? '';
    $password = $_POST['password'] ?? '';
    $password2 = $_POST['password2'] ?? '';

    // Validaciones básicas
    if (empty($nombre) || empty($email) || empty($password) || empty($password2)) {
        echo "<script>alert('Todos los campos son obligatorios'); window.location.href='../registro.php';</script>";
        exit();
    }

    if ($password !== $password2) {
        echo "<script>alert('Las contraseñas no coinciden'); window.location.href='../registro.php';</script>";
        exit();
    }

    if (strlen($password) < 6) {
        echo "<script>alert('La contraseña debe tener al menos 6 caracteres'); window.location.href='../registro.php';</script>";
        exit();
    }

    try {
        // Verificar si el correo ya existe
        $sql = "SELECT id FROM users WHERE email = ?";
        $stmt = $pdo->prepare($sql);
        $stmt->execute([$email]);
        
        if ($stmt->fetch()) {
            echo "<script>alert('Este correo ya está registrado'); window.location.href='../registro.php';</script>";
            exit();
        }

        // Hashear la contraseña
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        // Insertar nuevo usuario
        $sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
        $stmt = $pdo->prepare($sql);
        
        if ($stmt->execute([$nombre, $email, $hashedPassword])) {
            // Obtener el ID del usuario recién creado
            $userId = $pdo->lastInsertId();
            
            // Iniciar sesión automáticamente
            $_SESSION['user'] = [
                'id' => $userId,
                'name' => $nombre,
                'email' => $email
            ];
            
            // Redirigir a config.php
            echo "<script>alert('¡Registro exitoso! Bienvenido, " . htmlspecialchars($nombre) . "'); window.location.href='../config.php';</script>";
            exit();
        } else {
            echo "<script>alert('Error al registrar el usuario'); window.location.href='../registro.php';</script>";
            exit();
        }
    } catch (Exception $e) {
        error_log("Error en registro: " . $e->getMessage());
        echo "<script>alert('Error al registrar el usuario'); window.location.href='../registro.php';</script>";
        exit();
    }

} else {
    header("Location: ../registro.php");
    exit();
}
?>
