// Carousel Functionality
const images = document.querySelectorAll('.carousel-img');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
let currentIndex = 0;

function updateCarousel() {
  images.forEach((img, index) => {
    img.style.display = index === currentIndex ? 'block' : 'none';
  });
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
});

// Quiz Functionality
const quizData = [
  { question: 'What is Samsung’s flagship phone series?', answers: ['Galaxy S', 'Galaxy Note', 'Galaxy A'], correct: 0 },
  { question: 'Which year was Samsung founded?', answers: ['1938', '1948', '1958'], correct: 0 },
];

const quizContainer = document.getElementById('quiz-container');
let quizIndex = 0;

function loadQuiz() {
  if (quizIndex < quizData.length) {
    const quizItem = quizData[quizIndex];
    quizContainer.innerHTML = `
      <p>${quizItem.question}</p>
      ${quizItem.answers.map((ans, i) => `<button onclick="checkAnswer(${i})">${ans}</button>`).join('')}
    `;
  } else {
    quizContainer.innerHTML = '<p>Quiz completed! Thanks for playing.</p>';
  }
}

function checkAnswer(answerIndex) {
  if (answerIndex === quizData[quizIndex].correct) {
    alert('Correct!');
  } else {
    alert('Wrong answer.');
  }
  quizIndex++;
  loadQuiz();
}

loadQuiz();
