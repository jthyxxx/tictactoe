//check for empty element
//if element is empty, check if marking it x will make me win
//if it will make me win, mark it o



/* for(let i = 0; i < 5; i++){
    if(computerBoard.board[i] === "?"){
        computerBoard.board[i] = 'x';

    }
} 




*/

//aim for winning pattern


const pattern = {
    one: [0,1,2],
    two: [3,4,5],
    three: [6,7,8],
}


const winningPattern = (x) => {
    const pattern = {
        one: [0,1,2],
        two: [3,4,5],
        three: [6,7,8]
    }
    let i = 0;
    if(x === pattern.one[i]){
        return pattern.one[i+1];
        i++;
    }
}