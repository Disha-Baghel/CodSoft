import React from "react";
import { useState } from "react";
import Board from "./components/Board";
import Reset from "./components/Reset";

function App() {
  const WINNING_COMBINATIONS = [
    [0, 1, 2], //top row
    [3, 4, 5], //middle row
    [6, 7, 8], //bottom row
    [0, 3, 6], //left column
    [1, 4, 7], //middle column
    [2, 5, 8], //right column
    [0, 4, 8], //diagonal
    [2, 4, 6], //diagonal
  ];

  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [win, setWin] = useState(null);
  // const [boardFull, setBoardFull] = useState(false);

  const reset = () => {
    setBoard(Array(9).fill(null));
    setXPlaying(true);
    setWin(null);
  };

  const handleClick = (boxindex) => {
    if (win !== null) {
      return null;
    }
    
    
    board[boxindex] = "X";
    
  
    setWin(checkWinner(board));
    // console.log(win);
    if (win === null) {
      let move = bestMove(board);
      board[move] = "O";
      // console.log(move);
    }
    setBoard([...board]);
    
  };

  const checkWinner = (board) => {
    for (let i = 0; i < WINNING_COMBINATIONS.length; i++) {
      const [x, y, z] = WINNING_COMBINATIONS[i];

      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        return board[x];
      }
    }
    // let c = checkBoardfull(board);
    return (checkBoardfull(board));
  };

  const checkBoardfull = (board) => {
    let flag = true;
    for (let i = 0; i < board.length; i++) {
      if (board[i] === null) {
        flag = false;
      }
    }
    if (flag === true) {
      return "tie";
    }
    return null;
  };

  ///////////////minimax//////////////////////////////////////////////

  function bestMove(board) {
    let bestScore = -Infinity;
    let move;

    for (let i = 0; i<board.length; i++) {
      if (board[i] === null) {
        board[i] = "O";
        let score = minimax(board, 0, false);
        // console.log(score);
        board[i] = null;
        if (score > bestScore) {
          bestScore = score;
          move = i;
        }
      }
    }
    // board[move] = "O";
    return move;
  }

  const scores = {
    X: -1,
    O: 1,
    tie: 0,
  };

  function minimax(board, depth, isMaximizing) {
    let result = checkWinner(board);
    
    if (result !== null) {
      return scores[result];
    }

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < board.length; i++) {
        if (board[i] === null) {
          board[i] = "O";
          let score = minimax(board, depth + 1, false);
          board[i] = null;
          bestScore = Math.max(score, bestScore);
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < board.length; i++) {
        if (board[i] === null) {
          board[i] = "X";
          let score = minimax(board, depth + 1, true);
          board[i] = null;
          bestScore = Math.min(score, bestScore);
        }
      }
      return bestScore;
    }
  }
  /////////////////////////////////////////////////////////////////////
  return (
    <>
      <div className="flex justify-center items-center flex-col h-screen bg-orange-200">
        <h1 className="text-4xl font-mono font-semibold">Tic Tac Toe</h1>
        <div>
          <Board board={board} onClick={handleClick} />
        </div>
        <br></br>
        <div>
          <Reset onClick={reset} />
        </div>
        <br></br>
        <div>
          <p
            className={`text-2xl font-mono font-bold ${
              win === null ? "invisible" : "visible"
            }`}
          >
            Winner: {win}
          </p>
        </div>
      </div>
    </>
  );
}
export default App;
