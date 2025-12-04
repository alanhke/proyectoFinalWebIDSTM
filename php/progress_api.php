<?php

session_set_cookie_params(0, '/');
session_start();
require_once(__DIR__ . '/../database.php');

header('Content-Type: application/json');

// Verificar que el usuario esté autenticado
if (!isset($_SESSION['user']['id'])) {
    http_response_code(401);
    echo json_encode(['error' => 'No autenticado']);
    exit();
}

$userId = $_SESSION['user']['id'];
$action = $_POST['action'] ?? $_GET['action'] ?? '';

try {
    switch ($action) {
        case 'get_progress':
            // Obtener progreso de los 7 días
            $progress = [];
            for ($day = 1; $day <= 7; $day++) {
                $stmt = $pdo->prepare("SELECT * FROM user_progress WHERE user_id = ? AND lesson_id = ?");
                $stmt->execute([$userId, $day]);
                $dayProgress = $stmt->fetch(PDO::FETCH_ASSOC);
                
                if (!$dayProgress) {
                    // Crear registro si no existe
                    $isUnlocked = ($day == 1) ? 1 : 0;
                    $stmt = $pdo->prepare("INSERT INTO user_progress (user_id, lesson_id, exercises_completed, progress_percentage, is_unlocked, is_completed) VALUES (?, ?, 0, 0, ?, 0)");
                    $stmt->execute([$userId, $day, $isUnlocked]);
                    
                    $dayProgress = [
                        'lesson_number' => $day,
                        'exercises_completed' => 0,
                        'progress_percentage' => 0,
                        'is_unlocked' => $isUnlocked,
                        'is_completed' => 0
                    ];
                } else {
                    $dayProgress['lesson_number'] = $day;
                }
                
                $progress[] = $dayProgress;
            }
            
            echo json_encode(['success' => true, 'progress' => $progress]);
            break;

        case 'complete_exercise':
            // Registrar ejercicio completado
            $lessonNumber = $_POST['lesson_number'] ?? 0;
            $exerciseNumber = $_POST['exercise_number'] ?? 0;
            $isCorrect = isset($_POST['is_correct']) ? (int)$_POST['is_correct'] : 0;

            if (!$lessonNumber || !$exerciseNumber) {
                throw new Exception('Faltan parámetros');
            }

            // Verificar si ya existe progreso para este día
            $stmt = $pdo->prepare("SELECT * FROM user_progress WHERE user_id = ? AND lesson_id = ?");
            $stmt->execute([$userId, $lessonNumber]);
            $progress = $stmt->fetch(PDO::FETCH_ASSOC);

            if (!$progress) {
                // Crear registro inicial
                $stmt = $pdo->prepare("INSERT INTO user_progress (user_id, lesson_id, exercises_completed, progress_percentage, is_unlocked, is_completed) VALUES (?, ?, 0, 0, ?, 0)");
                $stmt->execute([$userId, $lessonNumber, ($lessonNumber == 1 ? 1 : 0)]);
                
                $stmt = $pdo->prepare("SELECT * FROM user_progress WHERE user_id = ? AND lesson_id = ?");
                $stmt->execute([$userId, $lessonNumber]);
                $progress = $stmt->fetch(PDO::FETCH_ASSOC);
            }

            // Incrementar contador solo si la respuesta es correcta
            if ($isCorrect) {
                $exercisesCompleted = $progress['exercises_completed'] + 1;
                $progressPercentage = ($exercisesCompleted / 3) * 100; // 3 ejercicios por día
                $isCompleted = ($exercisesCompleted >= 3) ? 1 : 0;

                // Actualizar progreso
                $stmt = $pdo->prepare("UPDATE user_progress SET exercises_completed = ?, progress_percentage = ?, is_completed = ? WHERE user_id = ? AND lesson_id = ?");
                $stmt->execute([$exercisesCompleted, $progressPercentage, $isCompleted, $userId, $lessonNumber]);

                // Si completó los 3 ejercicios, desbloquear el siguiente día
                if ($isCompleted) {
                    $nextLessonNumber = $lessonNumber + 1;
                    
                    // Verificar si existe el siguiente día (máximo 7)
                    if ($nextLessonNumber <= 7) {
                        // Verificar si ya existe el registro
                        $stmt = $pdo->prepare("SELECT id FROM user_progress WHERE user_id = ? AND lesson_id = ?");
                        $stmt->execute([$userId, $nextLessonNumber]);
                        $nextProgress = $stmt->fetch(PDO::FETCH_ASSOC);

                        if ($nextProgress) {
                            // Actualizar para desbloquear
                            $stmt = $pdo->prepare("UPDATE user_progress SET is_unlocked = 1 WHERE user_id = ? AND lesson_id = ?");
                            $stmt->execute([$userId, $nextLessonNumber]);
                        } else {
                            // Crear registro desbloqueado
                            $stmt = $pdo->prepare("INSERT INTO user_progress (user_id, lesson_id, exercises_completed, progress_percentage, is_unlocked, is_completed) VALUES (?, ?, 0, 0, 1, 0)");
                            $stmt->execute([$userId, $nextLessonNumber]);
                        }
                    }
                }

                echo json_encode([
                    'success' => true,
                    'exercises_completed' => $exercisesCompleted,
                    'progress_percentage' => $progressPercentage,
                    'is_completed' => $isCompleted
                ]);
            } else {
                // Respuesta incorrecta - no actualizar progreso
                echo json_encode([
                    'success' => true,
                    'exercises_completed' => $progress['exercises_completed'],
                    'progress_percentage' => $progress['progress_percentage'],
                    'is_completed' => $progress['is_completed']
                ]);
            }
            break;

        case 'get_config':
            // Obtener configuración del usuario
            $stmt = $pdo->prepare("SELECT preferred_language, preferred_level, preferred_topic FROM users WHERE id = ?");
            $stmt->execute([$userId]);
            $config = $stmt->fetch(PDO::FETCH_ASSOC);
            
            if (!$config) {
                // Si no hay config (raro), devolver defaults
                echo json_encode([
                    'success' => true, 
                    'config' => [
                        'lang' => 'es',
                        'level' => 'beginner',
                        'topic' => 'grammar'
                    ]
                ]);
            } else {
                echo json_encode([
                    'success' => true, 
                    'config' => [
                        'lang' => $config['preferred_language'] ?? 'es',
                        'level' => $config['preferred_level'] ?? 'beginner',
                        'topic' => $config['preferred_topic'] ?? 'grammar'
                    ]
                ]);
            }
            break;

        case 'save_config':
            // Guardar configuración
            $lang = $_POST['lang'] ?? 'es';
            $level = $_POST['level'] ?? 'beginner';
            $topic = $_POST['topic'] ?? 'grammar';
            
            // Validar valores
            $validLangs = ['es', 'en', 'fr'];
            $validLevels = ['beginner', 'intermediate', 'advanced'];
            $validTopics = ['work', 'tourism', 'grammar'];
            
            if (!in_array($lang, $validLangs)) {
                throw new Exception('Idioma no válido');
            }
            if (!in_array($level, $validLevels)) {
                throw new Exception('Nivel no válido');
            }
            if (!in_array($topic, $validTopics)) {
                throw new Exception('Tema no válido');
            }
            
            // Ejecutar UPDATE
            $stmt = $pdo->prepare("UPDATE users SET preferred_language = ?, preferred_level = ?, preferred_topic = ? WHERE id = ?");
            $result = $stmt->execute([$lang, $level, $topic, $userId]);
            
            if (!$result) {
                throw new Exception('Error al actualizar la base de datos');
            }
            
            // Verificar que se actualizó al menos una fila
            $rowCount = $stmt->rowCount();
            
            // Eliminar plan de estudio anterior para forzar regeneración
            $stmt = $pdo->prepare("DELETE FROM user_study_plans WHERE user_id = ?");
            $stmt->execute([$userId]);
            
            // Resetear progreso del usuario a Día 1
            $stmt = $pdo->prepare("DELETE FROM user_progress WHERE user_id = ?");
            $stmt->execute([$userId]);
            
            echo json_encode([
                'success' => true,
                'updated' => true,
                'rows_affected' => $rowCount,
                'config' => [
                    'lang' => $lang,
                    'level' => $level,
                    'topic' => $topic
                ]
            ]);
            break;

        default:
            throw new Exception('Acción no válida');
    }

} catch (Exception $e) {
    http_response_code(400);
    echo json_encode(['error' => $e->getMessage()]);
}
?>
