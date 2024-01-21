

function bestMove(board) {

    let bestScore = -Infinity;
    let move;

    for (let i=0; board.length; i++) {
        if (board[i] === null) {
            board[i] = "O";
            let score = minimax(board, 0, false);
            board[i] = null;
            if (score > bestScore) {
                bestScore = score;
                move = i;
            }
        }
    }
    board[move] = "O";
    return board;
}

const scores = {
    X: -1,
    O: 1,
    tie: 0
}

function minimax(board, depth, isMaximizing) {
    let result = checkWinner(board);
    if (result !== null) {
        return scores[result];
    }

    if (isMaximizing) {
        let bestScore = -Infinity; 
        for (let i=0; i<board.length; i++) {
            if (board[i] === null) {
                board[i] = "O";
                let score = minimax(board, depth+1, false);
                board[i] = null;
                bestScore = Math.max(score, bestScore);
            }
        }
        return bestScore;
    } 
    else {
        let bestScore = Infinity; 
        for (let i=0; i<board.length; i++) {
            if (board[i] === null) {
                board[i] = "X";
                let score = minimax(board, depth+1, true);
                board[i] = null;
                bestScore = Math.min(score, bestScore);
            }
        }
        return bestScore;
    }
    
}