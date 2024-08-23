let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    let options = ["rock","paper","scissors"];
    let idx =  Math.floor(Math.random()*3)
    return options[idx];
};

const playGame = (userChoice) =>{
    const compChoice = genCompChoice();

    const drawGame = () =>{
        msg.innerText = "Draw !"
        msg.style.backgroundColor = "#081B31";
    }

    const showWinner = (userWin,userChoice,compChoice) =>{
        if(userWin){
            userScore++;
            msg.innerText = `You win ! Your ${userChoice} beats ${compChoice}`;
            msg.style.backgroundColor = "green";
            userScorePara.innerText = `${userScore}`
        }
        else{
            compScore++;
            msg.innerText = `You lose ! Comp ${compChoice} beats ${userChoice}`
            msg.style.backgroundColor = "red";
            compScorePara.innerText = `${compScore}`
        }
    }

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice ==="paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice ==="scissors" ? false : true;
        }
        else{
            userWin = compChoice ==="rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});