var screen0El = document.querySelector("#screen0");
var screen0ButtonEl = screen0El.querySelector("button");
var screen1El = document.querySelector("#screen1");
var screen1ButtonEl = screen1El.querySelector("button");
var screen2El = document.querySelector("#screen2");
var screen2ButtonEl = screen2El.querySelector("button");
var highScoreEl = document.querySelector("#highScore");
var timerEl = document.querySelector("#timer");
var questionEl = document.querySelector("#question");
var answersEl = document.querySelector("#possibleAnswers");

var hideClass = "hide";
var questions = [
    {
        question: "George Clinton is the front-man for which of funk music's most influential bands?",
        answers: ["Parliament", "Funkadelic", "Parliament-Funkadelic", "All of the above"],
        answer: 3
    },
    {
        question: "Bootsy Collins was the bass player for which iconic funk band?",
        answers: ["James Brown", "Parliament-Funkadelic", "Both"],
        answer: 0
    }
];
var currentQuestion = 0;

var dynamicElements = [
    screen0El,
    screen1El,
    screen2El,
    highScoreEl,
    timerEl,
];

function init() {
    setEventListeners();
}

function setState(state) {
    switch (state) {
        case 1:
            populateQuestion();
            break;
        default:
            break;
    }

    dynamicElements.forEach(function (ele) {
        var possibleStatesAttr = ele.getAttribute("data-states");
        var possibleStates = JSON.parse(possibleStatesAttr);
        if (possibleStates.includes(state)) {
            ele.classList.remove(hideClass);
        } else {
            ele.classList.add(hideClass);
        }
    });
}

function populateQuestion() {
    var questionObj = questions[currentQuestion];
    // Remove the current list items
    answersEl.innerHTML = "";
    questionEl.textContent = questionObj.question;
    questionObj.answers.forEach(function (question) {
        var li = document.createElement("li");
        li.textContent = question;
        answersEl.appendChild(li);
    });
    if (currentQuestion === questions.length - 1) {
        currentQuestion = 0;
    } else {
        currentQuestion++;
    }
}

function setEventListeners() {
    screen0ButtonEl.addEventListener("click", function () {
        setState(1);
    });
    screen1ButtonEl.addEventListener("click", function () {
        setState(2);
    });
    screen2ButtonEl.addEventListener("click", function () {
        setState(0);
    });
    answersEl.addEventListener("click", function (evt) {
        var target = evt.target;
        if (target.matches("li")) {
          window.alert(target.innerText);
        }
    });
}

init();