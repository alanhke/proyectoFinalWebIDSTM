<?php
define('OLLAMA_API_URL', 'http://10.0.2.2:11434/api/generate');

define('OLLAMA_MODEL', 'qwen2.5:7b');

/**
 * Función helper para llamar a Ollama
 */
function callOllama($prompt, $format = 'json') {
    $data = [
        'model' => OLLAMA_MODEL,
        'prompt' => $prompt,
        'stream' => false
    ];
    
    if ($format === 'json') {
        $data['format'] = 'json';
    }
    
    $ch = curl_init(OLLAMA_API_URL);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    curl_setopt($ch, CURLOPT_TIMEOUT, 300); // 5 minutos timeout
    
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    
    if (curl_errno($ch)) {
        $error = curl_error($ch);
        curl_close($ch);
        throw new Exception("Error conectando con Ollama: $error");
    }
    
    curl_close($ch);
    
    if ($httpCode !== 200) {
        throw new Exception("Ollama respondió con código $httpCode");
    }
    
    $result = json_decode($response, true);
    
    if (!isset($result['response'])) {
        throw new Exception("Respuesta inválida de Ollama");
    }
    
    // Si pedimos JSON, parsearlo
    if ($format === 'json') {
        return json_decode($result['response'], true);
    }
    
    return $result['response'];
}

/**
 * Verificar si Ollama está disponible
 */
function isOllamaAvailable() {
    try {
        $ch = curl_init(str_replace('/api/generate', '/api/tags', OLLAMA_API_URL));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_TIMEOUT, 5);
        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);
        
        return $httpCode === 200;
    } catch (Exception $e) {
        return false;
    }
}
?>
