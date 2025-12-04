<?php
/**
 * resetear contraseña usando verificación de nombre
 */

require_once(__DIR__ . '/../database.php');

header('Content-Type: application/json');

// Solo permitir POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Método no permitido']);
    exit();
}

try {
    $email = $_POST['email'] ?? '';
    $name = $_POST['name'] ?? '';
    $newPassword = $_POST['new_password'] ?? '';
    
    // Validar campos requeridos
    if (empty($email) || empty($name) || empty($newPassword)) {
        throw new Exception('Todos los campos son requeridos');
    }
    
    // Validar email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        throw new Exception('Email inválido');
    }
    
    // Validar longitud de contraseña
    if (strlen($newPassword) < 6) {
        throw new Exception('La contraseña debe tener al menos 6 caracteres');
    }
    
    // Buscar usuario por email
    $stmt = $pdo->prepare("SELECT id, name FROM users WHERE email = ?");
    $stmt->execute([$email]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);
    
    // Verificar que el usuario existe Y el nombre coincide
    if (!$user) {
        throw new Exception('Los datos ingresados no coinciden con ninguna cuenta');
    }
    
    // Comparación del nombre
    if (strcasecmp(trim($user['name']), trim($name)) !== 0) {
        throw new Exception('Los datos ingresados no coinciden con ninguna cuenta');
    }
    
    // Hashear la nueva contraseña
    $hashedPassword = password_hash($newPassword, PASSWORD_DEFAULT);
    
    // Actualizar contraseña
    $stmt = $pdo->prepare("UPDATE users SET password = ? WHERE id = ?");
    $stmt->execute([$hashedPassword, $user['id']]);
    
    echo json_encode([
        'success' => true,
        'message' => 'Contraseña actualizada exitosamente'
    ]);
    
} catch (Exception $e) {
    http_response_code(400);
    echo json_encode(['error' => $e->getMessage()]);
}
?>
