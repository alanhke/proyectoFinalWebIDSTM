// Get parameters from URL or localStorage or use defaults
const urlParams = new URLSearchParams(window.location.search);
const savedConfig = JSON.parse(localStorage.getItem('exerciseConfig')) || {};

const lang = urlParams.get('lang') || savedConfig.lang || 'es';
const level = urlParams.get('level') || savedConfig.level || 'beginner';
const topic = urlParams.get('topic') || savedConfig.topic || 'grammar';

// Use data from questions.js
const allQuestions = questionData[lang]?.[level]?.[topic] || questionData['es']['beginner']['grammar'];

// Shuffle function (Fisher-Yates algorithm)
function shuffleArray(array) {
  const shuffled = [...array]; // Create a copy
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Randomize questions and select only 3
const exercises = shuffleArray(allQuestions).slice(0, 3);

let currentExerciseIndex = 0;
let selectedOption = null;

// DOM Elements
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

function loadExercise() {
  const currentExercise = exercises[currentExerciseIndex];

  // Reset UI
  questionText.textContent = currentExercise.question;
  optionsContainer.innerHTML = '';
  selectedOption = null;
  checkBtn.disabled = true;
  checkBtn.classList.remove('d-none');
  nextBtn.classList.add('d-none');
  feedbackArea.classList.add('d-none');
  footer.classList.remove('footer-correct', 'footer-incorrect');

  // Shuffle options to randomize button positions
  const shuffledOptions = shuffleArray(currentExercise.options);

  // Create Options
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
  // Remove selected class from all buttons
  const buttons = optionsContainer.querySelectorAll('button');
  buttons.forEach(b => b.classList.remove('selected'));

  // Add selected class to clicked button
  btn.classList.add('selected');
  selectedOption = option;
  checkBtn.disabled = false;
}

function checkAnswer() {
  const currentExercise = exercises[currentExerciseIndex];
  const isCorrect = selectedOption === currentExercise.correct;

  // Show Feedback
  feedbackArea.classList.remove('d-none');
  checkBtn.classList.add('d-none');
  nextBtn.classList.remove('d-none');

  if (isCorrect) {
    footer.classList.add('footer-correct');
    feedbackTitle.textContent = '¡Buen trabajo!';
    feedbackTitle.className = 'mb-0 fw-bold text-success';
    feedbackIcon.className = 'rounded-circle bg-success text-white d-flex align-items-center justify-content-center';
    feedbackIcon.innerHTML = '<i class="fa-solid fa-check"></i>';
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

  if (currentExerciseIndex < exercises.length) {
    loadExercise();
  } else {
    // Finish
    alert('¡Felicidades! Has completado la lección.');
    window.location.href = 'task.html';
  }
}

function updateProgress() {
  const progress = (currentExerciseIndex / exercises.length) * 100;
  progressBar.style.width = `${progress}%`;
  progressBar.setAttribute('aria-valuenow', progress);
}

// Event Listeners
checkBtn.addEventListener('click', checkAnswer);
nextBtn.addEventListener('click', nextExercise);

// Initialize
loadExercise();
