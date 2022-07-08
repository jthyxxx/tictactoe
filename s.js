const Gameboard = () => {
    let board = [
        "?","?","?",
        "?","?","?",
        "?","?","?"
    ];

    const checkPattern = (x) => {
        if(
            (board[0] === x  && board[1] === x  && board[2] === x ) ||
            (board[3] === x  && board[4] === x  && board[5] === x ) ||
            (board[6] === x  && board[7] === x  && board[8] === x ) ||  
            (board[0] === x  && board[3] === x  && board[6] === x ) || 
            (board[1] === x  && board[4] === x  && board[7] === x ) || 
            (board[2] === x  && board[5] === x  && board[8] === x ) || 
            (board[0] === x  && board[4] === x  && board[8] === x ) || 
            (board[2] === x  && board[4] === x  && board[6] === x )
        ){
            return 1;
        }else{
            return 0;
        }
    }
    return {board, checkPattern}
};

const player = (name) => {

    const playerName = () => name;
    const tilesClicked = id => game.updateBoard(playerName(),id);
    return {playerName,tilesClicked}
}


let tictactoe = Gameboard();
let computerBoard = Gameboard();

const game = (() => {

    const winPattern = [123,456,789,147,258,369,159,357]
    let moves = 0;
    const human = player('me');
    const computer = player('bot');

    const tiles = document.querySelectorAll('.boardTiles');
    


    //player moves
    tiles.forEach((tile) => {
        tile.addEventListener('click', () => {
            if(tictactoe.board[tile.id] == "?"){
                tile.innerHTML = 'x';
                human.tilesClicked(tile.id)

                const myTimeout = setTimeout(computerMoves, 1000)
            }
        })
    })


    //computer random moves
    const computerMoves = () => {
        let move = Math.floor(Math.random()*9);
        
        if(moves < 2){
            if(tictactoe.board[move] === "?"){
                computer.tilesClicked(move)
            }else{
                computerMoves()
            }
        }else{
            for(let i = 0; i < 9; i++){
                if(computerBoard.board[i] === "?"){
                    computerBoard.board[i] = 'x';
                    let result = computerBoard.checkPattern('x');
                    if(result === 1){
                        computerBoard.board[i] = 'o';
                        computer.tilesClicked(i);
                        break;
                    }else{
                        computerBoard.board[i] = '?';
                    }
                }
            }
            
        }
    }

    let updateBoard = (name,tile) => {
        
        console.log(name,tile);
        if(name === 'me'){
            tictactoe.board[tile] = 'x';
            computerBoard.board[tile] = 'x';
            tiles[tile].innerHTML = 'x'
            moves++;
            if((tictactoe.checkPattern('x')) === 1){
                alert("You Win!");
                tiles.forEach((tile) => {
                    tile.removeEventListener('click', () => {
                        tile.innerHTML = "";
                    })
                })
            }
        }else{
            tiles[tile].style.color = 'black';
            tictactoe.board[tile] = 'o';
            computerBoard.board[tile] = 'o';
            tiles[tile].innerHTML = 'o'
            if((tictactoe.checkPattern('o')) === 1){
                alert("Computer Win!");
                tiles.forEach((tile) => {
                    tile.removeEventListener('click', () => {
                        tile.innerHTML = "";
                    })
                })
            }
        }

    }; 

    
    return {updateBoard, tictactoe}

})();


