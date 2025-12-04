const urlParams = new URLSearchParams(window.location.search);
const currentDay = parseInt(urlParams.get('day')) || 1;

let exercises = [];
let currentExerciseIndex = 0;
let selectedOption = null;
let correctAnswersCount = 0;

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const checkBtn = document.getElementById('check-btn');
const nextBtn = document.getElementById('next-btn');
const feedbackArea = document.getElementById('feedback-area');
const feedbackTitle = document.getElementById('feedback-title');
const feedbackMessage = document.getElementById('feedback-message');
const feedbackIcon = document.getElementById('feedback-icon');
const footer = document.querySelector('footer');
const progressBar = document.getElementById('progress-bar');

async function initExercises() {
  try {
    // Cargar el plan de estudios completo
    const response = await fetch('php/complete_study_plan.php?action=get');
    const data = await response.json();

    if (data.success && data.plan && data.plan.dias) {
      // Buscar el día actual
      const dayData = data.plan.dias.find(d => d.numero === currentDay);

      if (dayData && dayData.ejercicios) {
        // Mapear ejercicios al formato interno
        exercises = dayData.ejercicios.map(ex => ({
          question: ex.pregunta,
          options: ex.opciones,
          correct: ex.opciones[ex.correcta] // Convertir índice a valor string
        }));

        // Actualizar tema
        const titleElement = document.querySelector('h2');
        if (titleElement && dayData.tema) {
          titleElement.textContent = `Día ${currentDay}: ${dayData.tema}`;
        }

        loadExercise();
      } else {
        alert('No se encontraron ejercicios para este día.');
        window.location.href = 'task.php';
      }
    } else {
      console.error('No se pudo cargar el plan de estudios');
      alert('Error cargando el plan. Por favor intenta regenerarlo.');
      window.location.href = 'task.php';
    }
  } catch (error) {
    console.error('Error inicializando ejercicios:', error);
    alert('Error de conexión.');
  }
}

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function loadExercise() {
  if (currentExerciseIndex >= exercises.length) {
    finishLesson();
    return;
  }

  const currentExercise = exercises[currentExerciseIndex];

  // Actualizar UI
  questionText.textContent = currentExercise.question;
  optionsContainer.innerHTML = '';
  selectedOption = null;

  checkBtn.disabled = true;
  checkBtn.classList.remove('d-none');
  nextBtn.classList.add('d-none');
  feedbackArea.classList.add('d-none');
  footer.classList.remove('footer-correct', 'footer-incorrect');

  // Randomizar orden de opciones
  const shuffledOptions = shuffleArray(currentExercise.options);

  shuffledOptions.forEach(option => {
    const btn = document.createElement('button');
    btn.className = 'btn btn-outline-secondary btn-lg rounded-4 py-3 fw-bold';
    btn.textContent = option;
    btn.onclick = () => selectOption(btn, option);
    optionsContainer.appendChild(btn);
  });

  updateProgress();
}

function selectOption(btn, option) {
  const buttons = optionsContainer.querySelectorAll('button');
  buttons.forEach(b => b.classList.remove('selected'));

  btn.classList.add('selected');
  selectedOption = option;
  checkBtn.disabled = false;
}

async function checkAnswer() {
  const currentExercise = exercises[currentExerciseIndex];
  const isCorrect = selectedOption === currentExercise.correct;

  // UI Feedback
  feedbackArea.classList.remove('d-none');
  checkBtn.classList.add('d-none');
  nextBtn.classList.remove('d-none');

  if (isCorrect) {
    footer.classList.add('footer-correct');
    feedbackTitle.textContent = '¡Buen trabajo!';
    feedbackTitle.className = 'mb-0 fw-bold text-success';
    feedbackMessage.classList.add('d-none');
    feedbackMessage.textContent = '';
    feedbackIcon.className = 'rounded-circle bg-success text-white d-flex align-items-center justify-content-center';
    feedbackIcon.innerHTML = '<i class="fa-solid fa-check"></i>';

    correctAnswersCount++;

    // Guardar progreso
    await saveExerciseProgress(currentDay, currentExerciseIndex + 1, true);
  } else {
    footer.classList.add('footer-incorrect');
    feedbackTitle.textContent = 'Solución correcta:';
    feedbackTitle.className = 'mb-0 fw-bold text-danger';
    feedbackMessage.textContent = currentExercise.correct;
    feedbackMessage.classList.remove('d-none');
    feedbackIcon.className = 'rounded-circle bg-danger text-white d-flex align-items-center justify-content-center';
    feedbackIcon.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  }
}

function nextExercise() {
  currentExerciseIndex++;
  loadExercise();
}

function finishLesson() {
  if (correctAnswersCount === exercises.length) {
    alert('¡Felicidades! Has completado la lección correctamente.');
    window.location.href = 'task.php';
  } else {
    const retry = confirm(`Has acertado ${correctAnswersCount} de ${exercises.length}. ¿Quieres intentarlo de nuevo?`);
    if (retry) {
      location.reload();
    } else {
      window.location.href = 'task.php';
    }
  }
}

function updateProgress() {
  const progress = (currentExerciseIndex / exercises.length) * 100;
  progressBar.style.width = `${progress}%`;
  progressBar.setAttribute('aria-valuenow', progress);
}

async function saveExerciseProgress(lessonNumber, exerciseNumber, isCorrect) {
  try {
    const formData = new FormData();
    formData.append('action', 'complete_exercise');
    formData.append('lesson_number', lessonNumber);
    formData.append('exercise_number', exerciseNumber);
    formData.append('is_correct', isCorrect ? '1' : '0');

    await fetch('php/progress_api.php', {
      method: 'POST',
      body: formData
    });
  } catch (error) {
    console.error('Error guardando progreso:', error);
  }
}

checkBtn.addEventListener('click', checkAnswer);
nextBtn.addEventListener('click', nextExercise);

initExercises();
