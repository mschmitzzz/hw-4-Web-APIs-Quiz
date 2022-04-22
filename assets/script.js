var startButtonEl = document.getElementById("start-btn");
var nextButtonEl = document.getElementById("next-btn");
var questionContainerEl = document.getElementById("question-container");
var questionEl = document.getElementById("question");
var answerButtonsEl = document.getElementById("answer-buttons");

var shuffledQuestions, currentQuestionIndex

startButtonEl.addEventListener("click", startGame);
nextButtonEl.addEventListener("click", function() {
    currentQuestionIndex++;
    setNextQuestion();
});

//loads the question container
function startGame() {
    console.log("Started")
    startButtonEl.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerEl.classList.remove("hide");
    setNextQuestion();
};

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
};

function showQuestion(question) {
    questionEl.innerText = question.question;
    question.answers.forEach(function(answer) {
        var button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        };
        button.addEventListener("click", selectAnswer);
        answerButtonsEl.appendChild(button);
    });
}

function resetState() {
    clearStatusClass(document.body);
    nextButtonEl.classList.add("hide");
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild)
    }
}

function selectAnswer() {
    var selectedButton = event.target;
    var correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if(shuffledQuestions.length > currentQuestionIndex +1) {
        nextButtonEl.classList.remove("hide");
    } else {
        startButtonEl.innerText = "Restart";
        startButtonEl.classList.remove("hide");
    }
    
};

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
};

//array of all 10 quiz questions
var questions = [
    {
        question: "George Clinton is the front-man for which of funk music's most influential band(s)?",
        answers: [
            {text: "Parliament", correct: false},
            {text: "Funkadelic", correct: false},
            {text: "Parliament-Funkadelic", correct: false},
            {text: "All of the above", correct: true}
        ]
    },
    {
        question: "Bootsy Collins was the bass player for which iconic funk band?",
        answers: [
            {text: "James Brown", correct: true},
            {text: "Parliament-Funkadelic", correct: false},
            {text: "Sly & The Family Stone", correct: false},
            {text: "James Brown and Parliament Funkadelic", correct: false}
        ]
    },
    {
        question: "Who is credited with creating the funk beat in the late 1950s and early 1960s?",
        answers: [
            {text: "George Clinton", correct: false},
            {text: "James Brown", correct: true},
            {text: "Elvis Presley", correct: false},
            {text: "The Beatles", correct: false}
        ]
    },
    {
        question: "Which band recorded the first slap bass lick?",
        answers: [
            {text: "Grand Funk Railroad", correct: false},
            {text: "The Gap Band", correct: false},
            {text: "War", correct: false},
            {text: "Sly & The Family Stone", correct: true}
        ]
    },
    {
        question: 'Who emerged as the "Queen of Funk" in the 1970s and 80s with her band Rufus?',
        answers: [
            {text: "Aretha Franklin", correct: false},
            {text: "Lynn Collins", correct: false},
            {text: "Chaka Khan", correct: true},
            {text: "Etta James", correct: false}
        ]
    },
    {
        question: 'Which New Orleans base funk band release their hit "Cissy Strut" in 1969?',
        answers: [
            {text: "The Neville Brothers", correct: false},
            {text: "The Meters", correct: true},
            {text: "Allen Toussaint", correct: false},
            {text: "John Cleary", correct: false}
        ]
    },
    {
        question: "Which of the following characteristics is not commonly found in funk music?",
        answers: [
            {text: "Syncopation", correct: false},
            {text: "Strong downbeats", correct: false},
            {text: "Seventh chord variants", correct: false},
            {text: "Grooves driven by violin", correct: true}
        ]
    },
    {
        question: "Bootsy Collins, Larry Graham, George Porter, Jr., and Marcus Miller are all considered among the best funk players at which instrument?",
        answers: [
            {text: "Guitar", correct: false},
            {text: "Bass", correct: true},
            {text: "Drums", correct: false},
            {text: "Trombone", correct: false}
        ]
    },
    {
        question: "Jabo Starks, Clyde Stubblefield, Ziggaboo Modeliste, and David Garibaldi are all considered pioneers of funk on which instrument?",
        answers: [
            {text: "Guitar", correct: false},
            {text: "Bass", correct: false},
            {text: "Drums", correct: true},
            {text: "Saxophone", correct: false}
        ]
    },
    {
        question: "Although funk music is still around and popular in its own right, which other modern genre of music did it most inspire?",
        answers: [
            {text:"Country", correct: false},
            {text: "EDM", correct: false},
            {text: "Pop", correct: false},
            {text: "Hip hop", correct: true}
        ]
    }
];