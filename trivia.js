"use strict";
const $ = selector => document.querySelector(selector)

let correct_answers = 0
let question_number = 0

let questions = [
    {question: "What is the longest river in the world?",
     answers: {a: "Nile", b: "Amazon", c: "Yangtze", d: "Mississippi"}, right_answer: "a"},
    {question: "What is the tallest mountain in North America?",
     answers: {a: "King Peak", b: "Pico de Orizaba", c: "Mount Logan", d: "Denali"}, right_answer: "d"},
    {question: "What is the largest lake in the world?",
     answers: {a: "Victoria", b: "Superior", c: "Huron", d: "Michigan"}, right_answer: "b"},
    {question: "What is the largest country in South America?",
     answers: {a: "Argentina", b: "Bolivia", c: "Peru", d: "Brazil"}, right_answer: "d"},
    {question: "Which nation is the largest by land area?",
     answers: {a: "Russia", b: "China:", c: "Canada", d: "USA"}, right_answer: "a"},
    {question: "What is the capital of Spain?",
     answers: {a: "Madrid", b: "Barcelona", c: "Sevilla", d: "Zaragoza"}, right_answer: "b"},
    {question: "What is the driest desert in the world?",
     answers: {a: "Mojave", b: "Sahara", c: "Atacama", d: "Arabian"}, right_answer: "c"},
    {question: "How many countries does the Equator pass through?",
     answers: {a: "10", b: "13", c: "9", d: "15"}, right_answer: "b"},
    {question: "Which city has the highest population?",
     answers: {a: "Tokyo", b: "New York", c: "Beijing", d: "Delhi"}, right_answer: "a"},
    {question: "What is the largest island in the world?",
     answers: {a: "Baffin", b: "Borneo", c: "Greenland", d: "Madagascar"}, right_answer: "c"}
    ]

$("#start_page").style.display = "block"
$("#question_page").style.display = "none"
$("#score_page").style.display = "none"

const play_game = () => {
    set_question()
    $("#start_page").style.display = "none"
    $("#question_page").style.display = "block"
}

const restart = () => {
    $("#start_page").style.display = "block"
    $("#score_page").style.display = "none"
}
const show_score = () => {
    question_number = 0
    $("#score_span").innerHTML = `You got ${correct_answers} out of 10 correct.`
    $("#question_page").style.display = "none"
    $("#score_page").style.display = "block"   
}

const question_randomizer = () => {
// Starting with the last question, swapping it with random question 'below' it
    for (let i = questions.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]]
    }
}

const set_question = () => {
    $("#info_panel").innerHTML = "Question " +(question_number+1)+ "  of 10."
    
    $("#question").value = questions[question_number].right_answer
    $("#question").innerHTML = questions[question_number].question    
 
    $("#A1").nextElementSibling.innerHTML = questions[question_number].answers.a
    $("#A2").nextElementSibling.innerHTML = questions[question_number].answers.b
    $("#A3").nextElementSibling.innerHTML = questions[question_number].answers.c
    $("#A4").nextElementSibling.innerHTML = questions[question_number].answers.d
}

const submit_answer = () => {
    let player_answer = ""
    let radios = document.getElementsByName("button")

    let right_answer = document.getElementById("question").value

    if (question_number < 9) {
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                player_answer = radios[i].value
                break
            }
        }
        if (player_answer == right_answer) {
            correct_answers += 1
        }
        question_number++

        
        play_game()
    }
    else {
        show_score()
    }
}

document.addEventListener("DOMContentLoaded", () => {
    question_randomizer()
    $("#submit").addEventListener("click", submit_answer)
    $("#start").addEventListener("click", play_game)
    $("#restart").addEventListener("click", restart)
});