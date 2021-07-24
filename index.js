var readlineSync = require('readline-sync');

var userName = readlineSync.question("What is ur name? ");
var score=0;
console.log("Hi " + userName + " do u know Rohit?");
// play function

function play(question, answer)
{
  var UserAnswer = readlineSync.question(question);

  if (UserAnswer === answer)
  {
    console.log("right");
    score++;
  }
  else
  {
    console.log("wrong");
    score--;
  }
  console.log("Score is : " + score);
  console.log("------------")
}
// array of objects
var questions = [{
  question: "where do i live? ",
  answer: "Bangalore"
},
{
  question: "Ur favorite superhero will be ",
  answer: "SuperMan"
}];

for (var i=0; i<questions.length; i++)
{
  
  currentQuestion = questions[i]
  play(currentQuestion.question, currentQuestion.answer)
}
console.log("Yay U scored: " + score + "!");
// var questionTwo = 
// {
//   question : "Ur favorite superhero will be ";
//   answer : "SuperMan";
// }

// play("where do i live? ","Bangalore");

// play("Ur favorite superhero will be ", "SuperMan")

