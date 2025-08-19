"use client";

import React, { useState } from "react";
import Board from "./Board";
import GameState from "./GameState";
import ResetBtn from "./ResetBtn";
import Scoreboard from "./ScoreBoard";

const TicTacToe: React.FC = () => {
  const [cells, setCells] = useState<(string | null)[]>(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState<boolean>(true);
  const [winner, setWinner] = useState<string | null>(null);

  // 🏆 Counters
  const [xWins, setXWins] = useState<number>(0);
  const [oWins, setOWins] = useState<number>(0);
  const [draws, setDraws] = useState<number>(0);

  // Winning logic
  const checkWinner = (squares: (string | null)[]): string | null => {
    const combos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let [a, b, c] of combos) {
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  // Handle move
  const handleClick = (index: number) => {
    if (cells[index] || winner) return;

    const newCells = [...cells];
    newCells[index] = isXTurn ? "X" : "O";
    setCells(newCells);

    const gameWinner = checkWinner(newCells);
    if (gameWinner) {
      setWinner(gameWinner);
      if (gameWinner === "X") setXWins((p) => p + 1);
      if (gameWinner === "O") setOWins((p) => p + 1);
    } else if (newCells.every((cell) => cell !== null)) {
      setDraws((p) => p + 1);
    } else {
      setIsXTurn(!isXTurn);
    }
  };

  // Reset
  const resetGame = () => {
    setCells(Array(9).fill(null));
    setWinner(null);
    setIsXTurn(true);
  };

  const isDraw = cells.every((cell) => cell !== null) && !winner;

  return (
    <div className="flex flex-col items-center mt-36">
      <div className="flex gap-12">
        {/*Board section */}
        <div>
          <h1 className="text-2xl font-bold mb-6">Tic Tac Toe</h1>
          <Board cells={cells} onCellClick={handleClick} />
        </div>

        {/* GameState + Scoreboard + ResetBtn*/}
        <div className="mt-14 flex flex-col items-center gap-4">
          <GameState winner={winner} isDraw={isDraw} isXTurn={isXTurn} />
          <Scoreboard xWins={xWins} oWins={oWins} draws={draws} />
          <ResetBtn resetGame={resetGame} />
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;
