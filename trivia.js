"use strict";
const $ = selector => document.querySelector(selector)

let correct_answers = 0
let question_number = 0

$("#start_page").style.display = "block"
$("#question_page").style.display = "none"
$("#score_page").style.display = "none"

const start_game = () => {
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

    let question_array = [
        {question: "question",
         answers: {a: "a", b: "b", c: "c", d: "d"}, right_answer: "a"}]

    $("#question").value = question_array[0].right_answer
    $("#question").innerHTML = question_array[0].question    
 
    $("#A1").nextElementSibling.innerHTML = question_array[0].answers.a
    $("#A2").nextElementSibling.innerHTML = question_array[0].answers.b
    $("#A3").nextElementSibling.innerHTML = question_array[0].answers.c
    $("#A4").nextElementSibling.innerHTML = question_array[0].answers.d
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
    $("#start").addEventListener("click", start_game)
    $("#restart").addEventListener("click", restart)
});