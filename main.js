// set up gameBoard module

let gameBoardModule = (function() {
    let gameBoard = ["X"] ;
    return {gameBoard};
})();

// set up displayControllerModule

let displayControllerModule = (function() {
    let testg =()=> {console.log("testing private function on a module...")};
    return{testg};
})();

// set up function for create the players

let createPlayer = (playerName, playerNumber, signXO) => {
    let getPlayerName = () => { playerName;
    console.log("name of the player" + playerNumber + "..." + playerName);}
    return{getPlayerName,playerName,playerNumber,signXO};
}

// set module for array display to gameBoard

let renderArray = (function () {

    const gridBoxes = document.querySelectorAll(".grid-box");

    gridBoxes[0].textContent = gameBoardModule.gameBoard;
    
})

let Rose = createPlayer("Rose",1,"X");
let Martin = createPlayer("Martin",2,"O");