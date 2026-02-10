function nextSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

const quizData = [
    {
        question: "Where did we first meet?",
        options: ["College", "Instagram", "Office","Facebook"],
        answer: 2
    },
    {
        question: "Who said 'I love you' first?",
        options: ["Varsha😌", "Thilak😘", "Both together"],
        answer: 1
    },
    {
        question: "What is my favorite food?",
        options: ["Pizza", "Biryani", "Pasta","Chocolate"],
        answer: 1
    },
    {
        question: "What is our favorite memory?",
        options: ["First trip", "First long call", "First fight 😂","Car Drive"],
        answer: 0
    },


    {
        question: "What nickname do I call you?",
        options: ["Baby", "Kuttypapa", "Ammu", "Ladduma"],
        answer: 2
    },
    {
        question: "What color dress did I buy you first?",
        options: ["Red","White", "Blue", "Black"],
        answer: 2
    }
];

let currentQuestion = 0;
let score = 0;

const quizContainer = document.getElementById("quizContainer");
const resultText = document.getElementById("quizResult");
const nextQuestionBtn = document.getElementById("nextQuestionBtn");
const finalScoreText = document.getElementById("finalScore");

function loadQuestion() {
    const q = quizData[currentQuestion];

    quizContainer.innerHTML = `
        <p>${q.question}</p>
        ${q.options.map((option, index) => 
            `<button onclick="checkAnswer(${index})">${option}</button>`
        ).join("")}
    `;

    resultText.innerHTML = "";
    nextQuestionBtn.style.display = "none";
}

function checkAnswer(selectedIndex) {
    const correctIndex = quizData[currentQuestion].answer;

    if (selectedIndex === correctIndex) {
        score++;
        resultText.innerHTML = "Aww you remember 🥰💖";
    } else {
        resultText.innerHTML = "Silly! But I still love you 😘";
    }

    nextQuestionBtn.style.display = "inline-block";
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showFinalScore();
    }
}

function showFinalScore() {
    quizContainer.innerHTML = "";
    resultText.innerHTML = "";

    finalScoreText.innerHTML = `
        💖 You scored ${score}/6 💖 <br><br>
        Certified Best Boyfriend Award 🏆
    `;

    setTimeout(() => {
        nextSection('timeline');  // 👈 CHANGE HERE
    }, 5000);
}


document.addEventListener("DOMContentLoaded", loadQuestion);

function revealLetter() {
    document.querySelector(".love-frame").style.display = "block";
}


//Surprise Game Logic
function showSurprise(type) {
    const message = document.getElementById("surpriseMessage");

    if (type === "kiss") {
        message.innerHTML = "Sending you unlimited virtual kisses 💋💋💋";
    } else if (type === "chocolate") {
        message.innerHTML = "Chocolate coming your way 🍫😋";
    } else if (type === "future") {
        message.innerHTML = "Stay with me forever to unlock this 😌💍";
    }
}

//countdown Time
const targetDate = new Date("Feb 14, 2026 00:00:00").getTime();

setInterval(function() {

    const countdownElement = document.getElementById("countdown");
    if (!countdownElement) return;

    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    countdownElement.innerHTML =
        days + " days remaining ❤️";

}, 1000);




