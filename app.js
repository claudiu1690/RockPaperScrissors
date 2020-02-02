let computerChoice;
let userChoice;

function rock() {
    userChoice = 'rock';
    computerChoice = Math.random();
    document.getElementById("userC").innerHTML ="Your choice is ROCK!"; 
    document.getElementById("compC").innerHTML=""; 
    document.getElementById("winner").innerHTML="";

        // computer choice and compare results
        cpuChoice(computerChoice)

            // animation user choice
            document.getElementById("playerchoice").setAttribute('style', 'background: url("https://i.ibb.co/CmXKy4r/rock.png") no-repeat center; background-size: 100px; animation: bounce 0.2s alternate 6');
            setTimeout(function(){
            document.getElementById("playerchoice").setAttribute('style', 'background: url("https://i.ibb.co/CmXKy4r/rock.png") no-repeat center; background-size: 100px; animation: none');
            }, 1300);
}
function paper() {
    userChoice = 'paper';
    computerChoice = Math.random();
    document.getElementById("userC").innerHTML ="Your choice is PAPER!";
    document.getElementById("compC").innerHTML=""; 
    document.getElementById("winner").innerHTML="";

        // computer choice and compare results
        cpuChoice(computerChoice)

            // animation user choice
            document.getElementById("playerchoice").setAttribute('style', 'background: url("https://i.ibb.co/CmXKy4r/rock.png") no-repeat center; background-size: 100px; animation: bounce 0.2s alternate 6');
            setTimeout(function(){
            document.getElementById("playerchoice").setAttribute('style', 'background: url("https://i.ibb.co/n78g72V/paper.png") no-repeat center; background-size: 100px; animation: none');
            }, 1300);
}
function scissors() {
    userChoice = 'scissors';
    computerChoice = Math.random();
    document.getElementById("userC").innerHTML ="Your choice is SCISSORS!";
    document.getElementById("compC").innerHTML=""; 
    document.getElementById("winner").innerHTML="";

        // computer choice and compare results
        cpuChoice(computerChoice)

            // animation user choice
            document.getElementById("playerchoice").setAttribute('style', 'background: url("https://i.ibb.co/CmXKy4r/rock.png") no-repeat center; background-size: 100px; animation: bounce 0.2s alternate 6');
            setTimeout(function(){
            document.getElementById("playerchoice").setAttribute('style', 'background: url("https://i.ibb.co/tsj4Gbs/scissors-fliped.png") no-repeat center; background-size: 100px; animation: none');
            }, 1300);         
};

function cpuChoice(computerChoice) {
    if (computerChoice < 0.33) {
        computerChoice = "rock";

        // animation computer choice
        document.getElementById("cpuchoice").setAttribute('style', 'background: url("https://i.ibb.co/q77ThCM/rock-fliped.png") no-repeat center; background-size: 100px; animation: bounce 0.2s alternate 6');
        setTimeout(function(){
            document.getElementById("cpuchoice").setAttribute('style', 'background: url("https://i.ibb.co/q77ThCM/rock-fliped.png") no-repeat center; background-size: 100px; animation: none');
            document.getElementById("compC").innerHTML="Computer choice is ROCK";
        }, 1300);
        
        winCompare(userChoice, computerChoice)
    }
    else if (computerChoice <= 0.66) {
        computerChoice = "paper";

         // animation computer choice
         document.getElementById("cpuchoice").setAttribute('style', 'background: url("https://i.ibb.co/q77ThCM/rock-fliped.png") no-repeat center; background-size: 100px; animation: bounce 0.2s alternate 6');
         setTimeout(function(){
             document.getElementById("cpuchoice").setAttribute('style', 'background: url("https://i.ibb.co/n78g72V/paper.png") no-repeat center; background-size: 100px; animation: none');
             document.getElementById("compC").innerHTML="Computer choice is PAPER";
         }, 1300);

         winCompare(userChoice, computerChoice)
    
    }
    else {
        computerChoice = "scissors";

         // animation computer choice
         document.getElementById("cpuchoice").setAttribute('style', 'background: url("https://i.ibb.co/q77ThCM/rock-fliped.png") no-repeat center; background-size: 100px; animation: bounce 0.2s alternate 6');
         setTimeout(function(){
             document.getElementById("cpuchoice").setAttribute('style', 'background: url("https://i.ibb.co/Q6wjHLs/scissors.png") no-repeat center; background-size: 100px; animation: none');
             document.getElementById("compC").innerHTML="Computer choice is SCISSORS";
         }, 1300);

         winCompare(userChoice, computerChoice)

    }
};

function winCompare(user, cpu) {

    if (user === cpu) {
            // tie
        setTimeout(() => {
            document.getElementById("winner").innerHTML="It's a TIE";
        }, 1300);   
        return
    };
    if (user === 'rock') {
        
        if (cpu === "scissors") {
            // rock wins
            setTimeout(() => {
           document.getElementById("winner").innerHTML="YOU WIN !!!";
            }, 1300);
        } else {
            // paper wins
            setTimeout(() => {
                document.getElementById("winner").innerHTML="YOU LOSE!";
                }, 1300)
                    }
    };
    if (user === "paper") {
        if (cpu === "rock") {
            // paper wins 
            setTimeout(() => {
            document.getElementById("winner").innerHTML="YOU WIN !!!";
                 }, 1300);
        } else {
            //rock wins.
            setTimeout(() => {
            document.getElementById("winner").innerHTML="YOU LOSE!";
            }, 1300)
        }
    };
    if (user === 'scissors') {
        if (cpu === "paper") {
            // scissors wins
            setTimeout(() => {
            document.getElementById("winner").innerHTML="YOU WIN !!!";
                 }, 1300);
                  
        } else {
            // paper wins 
            setTimeout(() => {
                document.getElementById("winner").innerHTML="YOU LOSE!";
                }, 1300) 
        }
    }
}



