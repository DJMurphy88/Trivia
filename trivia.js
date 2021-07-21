"use strict";
const $ = selector => document.querySelector(selector)

let i
let card

$("#start_page").style.display = "block"
$("#question_page").style.display = "none"
$("#score_page").style.display = "none"

const restart = () => {
    $("#start_page").style.display = "block"
    $("#score_page").style.display = "none"
}
const show_score = () => {  
    $("#question_page").style.display = "none"
    $("#score_page").style.display = "block"
}
const play_game = () => {
    $("#start_page").style.display = "none"
    $("#question_page").style.display = "block"
}

const get_random = () => {

}

const change_question = () => {
    let question = document.getElementById("question")
    question.innerHTML = "Question 2"
}

const submit_answer = () => {

    let right_answer = "answer1"
    let correct_answers = 0

    let player_answer = ""
    let radios = document.getElementsByName("button")

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            player_answer = radios[i].value
            break
        }
    }
    
    if (player_answer == right_answer) {
        correct_answers += 1
    }

    show_score()
}

document.addEventListener("DOMContentLoaded", () => {
    $("#submit").addEventListener("click", submit_answer)
    $("#start").addEventListener("click", play_game)
    $("#restart").addEventListener("click", restart)
});