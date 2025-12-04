<?php
/**
 * API para generar plan completo de 7 días con ejercicios
 * Basado en los requisitos del proyecto
 */

session_set_cookie_params(0, '/');
session_start();
require_once(__DIR__ . '/../database.php');
require_once(__DIR__ . '/../ollama_config.php');

header('Content-Type: application/json');
set_time_limit(300); // 5 minutos de ejecución máxima

// Verificar autenticación
if (!isset($_SESSION['user']['id'])) {
    http_response_code(401);
    echo json_encode(['error' => 'No autenticado']);
    exit();
}

$userId = $_SESSION['user']['id'];
$action = $_GET['action'] ?? 'generate';

try {
    if ($action === 'get') {
        // Obtener plan guardado
        $stmt = $pdo->prepare("SELECT study_plan, generated_at FROM user_study_plans WHERE user_id = ? ORDER BY generated_at DESC LIMIT 1");
        $stmt->execute([$userId]);
        $saved = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if ($saved) {
            echo json_encode([
                'success' => true,
                'plan' => json_decode($saved['study_plan'], true),
                'generated_at' => $saved['generated_at'],
                'cached' => true
            ]);
            exit();
        } else {
            // No hay plan guardado, generar uno nuevo
            $action = 'generate';
        }
    }
    
    if ($action === 'generate') {
        // Obtener configuración del usuario
        $stmt = $pdo->prepare("SELECT preferred_language, preferred_level, preferred_topic FROM users WHERE id = ?");
        $stmt->execute([$userId]);
        $config = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if (!$config) {
            throw new Exception('Configuración de usuario no encontrada');
        }
        
        $lang = $config['preferred_language'] ?? 'es';
        $level = $config['preferred_level'] ?? 'beginner';
        $topic = $config['preferred_topic'] ?? 'grammar';
        
        // Mapear a nombres completos para el prompt
        $langNames = ['es' => 'Español', 'en' => 'Inglés', 'fr' => 'Francés'];
        $levelNames = ['beginner' => 'Principiante', 'intermediate' => 'Intermedio', 'advanced' => 'Avanzado'];
        $topicNames = ['work' => 'trabajo y negocios', 'tourism' => 'turismo y viajes', 'grammar' => 'gramática general'];
        
        $langName = $langNames[$lang] ?? 'Español';
        $levelName = $levelNames[$level] ?? 'Principiante';
        $topicName = $topicNames[$topic] ?? 'gramática';
        
        // Crear prompt para Ollama
        $prompt = "Genera un plan de estudio de 7 días para aprender $langName (nivel $levelName) enfocado en $topicName.

Para CADA DÍA necesito:
- Un número (1 al 7)
- Un tema específico del día (relacionado con $topicName)
- Exactamente 3 ejercicios de opción múltiple en $langName

Cada ejercicio debe tener:
- 'pregunta': Una frase con un espacio en blanco indicado por ___
- 'opciones': Array con exactamente 3 opciones (strings)
- 'correcta': Índice (0, 1 o 2) de la opción correcta

Formato JSON:
{
  \"dias\": [
    {
      \"numero\": 1,
      \"tema\": \"Saludos básicos\",
      \"ejercicios\": [
        {
          \"pregunta\": \"Hello, my name ___ John.\",
          \"opciones\": [\"am\", \"is\", \"are\"],
          \"correcta\": 1
        },
        {
          \"pregunta\": \"Nice to ___ you.\",
          \"opciones\": [\"meet\", \"meat\", \"met\"],
          \"correcta\": 0
        },
        {
          \"pregunta\": \"How ___ you?\",
          \"opciones\": [\"is\", \"am\", \"are\"],
          \"correcta\": 2
        }
      ]
    }
  ]
}

IMPORTANTE:
- Genera los 7 días completos
- Cada día con exactamente 3 ejercicios
- Solo responde con el JSON, sin texto adicional
- Los temas deben progresar de simple a más complejo";

        // Llamar a Ollama
        $studyPlan = callOllama($prompt, 'json');
        
        if (!isset($studyPlan['dias']) || !is_array($studyPlan['dias'])) {
            throw new Exception('Formato de respuesta inválido de la IA');
        }
        
        // Validar estructura
        if (count($studyPlan['dias']) !== 7) {
            throw new Exception('El plan debe tener exactamente 7 días');
        }
        
        foreach ($studyPlan['dias'] as $dia) {
            if (!isset($dia['numero']) || !isset($dia['tema']) || !isset($dia['ejercicios'])) {
                throw new Exception('Estructura de día inválida');
            }
            if (count($dia['ejercicios']) !== 3) {
                throw new Exception('Cada día debe tener exactamente 3 ejercicios');
            }
            foreach ($dia['ejercicios'] as $ej) {
                if (!isset($ej['pregunta']) || !isset($ej['opciones']) || !isset($ej['correcta'])) {
                    throw new Exception('Estructura de ejercicio inválida');
                }
                if (count($ej['opciones']) !== 3) {
                    throw new Exception('Cada ejercicio debe tener exactamente 3 opciones');
                }
            }
        }
        
        // Guardar en base de datos
        $stmt = $pdo->prepare("INSERT INTO user_study_plans (user_id, study_plan, language, level, topic) VALUES (?, ?, ?, ?, ?)");
        $stmt->execute([
            $userId,
            json_encode($studyPlan),
            $lang,
            $level,
            $topic
        ]);
        
        echo json_encode([
            'success' => true,
            'plan' => $studyPlan,
            'config' => [
                'language' => $langName,
                'level' => $levelName,
                'topic' => $topicName
            ],
            'cached' => false
        ]);
    }
    
} catch (Exception $e) {
    error_log("ERROR en complete_study_plan.php: " . $e->getMessage());
    
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => $e->getMessage()
    ]);
}
?>
