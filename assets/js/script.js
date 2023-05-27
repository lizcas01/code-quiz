var startButton = document.getElementById("begin");
var timer = document.getElementById("timer");
var main = document.getElementById("main");
var question = document.getElementById("question");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3")
var end = document.getElementById("end");
var intialsForm = document.getElementById("intialsForm");
var scoreSection = document.getElementById("scoreSection")
var intials = document.getElementById("initials");
var submitButton = document.getElementById("submit");




// Questions
var questions = [
    {
        q: 'What does HTML stand for?',
        one: "1) Hypertext Markup Language",
        two: "2) Higher Text Markup Language",
        three: "3) Hypertext Multi Language",
        answer: '1'
    },
    {
        q: 'What does CSS stand for?',
        one: '1) Computer Styling Sheets',
        two: '2) Cascading Style Sheets',
        three: '3) Colorful Super Sheets',
        answer: '2'
    },
    {
        q: 'Are you also taking a coding class?',
        one: 'A) Huh?',
        two: 'B) No',
        three: 'C) Yes',
        answer: '3'
    },
];

result = 0;
timeLeft = 20;
count = 0;
var storedUsers;

function renderPageLoad () {
    main.style.display = "none";
    end.style.display = "none";
    storedUsers = localStorage.getItem("scoreboard");
    console.log(storedUsers);
}

function runQuiz () {
    if (count === 3) {
        return endQuiz ();
    }
    timer.textContent = "Time: " + timeLeft;
    question.textContent = questions[count].q;
    answerA.textContent = questions[count].one;
    answerB.textContent = questions[count].two;
    answerC.textContent = questions[count].three;
    startButton.style.display = "none";
}

renderPageLoad();

startButton.addEventListener("click", function () {
    startTimer();
    main.style.display = "block";
    end.style.display = "none";
    runQuiz();
})

function startTimer () {
    var timeRun = setInterval( function () {
        timeLeft--;
        timer.textContent = "Time: " + timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timeRun);
            endQuiz();
        }
    }, 1000);
}

function manageSelectionA ()  {
    if (questions[count].answer === "1") {
        count ++;
        result = timeLeft + 10;
        console.log("correct");
    } else {
        console.log("wrong");
        timeLeft = timeLeft - 10;
        count++;
    }
    runQuiz();
}

function manageSelectionB ()  {
    if (questions[count].answer === "2") {
        count ++;
        result = timeLeft + 10;
        console.log("correct");
    } else {
        console.log("wrong");
        timerLeft = timeLeft - 10;
        count++
    }
    runQuiz();
}

function manageSelectionC ()  {
    if (questions[count].answer === "3") {
        count ++;
        result = timeLeft + 10;
        console.log("correct");
    } else {
        console.log("wrong");
        timeleft = timeLeft - 10;
        count++
    }
    runQuiz();
}

answerA.addEventListener("click", manageSelectionA);
answerB.addEventListener("click", manageSelectionB);
answerC.addEventListener("click", manageSelectionC);

function endQuiz () {
    main.style.display = "none";
    end.style.display = "block";
    console.log(result);
}

submitButton.addEventListener("submit");
