"use strict";
const $ = selector => document.querySelector(selector);

const get_random = () => {

}

const change_question = () => {
    let question = document.getElementById("question");
    question.innerHTML = "Question 2";
}

const submit_answer = () => {

    let right_answer = "answer1";
    let correct_answers = 0;

    let player_answer = "";
    let radios = document.getElementsByName("button");

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            player_answer = radios[i].value;
            break;
        }
    }
    
    if (player_answer == right_answer) {
        correct_answers += 1;
    }

    console.log(player_answer)
    console.log(correct_answers)

    change_question()
};

document.addEventListener("DOMContentLoaded", () => {
    $("#submit").addEventListener("click", submit_answer);
});