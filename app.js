const quizContainer = document.getElementById("quiz-container");
const questionText = document.getElementById("question");
const choices = document.getElementById("choices");
const submitButton = document.getElementById("submit");

const questions = [
    {
        question: "What is the chemical symbol for gold?",
        choices: ["Au", "Ag", "Oz", "Gd"],
        correctAnswer: "Au"
    },
    {
        question: "Which ocean is the deepest?",
        choices: ["Atlantic", "Pacific", "Indian", "Arctic"],
        correctAnswer: "Pacific"
    },
	{
        question: "What is the study of mushroom called?",
        choices: ["Botany", "Myrmecology", "Mycology", "Ornithology"],
        correctAnswer: "Mycology"
    },
	{
        question: "What is the largest country in the world?",
        choices: ["China", "Russia", "USA", "India"],
        correctAnswer: "Russia"
    },
	{
        question: "How many bones are in the human body?",
        choices: ["187", "196", "206", "207"],
        correctAnswer: "206"
    },
    {
        question: "What is the fastest land animal in the world?",
        choices: ["Tiger", "Cheetah", "Greyhound", "Rabbit"],
        correctAnswer: "Cheetah"
    },
	{
        question: "What is the only even prime number?",
        choices: ["2", "4", "6", "8"],
        correctAnswer: "2"
    },
	{
        question: "What does a Geiger Counter measure?",
        choices: ["Humidity", "Ozone", "Radiation", "Data"],
        correctAnswer: "Radiation"
    },
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
    if (currentQuestion < questions.length) {
        const q = questions[currentQuestion];
        questionText.textContent = q.question;

        choices.innerHTML = "";
        for (let i = 0; i < q.choices.length; i++) {
            const choice = document.createElement("button");
            choice.className = "choice";
            choice.textContent = q.choices[i];
            choice.addEventListener("click", checkAnswer);
            choices.appendChild(choice);
        }
    } else {
        quizContainer.innerHTML = `<h2>Quiz complete! Your score: ${score}/${questions.length}</h2>`;
    }
}

function checkAnswer(event) {
    const selectedChoice = event.target.textContent;
    const correctAnswer = questions[currentQuestion].correctAnswer;

    if (selectedChoice === correctAnswer) {
        score++;
    }

    currentQuestion++;
    showQuestion();
}

showQuestion();

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});