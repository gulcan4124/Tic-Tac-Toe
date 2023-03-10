// set up gameBoard module

let gameBoardModule = (function() {
    let gameBoard = ["X"] ;
    return {gameBoard};
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
        }
    index++;
    })

    let testg =()=> {console.log("testing private function on a module...")};
    return{testg};
})();

// set up function for create the players

let createPlayer = (playerName, playerNumber, signXO) => {
    let getPlayerName = () => { playerName;
    console.log("name of the player" + playerNumber + "..." + playerName);}
    return{getPlayerName,playerName,playerNumber,signXO};
}



let Rose = createPlayer("Rose",1,"X");
let Martin = createPlayer("Martin",2,"O");