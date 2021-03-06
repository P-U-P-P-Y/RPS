const game = ()=> {
    let pScore=0;
    let cScore=0;
    //function to start the game
    const startGame = () =>{
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };
    //play match
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands img");

        hands.forEach(hand => {
            hand.addEventListener("animationend", function(){
                this.style.animation = "";
            })
        })
        //comp options (random)
        const computerOptions = ["rock","paper","scissors"];
        
        options.forEach(option => {
            option.addEventListener("click", function(){
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                
                setTimeout(() =>{
                    //call compare
                    compareHands(this.textContent, computerChoice)
                    //change hands
                    playerHand.src = `${this.textContent}.jpg`;
                    computerHand.src = `${computerChoice}.jpg`;
                },1800)

                //Animation
                playerHand.src = `rock.jpg`;
                computerHand.src = `rock.jpg`;
                playerHand.style.animation = "shakePlayer 1.8s ease";
                computerHand.style.animation = "shakeComputer 1.8s ease";
            });
        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector('.winner');
        if (playerChoice === computerChoice){
            winner.textContent = "IT\'S A DRAW";
            return
        }
        //ROCK
        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winner.textContent = "YOU WIN !";
                pScore++;
                updateScore();
                return
            }else {
                winner.textContent = "COMPUTER WINS !";
                cScore++; 
                updateScore();
                return
            }
        }
        //PAPER
        if(playerChoice === 'paper'){
            if(computerChoice === 'rock'){
                winner.textContent = "YOU WIN !";
                pScore++;
                updateScore();
                return
            }else {
                winner.textContent = "COMPUTER WINS !";
                cScore++;
                updateScore();
                return
            }
        }
        //SCISSOR
        if(playerChoice === 'scissors'){
            if(computerChoice === 'paper'){
                winner.textContent = "YOU WIN !";
                pScore++;
                updateScore();
                return
            }else {
                winner.textContent = "COMPUTER WINS !";
                cScore++;
                updateScore();
                return
            }
        }

    }
    
    startGame();
    playMatch();
}
game();