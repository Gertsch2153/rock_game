
    // var userChoice = prompt ("What's your play?");



function computerPlay (){ 
    
    let computerChoice = Math.random();
   // console.log (computerChoice)
    if ( computerChoice >.66 ) {
      computerChoice = "Rock";
    }
    else if (computerChoice < .33) {
      computerChoice = "Paper";
    }
    else {
      computerChoice = "Scissors"
    }
    
      return (computerChoice);
}

function singleRound(choice1,choice2){
    
//    var compare = function (choice1, choice2) {

   if ( choice1 === choice2) {
    return "Tie"
   }

   
   else if (choice1 === "Rock") {
     if (choice2 === "Scissors"){
       return "Rock wins User Wins!" 

     }
    else {return "Paper wins Computer Wins!"}
   }
   else if (choice1 === "Paper") {
     if (choice2 === "Scissors"){
       return "Scissors wins Computer Wins!" 

     }
    else {return "Paper wins User Wins!"}
   }

   else if (choice1 === "Scissors") {
     if (choice2 === "Paper"){
       return "Scissors wins User Wins!" 

     }
    else {
        return "Rock wins Computer Wins!"
   }
  }
}

   const r = document.querySelector("#rock");
   const p = document.querySelector("#paper");
   const s = document.querySelector("#scissors");
   const display = document.querySelector("#display");

    function rock (){ 
        display.textContent = singleRound("Rock", computerPlay());
    }

    function paper(){ 
        display.textContent = singleRound("Paper", computerPlay());
    }
    function scissors(){ 
        display.textContent = singleRound("Scissors", computerPlay());
    }
    


r.addEventListener ('click', rock);
p.addEventListener ('click', paper);
s.addEventListener ('click', scissors);
   

