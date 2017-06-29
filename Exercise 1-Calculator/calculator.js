/*
Exercise 1: Calculator using JavaScript without Libraries
Project Idea 2017-2018
Author: Kim Ezekiel L. del Mundo

*/
var userInput = ""; //stores userInput
var answer = 0;     //stores the answer

function input(x){
     //adds user input to userInput
     userInput += x;
     document.getElementById("output").innerHTML = userInput;
     // alert(userInput);
}

function getAnswer(){
     //computes the answer given userInput
     answer = eval(userInput);
     document.getElementById("output").innerHTML = answer;
     answer = 0
     // alert("calcu");
}
function clr() {
     //clears userInput
     userInput = "";
     document.getElementById("output").innerHTML = userInput;

}
function del(){
     // userInput.charAt()
     userInput = userInput.slice(0, userInput.length -1);
     document.getElementById("output").innerHTML = userInput;

}
