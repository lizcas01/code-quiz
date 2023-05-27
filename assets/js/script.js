var startButton = document.getElementById("begin");
var timer = document.getElementById("timer");
var quizSection = document.getElementById("quizSection");
var question = document.getElementById("question");
var answerA = document.getElementById("answerA");
var answerB = document.getElementById("answerB");
var answerC = document.getElementById("answerC");
var initialsForm = document.getElementById("initialsForm");
var scoreSection = document.getElementById("scoreSection");
var intials = document.getElementById("intials");
var end = document.getElementById("end");



// Questions
var questions = [
    {
        q: "What does HTML stand for?",
        a: "A) Hypertext Markup Language",
        b: "B) Higher Text Markup Language",
        c: "C) Hypertext Multi Language",
        answer: 'a'
    },
    {
        q: 'What does CSS stand for?',
        a: 'A) Computer Styling Sheets',
        b: 'B) Cascading Style Sheets',
        c: 'C) Colorful Super Sheets',
        answer: 'b'
    },
    {
        q: 'Are you also taking a coding class?',
        a: 'A) Huh?',
        b: 'B) No',
        c: 'C) Yes',
        answer: 'c'
    },
];

