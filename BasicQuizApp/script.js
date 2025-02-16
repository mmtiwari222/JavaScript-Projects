const questions = [
  {
    question: "What is the capital of India?",
    answers: [
      { text: "Delhi", correct: true },
      { text: "Mumbai", correct: false },
      { text: "Chennai", correct: false },
      { text: "Kolkata", correct: false },
    ],
  },
  {
    question: "Who is the Prime Minister of India?",
    answers: [
      { text: "Amit Shah", correct: false },
      { text: "Rahul Gandhi", correct: false },
      { text: "Narendra Modi", correct: true },
      { text: "Arvind Kejriwal", correct: false },
    ],
  },
  {
    question: "What is National Animal of India?",
    answers: [
      { text: "Tiger", correct: true },
      { text: "Lion", correct: false },
      { text: "Elephant", correct: false },
      { text: "Deer", correct: false },
    ],
  },
  {
    question: "What is the National Anthem of India?",
    answers: [
      { text: "Jana Gana Mana", correct: true },
      { text: "Mere Desh ki Dharti", correct: false },
      { text: "Sujlam Suflam", correct: false },
      { text: "Ye mere vatan ke logo", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ".  " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  //   nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
