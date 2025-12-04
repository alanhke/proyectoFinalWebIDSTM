document.addEventListener('DOMContentLoaded', async () => {
    // Obtener todos los elementos de selección
    const langCards = document.querySelectorAll('.lang-card');
    const levelBtns = document.querySelectorAll('.level-btn');
    const topicBtns = document.querySelectorAll('.topic-btn');
    const saveBtn = document.getElementById('save-config-btn');

    // Cargar configuración desde la BD
    let currentConfig = {
        lang: 'es',
        level: 'beginner',
        topic: 'grammar'
    };

    try {
        const response = await fetch('php/progress_api.php?action=get_config');
        const data = await response.json();
        if (data.success && data.config) {
            currentConfig = data.config;
        }
    } catch (error) {
        console.error('Error cargando configuración:', error);
    }

    // Establecer selecciones iniciales
    updateUI(currentConfig);

    function updateUI(config) {
        // Idioma
        langCards.forEach(card => {
            if (card.dataset.lang === config.lang) {
                setActiveCard(card);
            } else {
                card.classList.remove('active');
                card.style.border = '';
                card.style.backgroundColor = '';
            }
        });

        // Nivel
        levelBtns.forEach(btn => {
            if (btn.dataset.level === config.level) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Tema
        topicBtns.forEach(btn => {
            if (btn.dataset.topic === config.topic) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    function setActiveCard(card) {
        card.classList.add('active');
        card.style.border = '2px solid #1cb0f6';
        card.style.backgroundColor = '#ddf4ff';
    }

    // Manejar clics en tarjetas de idioma
    langCards.forEach(card => {
        card.addEventListener('click', () => {
            langCards.forEach(c => {
                c.classList.remove('active');
                c.style.border = '';
                c.style.backgroundColor = '';
            });
            setActiveCard(card);
        });
    });

    // Manejar clics en botones de nivel
    levelBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            levelBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Manejar clics en botones de tema
    topicBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            topicBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Guardar configuración en BD
    saveBtn.addEventListener('click', async () => {
        const selectedLang = document.querySelector('.lang-card.active')?.dataset.lang || 'es';
        const selectedLevel = document.querySelector('.level-btn.active')?.dataset.level || 'beginner';
        const selectedTopic = document.querySelector('.topic-btn.active')?.dataset.topic || 'grammar';

        console.log('=== SAVING CONFIG ===');
        console.log('Language:', selectedLang);
        console.log('Level:', selectedLevel);
        console.log('Topic:', selectedTopic);

        const formData = new FormData();
        formData.append('action', 'save_config');
        formData.append('lang', selectedLang);
        formData.append('level', selectedLevel);
        formData.append('topic', selectedTopic);

        try {
            console.log('Sending request to progress_api.php...');
            const response = await fetch('php/progress_api.php', {
                method: 'POST',
                body: formData
            });

            console.log('Response status:', response.status);
            const data = await response.json();
            console.log('Response data:', data);


            if (data.success) {
                console.log('✓ Configuration saved successfully!');
                console.log('Rows affected:', data.rows_affected);

                // Cambiar estado del botón
                saveBtn.disabled = true;
                saveBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Generando plan...';

                try {
                    // Generar nuevo plan automáticamente
                    console.log('Triggering plan generation...');
                    const genResponse = await fetch('php/complete_study_plan.php?action=generate');
                    const genData = await genResponse.json();

                    if (genData.success) {
                        console.log('✓ Plan generated successfully!');
                        console.log('Plan data:', genData.plan);

                        // Cambiar botón a éxito
                        saveBtn.innerHTML = '<i class="fa-solid fa-check me-2"></i>¡Completado!';

                        setTimeout(() => {
                            window.location.href = 'task.php';
                        }, 500);
                    } else {
                        console.error('⚠ Plan generation failed:', genData.error);
                        alert('Configuración guardada, pero el plan no se generó correctamente: ' + (genData.error || 'Error desconocido') + '\n\nPor favor, recarga la página e intenta nuevamente.');

                        // Restaurar botón
                        saveBtn.disabled = false;
                        saveBtn.innerHTML = 'Guardar cambios';
                    }
                } catch (genError) {
                    console.error('✗ Error generating plan:', genError);
                    alert('Configuración guardada, pero hubo un error al generar el plan.\n\nPor favor, recarga la página e intenta nuevamente.');

                    // Restaurar botón
                    saveBtn.disabled = false;
                    saveBtn.innerHTML = 'Guardar cambios';
                }
            } else {
                console.error('✗ Save failed:', data);
                alert('Error al guardar la configuración: ' + (data.error || 'Unknown error'));
            }
        } catch (error) {
            console.error('✗ Error guardando configuración:', error);
            alert('Error de conexión al guardar: ' + error.message);
        }
    });
});
