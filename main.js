// set up function for create the players

let createPlayer = () => {

    //loop for the players info
    for(let i=0; i < 4; i++) {

        if(gameBoardModule.playerArray.length >= 6){
            gameBoardModule.makePlayerMove();
            break;
        } else if (gameBoardModule.playerArray.length == 0) {
            let playerName = prompt("what is your name?");
            
            if (playerName == "" || playerName == null) {
                alert("sorry player name can not be blank");
                continue;
            }

            let playerNumber = 1;
            let signXO = "X";

            alert ("you are player 1 and your sign is X");
            gameBoardModule.playerArray.push(playerName,playerNumber,signXO);
        } else if (gameBoardModule.playerArray.length !==0) {
            let playerName = prompt("What is your name??");

            if (playerName == "" || playerName == null) {
                alert("sorry player name can not be blank");
                continue;
            }

            let playerNumber = 2;
            let signXO = "O";

            alert("you are player 2 and your sign is O");
            gameBoardModule.playerArray.push(playerName,playerNumber,signXO);
        
        }
    }

    //let getPlayerName = () => { playerName;
    //console.log("name of the player" + playerNumber + "..." + playerName);}
    //return{getPlayerName,playerName,playerNumber,signXO};
}

// set up gameBoard module

let gameBoardModule = (function() {
    let gameBoard = [] ;
    let playerArray = [];

    // function for to envoke next player move

    let makePlayerMove = () => {

        if (playerArray.length == 6 && gameBoard.length <9) {

            // controls player moves

            if(gameBoard.length == 0) {
                alert ("player 1 makeyour move");
                gameBoard.push(playerArray[2]);
                console.log("current gameboard array..",gameBoard);
            } else if (gameBoard[gameBoard.length-1] == "X") {
                alert ("player 2 make your move");
                gameBoard.push(playerArray[5]);
                console.log("current game board array",gameBoard);
            } else if (gameBoard[gameBoard.length-1] == "O") {
                 alert ("player 1 make your move");
                gameBoard.push(playerArray[2]);
                console.log("current game board array..",gameBoard)
            }
        }
    }
    return{gameBoard,playerArray,makePlayerMove};
})();

// set up displayControllerModule

let displayControllerModule = (function() {

    const makeMove = document.querySelectorAll(".game-board-button");

    // start indexing and looping for each button

    let index = 0;
    makeMove.forEach(makeMoves => {
        makeMoves.dataset.linkedButton = index;
        makeMoves.addEventListener("click", renderArray);

        function renderArray() {
            const gridBoxes = document.querySelectorAll(".grid-box");

            // start indexing and looping for each grid box

            let index = 0;
            gridBoxes.forEach(gridBox => {
                gridBox.dataset.linkedButton = index;

                // render clicked play on the correct grid box and display
                if (gridBox.getAttribute("data-linked-button") == makeMoves.getAttribute("data-linked-button")) {
                    gridBox.textContent = gameBoardModule.gameBoard[gameBoardModule.gameBoard.length - 1];
                    console.log("show me my makeMoves liked button value", makeMoves.dataset.linkedButton);
                    console.log("show me my gridBox linked button value", gridBox.dataset.linkedButton);
                }
            index++;
            });

            function checkWin (player) {
                const horizontal = [0,3,6].map(i=>{return[i,i+1,i+2]});
                const vertical = [0,1,2].map(i=>{return[i,i+3,i+6]});
                const diagonal =[[0,4,8],[2,4,6]];

                let allWins =[].concat(vertical).concat(horizontal).concat(diagonal);

                let results = allWins.some(indices => {
                    return gridBoxes[indices[0]].textContent == player && gridBoxes[indices[1]].textContent == player && gridBoxes[indices[2]].textContent == player
                })
                return results;
            }

            if(checkWin("X") == true) {
                console.log(gameBoardModule.playerArray[0] , " win!");
                const body = document.querySelector("body");
                const message = document.createElement("h1");
                message.textContent=(gameBoardModule.playerArray[0]+ " win!");
                body.appendChild(message);
                makeMove.forEach(makeMoves => {
                    makeMoves.remove();
                });
                startGameButton.remove();
                return;
            } else if (checkWin("O") == true) {
                console.log(gameBoardModule.playerArray[3] , " win!");
                const body = document.querySelector("body");
                const message = document.createElement("h1");
                message.textContent=(gameBoardModule.playerArray[3]+ " win!");
                body.appendChild(message);
                makeMove.forEach(makeMoves => {
                    makeMoves.remove();
                });
                startGameButton.remove();
                return;
            } else if(gameBoardModule.gameBoard.length == 9) {
                console.log("its a tie");
                const body = document.querySelector("body");
                const message = document.createElement("h1");
                message.textContent=("its a tie");
                body.appendChild(message);
                makeMove.forEach(makeMoves => {
                    makeMoves.remove();
                });
                startGameButton.remove();
                return;
            }
            gameBoardModule.makePlayerMove();
        }
    index++;
    })

    const startGameButton = document.querySelector(".start-game-button");
    startGameButton.addEventListener("click",createPlayer);

    const clearButtonBoard = document.querySelector(".clear-board-button");
    clearButtonBoard.addEventListener("click", clearBoard);

    function clearBoard () {
        location.reload();
    }

    //let testg =()=> {console.log("testing private function on a module...")};
    return{};
})();



//let Rose = createPlayer("Rose",1,"X");
//let Martin = createPlayer("Martin",2,"O");