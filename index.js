var readlineSync = require('readline-sync');
const chalk = require('chalk'); //for interesting colors!

//welcome user
var userName = readlineSync.question(chalk.bgCyan("Enter your name! "));
console.log(chalk.greenBright("Welcome "+userName+"! Get ready to take this awesome quiz on Dragon Ball Super! =)"));

//starting the game
console.log("                     ");
console.log("                     ");
var score = 0;

// function for quiz questions & verification of answer
function quizz(question, answer){
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toLowerCase() == answer.toLowerCase()){
    score = score+ 2;
    console.log(chalk.green("You got that right! ;)"));
    console.log(".................................");

  }else{
    score--;
    console.log(chalk.red("Wrong Answer.. :("));
    console.log(".................................");
    console.log("Correct Answer :" + answer);

  }
};

//quiz questions
var questions=[{
  question: "Let's start with an easy question: Who is Beerus looking for in the beginning of the series? ",
  answer: "Super Saiyan God"
},{
  question: "Who is the most underrated character? ",
  answer: "Vegeta"
},{
  question: "Who is the most badass character? ",
  answer: "Vegeta"
},{
  question: "Who trains with WHIS first? ",
   answer: "Vegeta"
},];

//keeping track of questions
for (var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  quizz(chalk.cyanBright(currentQuestion.question), currentQuestion.answer);
};

//printing highscore
if (score>2){
  console.log(chalk.bgGreen(" 😃!  your score is") + score);
}else{
  console.log(chalk.bgRed("😞, your score is") + score);
}