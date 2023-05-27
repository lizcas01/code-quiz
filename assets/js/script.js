var startButton = document.getElementById("begin");
var timer = document.getElementById("timer");
var quizSection = document.getElementById("quizSection");
var question = document.getElementById("question");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var initialsForm = document.getElementById("initialsForm");
var scoreSection = document.getElementById("scoreSection");
var intials = document.getElementById("intials");
var end = document.getElementById("end");



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

score = 0;
timerCount = 10;
questionCount = 0;
function renderPageLoad () {
    quizSection.style.display = "none";
    end.style.display = "none";
}
