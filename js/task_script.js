function init() {
    console.log('Script loaded');
    const logoutBtn = document.getElementById('logout-btn');

    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (confirm('¿Estás seguro de que quieres cerrar sesión?')) {
                localStorage.removeItem('user');
                window.location.href = 'index.php';
            }
        });
    }

    // Cargar el plan de estudios
    loadStudyPlan();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Cargar plan desde la API
async function loadStudyPlan() {
    const container = document.getElementById('lessons-container');
    if (!container) return;

    try {
        const response = await fetch('php/complete_study_plan.php?action=get');
        const data = await response.json();

        if (data.success && data.plan) {
            renderStudyPlan(data.plan, container);
            // Después de renderizar, cargar el progreso
            loadProgress();
        } else {
            // No hay plan, mostrar botón para generar
            container.innerHTML = `
                <div class="col-12 text-center py-5">
                    <div class="mb-4">
                        <i class="fa-solid fa-robot fa-4x text-duo-primary mb-3"></i>
                        <h3>¡Crea tu plan de estudio con IA!</h3>
                        <p class="text-muted">No tienes un plan activo. La IA puede generar uno personalizado para ti.</p>
                    </div>
                    <a href="test_complete_plan.php" class="btn btn-lg btn-duo-primary">
                        <i class="fa-solid fa-wand-magic-sparkles me-2"></i>Generar Plan Ahora
                    </a>
                </div>
            `;
        }
    } catch (error) {
        console.error('Error cargando plan:', error);
        container.innerHTML = `
            <div class="col-12 text-center py-5 text-danger">
                <i class="fa-solid fa-triangle-exclamation fa-3x mb-3"></i>
                <p>Error al cargar el plan de estudios. Por favor recarga la página.</p>
            </div>
        `;
    }
}

// Renderizar las tarjetas del plan
function renderStudyPlan(plan, container) {
    container.innerHTML = ''; // Limpiar container

    // Asegurar que dias es un array
    const dias = plan.dias || [];
    
    dias.forEach((dia, index) => {
        const dayNumber = dia.numero || (index + 1);
        const isLocked = dayNumber > 1; // Por defecto bloqueados excepto el 1
        
        const cardHtml = `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
          <section class="card border-0 shadow-sm h-100 lesson-card ${isLocked ? 'locked' : ''}" data-day="${dayNumber}">
            <div class="card-body d-flex flex-column align-items-center text-center position-relative">
              ${isLocked ? `
              <div class="lock-overlay d-flex align-items-center justify-content-center">
                <i class="fa-solid fa-lock fa-3x text-white opacity-75"></i>
              </div>` : ''}
              
              <div class="progress w-100 mb-3" style="height: 10px;">
                <div class="progress-bar bg-duo-green" role="progressbar" style="width: 0%"></div>
              </div>
              
              <h3 class="card-title fw-bold text-duo-dark mb-1">Día ${dayNumber}</h3>
              <small class="text-muted mb-3 text-truncate w-100" title="${dia.tema}">${dia.tema}</small>
              
              <figure class="card-media rounded overflow-hidden mb-3">
                <img src="img/ComidaMexicana1.jpg" alt="Tema del día" class="img-fluid" />
              </figure>
              
              <p class="card-status text-muted small mb-3"><strong>0%</strong> Completado</p>
              
              <div class="card-list w-100 text-start mb-3 small">
                <p class="fw-bold mb-1">Ejercicios:</p>
                <ul class="list-unstyled ps-2">
                  <li><i class="fa-solid fa-circle-xmark text-secondary me-1"></i> 1 - Pendiente</li>
                  <li><i class="fa-solid fa-circle-xmark text-secondary me-1"></i> 2 - Pendiente</li>
                  <li><i class="fa-solid fa-circle-xmark text-secondary me-1"></i> 3 - Pendiente</li>
                </ul>
              </div>
              
              <a href="exercises.php?day=${dayNumber}" 
                 class="btn ${isLocked ? 'btn-secondary disabled' : 'btn-duo-primary'} w-100 mt-auto" 
                 ${isLocked ? 'tabindex="-1" aria-disabled="true"' : ''}>
                 ${isLocked ? 'Bloqueado' : 'Practicar'}
              </a>
            </div>
          </section>
        </div>
        `;
        
        container.insertAdjacentHTML('beforeend', cardHtml);
    });
}

// Cargar progreso desde la base de datos
async function loadProgress() {
    try {
        const response = await fetch('php/progress_api.php?action=get_progress');
        const data = await response.json();

        if (data.success && data.progress) {
            console.log('Progreso cargado:', data.progress);
            data.progress.forEach(lesson => {
                updateLessonCard(lesson);
            });
        }
    } catch (error) {
        console.error('Error al cargar progreso:', error);
    }
}

// Actualizar tarjeta de lección con el progreso
function updateLessonCard(lesson) {
    const card = document.querySelector(`.lesson-card[data-day="${lesson.lesson_number}"]`);
    if (!card) return;

    // Actualizar barra de progreso
    const progressBar = card.querySelector('.progress-bar');
    if (progressBar) {
        const percentage = Math.round(lesson.progress_percentage);
        progressBar.style.width = `${percentage}%`;
    }

    // Actualizar texto de porcentaje
    const statusText = card.querySelector('.card-status strong');
    if (statusText) {
        statusText.textContent = `${Math.round(lesson.progress_percentage)}%`;
    }

    // Actualizar lista de actividades
    const activityList = card.querySelector('.card-list ul');
    if (activityList) {
        const items = activityList.querySelectorAll('li');
        for (let i = 0; i < items.length; i++) {
            const exerciseNumber = i + 1;
            const item = items[i];
            
            if (exerciseNumber <= lesson.exercises_completed) {
                item.innerHTML = `<i class="fa-solid fa-circle-check text-success me-1"></i> ${exerciseNumber} - Completo`;
            } else {
                item.innerHTML = `<i class="fa-solid fa-circle-xmark text-secondary me-1"></i> ${exerciseNumber} - Pendiente`;
            }
        }
    }

    // Manejar desbloqueo
    if (lesson.is_unlocked) {
        unlockCard(card, lesson.lesson_number, lesson.is_completed);
    }
}

function unlockCard(card, dayNumber, isCompleted) {
    card.classList.remove('locked');
    
    const lockOverlay = card.querySelector('.lock-overlay');
    if (lockOverlay) lockOverlay.remove();

    const btn = card.querySelector('a.btn');
    if (btn) {
        btn.classList.remove('btn-secondary', 'disabled');
        btn.classList.add('btn-duo-primary');
        btn.href = `exercises.php?day=${dayNumber}`;
        btn.textContent = isCompleted ? 'Repasar' : 'Practicar';
        btn.removeAttribute('tabindex');
        btn.removeAttribute('aria-disabled');
    }
}
