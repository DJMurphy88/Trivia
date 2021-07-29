"use strict";
const $ = selector => document.querySelector(selector)

let correct_answers = 0
let question_number = 0

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
    $("#question_page").style.display = "none"
    $("#score_page").style.display = "block"   
}

const set_question = () => {
    let i = Math.floor(Math.random() * 10);

   let questions = [
        {question: "question1",
         answers: {a: "a", b: "b", c: "c", d: "d"}, right_answer: "a"},
        {question: "question2",
         answers: {a: "a", b: "b", c: "c", d: "d"}, right_answer: "b"},
        {question: "question3",
         answers: {a: "a", b: "b", c: "c", d: "d"}, right_answer: "c"},
        {question: "question4",
         answers: {a: "a", b: "b", c: "c", d: "d"}, right_answer: "d"},
        {question: "question5",
         answers: {a: "a", b: "b", c: "c", d: "d"}, right_answer: "a"},
        {question: "question6",
         answers: {a: "a", b: "b", c: "c", d: "d"}, right_answer: "b"},
        {question: "question7",
         answers: {a: "a", b: "b", c: "c", d: "d"}, right_answer: "c"},
        {question: "question8",
         answers: {a: "a", b: "b", c: "c", d: "d"}, right_answer: "d"},
        {question: "question9",
         answers: {a: "a", b: "b", c: "c", d: "d"}, right_answer: "a"},
        {question: "question10",
         answers: {a: "a", b: "b", c: "c", d: "d"}, right_answer: "b"}
        ]

       let random_question = questions[i]
       console.log(random_question)

    $("#question").value = random_question.right_answer
    $("#question").innerHTML = random_question.question    
 
    $("#A1").nextElementSibling.innerHTML = random_question.answers.a
    $("#A2").nextElementSibling.innerHTML = random_question.answers.b
    $("#A3").nextElementSibling.innerHTML = random_question.answers.c
    $("#A4").nextElementSibling.innerHTML = random_question.answers.d
}

const submit_answer = () => {
    let player_answer = ""
    let radios = document.getElementsByName("button")

    let right_answer = document.getElementById("question").value

    if (question_number <= 9) {
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

    console.log("Question number: " +question_number)
    console.log("Player answer: " +player_answer)
    console.log("Right answer: " +right_answer)
    console.log("Correct answer: " +correct_answers)
}

document.addEventListener("DOMContentLoaded", () => {
    $("#submit").addEventListener("click", submit_answer)
    $("#start").addEventListener("click", play_game)
    $("#restart").addEventListener("click", restart)
});