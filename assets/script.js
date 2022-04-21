// identify HTML elements that will be needed
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

// creates ability to toggle screens
var hideClass = "hide";

//array of all 10 quiz questions
var questions = [
    {
        question: "George Clinton is the front-man for which of funk music's most influential bands?",
        answers: ["Parliament", "Funkadelic", "Parliament-Funkadelic", "All of the above"],
        answer: 3
    },
    {
        question: "Bootsy Collins was the bass player for which iconic funk band?",
        answers: ["James Brown", "Parliament-Funkadelic", "Sly & The Family Stone", "James Brown and Parliament Funkadelic"],
        answer: 0
    },
    {
        question: "Who is credited with creating the funk beat in the late 1950s and early 1960s?",
        answers: ["George Clinton", "James Brown", "Elvis Presley", "The Beatles"],
        answer: 1
    },
    {
        question: "Which band recorded the first slap bass lick?",
        answers: ["Grand Funk Railroad", "The Gap Band", "War", "Sly & The Family Stone"],
        answer: 3
    },
    {
        question: 'Who emerged as the "Queen of Funk" in the 1970s and 80s with her band Rufus?',
        answers: ["Aretha Franklin", "Lynn Collins", "Chaka Khan", "Etta James"],
        answer: 2
    },
    {
        question: 'Which New Orleans base funk band release their hit "Cissy Strut" in 1969?',
        answers: ["The Neville Brothers", "The Meters", "Allen Toussaint", "John Cleary"],
        answer: 1
    },
    {
        question: "Which of the following characteristics is not commonly found in funk music?",
        answers: ["Syncopation", "Strong downbeats", "Seventh chord variants", "Grooves driven by violin"],
        answer: 3
    },
    {
        question: "Bootsy Collins, Larry Graham, George Porter, Jr., and Marcus Miller are all considered among the best funk players at which instrument?",
        answers: ["Guitar", "Bass", "Drums", "Trombone"],
        answer: 1
    },
    {
        question: "Jabo Starks, Clyde Stubblefield, Ziggaboo Modeliste, and David Garibaldi are all considered pioneers of funk on which instrument?",
        answers: ["Guitar", "Bass", "Drums", "Trombone"],
        answer: 2
    },
    {
        question: "Although funk music is still around and popular in its own right, which other modern genre of music did it most inspire?",
        answers: ["Country", "EDM", "Pop", "Hip hop"],
        answer: 3
    }
];

// sets starting question to the first item of the array
var currentQuestion = -1;

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
    populateQuestion();

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

// Timer that counts down from 100
function runTimer() {
    var timeLeft = 10;
      var timeInterval = setInterval(function () {
      if (timeLeft > 1) {
        timerEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
      } else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
        setState(0);
      }
    }, 1000);
  }


function populateQuestion() {
    if (currentQuestion === questions.length - 1) {
        return;
    } else {
        currentQuestion += 1;
    }
    var questionObj = questions[currentQuestion];
    console.log(questionObj.question);
    // Remove the current list items
    answersEl.innerHTML = "<ul></ul>";
    // Show question and possible answers
    questionEl.textContent = questionObj.question;
    questionObj.answers.forEach(function (answer) {
        var li = document.createElement("li");
        li.textContent = answer;
            li.addEventListener("click", function () {
       console.log(answer)
            
            // if (target.matches("li")) {
            //   window.alert(target.innerText);
            var rightAnswer = questions[currentQuestion].answer
            var selectedAnswer = questionObj.answers.indexOf(answer)
            if (selectedAnswer == rightAnswer) {
                window.alert("correct");
            } else
            window.alert("wrong")
        });
        answersEl.appendChild(li);
    });
   
    console.log(answersEl)
    
}

function setEventListeners() {
    screen0ButtonEl.addEventListener("click", function () {
        setState(1);
        runTimer();
    });
    screen1ButtonEl.addEventListener("click", function () {
        setState(1);
    });
    screen2ButtonEl.addEventListener("click", function () {
        setState(0);
    });
    /* answersEl.addEventListener("click", function (evt) {
       
        var target = evt.target.value;
        console.log(target)
        // if (target.matches("li")) {
        //   window.alert(target.innerText);
        console.log(questions[currentQuestion].answer)
        if (target == questions[currentQuestion].answer) {
            window.alert("correct");
        } else
        window.alert("wrong")
    });*/
}

init();