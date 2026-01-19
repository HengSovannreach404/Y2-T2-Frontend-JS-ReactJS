// DOMS ELEMENTS  ---------------------------------------------------------
const dom_quiz = document.querySelector("#quiz");
const dom_question = document.querySelector("#question");
const dom_choiceA = document.querySelector("#A");
const dom_choiceB = document.querySelector("#B");
const dom_choiceC = document.querySelector("#C");
const dom_choiceD = document.querySelector("#D");
const dom_score = document.querySelector("#score");
const dom_start = document.querySelector("#start");
const dom_scoreText = document.querySelector("#scoreText");
const dom_scoreImage = document.querySelector("#scoreImage"); 

dom_start.addEventListener("click", onStart);

// DATA  ---------------------------------------------------------
let questions = [
  {
    title: "What does HTML stand for?",
    choiceA: "Hi Thierry More Laught",
    choiceB: "How To move Left",
    choiceC: "Ho Theary Missed the Laundry !",
    choiceD: "Hypertext Markup Language",
    correct: "D",
  },
  {
    title: "What does CSS stand for?",
    choiceA: "Cisco and Super Start",
    choiceB: "Ci So Sa",
    choiceC: "Cascading Style Sheets ",
    choiceD: "I don't know !",
    correct: "C",
  },
  {
    title: "What does JS stand for?",
    choiceA: "Junior stars",
    choiceB: "Justing Star",
    choiceC: "Javascript",
    choiceD: "RonanScript",
    correct: "C",
  },
];
let runningQuestionIndex = 0;
let score = 0;

// FUNCTIONS ---------------------------------------------------------

// Hide a given element
function hide(element) {
  element.style.display = "none";
}

function show(element) {
  element.style.display = "block";
}

function onStart() {
  runningQuestionIndex = 0;
  score = 0;
  hide(dom_start);
  show(dom_quiz);
  renderQuestion();
}

function renderQuestion() {
  // Render the current question on the quiz view
  let q = questions[runningQuestionIndex]
  dom_question.textContent = q.title;
  dom_choiceA.textContent = q.choiceA;
  dom_choiceB.textContent = q.choiceB;
  dom_choiceC.textContent = q.choiceC;
  dom_choiceD.textContent = q.choiceD;
}

function onPlayerSubmit(answer) {
  // Update the score, display the next question or the score view
  if (answer === questions[runningQuestionIndex].correct) {
    score++;
  }
  
  if (runningQuestionIndex < questions.length - 1) {
    runningQuestionIndex++;
    renderQuestion();
  } else {
    renderSCore();
  }
}

function renderSCore() {
  // calculate the amount of question percent answered by the user
  // choose the image based on the scorePerCent
  hide(dom_quiz);
  show(dom_score);
  
  let scorePerCent = Math.round((score / questions.length) * 100);
  
  dom_scoreText.textContent = `SCORE: ${scorePerCent}%`;
  
  let emojiSrc = "";
  if (scorePerCent < 20) {
    emojiSrc = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%23ff8c00'/%3E%3Ccircle cx='35' cy='40' r='5' fill='%23000'/%3E%3Ccircle cx='65' cy='40' r='5' fill='%23000'/%3E%3Cpath d='M30 70 Q50 60 70 70' stroke='%23000' stroke-width='3' fill='none'/%3E%3C/svg%3E";
  } else if (scorePerCent >= 20 && scorePerCent < 40) {
    emojiSrc = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%23ff0000'/%3E%3Ccircle cx='35' cy='40' r='5' fill='%23000'/%3E%3Ccircle cx='65' cy='40' r='5' fill='%23000'/%3E%3Cpath d='M30 68 Q50 62 70 68' stroke='%23000' stroke-width='3' fill='none'/%3E%3C/svg%3E";
  } else if (scorePerCent >= 40 && scorePerCent < 60) {
    emojiSrc = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%23ffff00'/%3E%3Ccircle cx='35' cy='40' r='5' fill='%23000'/%3E%3Ccircle cx='65' cy='40' r='5' fill='%23000'/%3E%3Cline x1='30' y1='65' x2='70' y2='65' stroke='%23000' stroke-width='3'/%3E%3C/svg%3E";
  } else if (scorePerCent >= 60 && scorePerCent < 80) {
    emojiSrc = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%23bada55'/%3E%3Ccircle cx='35' cy='40' r='5' fill='%23000'/%3E%3Ccircle cx='65' cy='40' r='5' fill='%23000'/%3E%3Cpath d='M30 65 Q50 75 70 65' stroke='%23000' stroke-width='3' fill='none'/%3E%3C/svg%3E";
  } else {
    emojiSrc = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%2300ff00'/%3E%3Ccircle cx='35' cy='40' r='5' fill='%23000'/%3E%3Ccircle cx='65' cy='40' r='5' fill='%23000'/%3E%3Cpath d='M25 60 Q50 80 75 60' stroke='%23000' stroke-width='3' fill='none'/%3E%3C/svg%3E";
  }

  dom_scoreImage.src = emojiSrc;
}
dom_start.addEventListener("click", onStart);
dom_choiceA.addEventListener("click", () => onPlayerSubmit("A"));
dom_choiceB.addEventListener("click", () => onPlayerSubmit("B"));
dom_choiceC.addEventListener("click", () => onPlayerSubmit("C"));
dom_choiceD.addEventListener("click", () => onPlayerSubmit("D"));

// FUNCTIONS ---------------------------------------------------------
show(dom_start);
hide(dom_quiz);
hide(dom_score);
