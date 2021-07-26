"use strict";
const $ = selector => document.querySelector(selector)

let correct_answers = 0
let question_number = 0

$("#start_page").style.display = "block"
$("#question_page").style.display = "none"
$("#score_page").style.display = "none"

const start_game = () => {
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


const submit_answer = () => {
    let player_answer = ""
    let radios = document.getElementsByName("button")
    let right_answer = "answer1"

    if (question_number <= 9) {
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                console.log(radios[i].value)
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

    console.log(question_number)
    console.log(player_answer)
    console.log(right_answer)
    console.log(correct_answers)
}

document.addEventListener("DOMContentLoaded", () => {
    $("#submit").addEventListener("click", submit_answer)
    $("#start").addEventListener("click", start_game)
    $("#restart").addEventListener("click", restart)
});