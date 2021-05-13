var solve = function(board) {
    let ans = [];
    ans.push(board[0].slice())
    function flip(brd, a, j, i) {
        let up = brd[i-1][j];
        let down = brd[i+1][j];
        let left = brd[i][j-1];
        let right = brd[i][j+1];
        if((left ==='O' || right === 'O') || (up === 'O' || down === 'O')){
            a[i][j] = 'X'
        }
        return
    }
    for(var i = 1; i < board.length - 1; i++){
        ans.push(board[i].slice())
        for(let j = 1; j < board[0].length - 1; j++){
            if(board[i][j] === 'O'){
                flip(board, ans, j, i);
            }
        }
    }
    ans.push(board[i].slice())
    return ans;
};

console.log(solve([["X","X","X","X"],["X","O","X","X"],["X","X","O","O"],["X","O","X","X"]]))
