import React from "react";

type GameStateProps = {
  winner: string | null;
  isDraw: boolean;
  isXTurn: boolean;
};

const GameState: React.FC<GameStateProps> = ({ winner, isDraw, isXTurn }) => {
  if (winner) return <p className="text-xlg font-bold mt-4">{winner} Wins 🎉</p>;
  if (isDraw) return <p className="text-xlg font-bold mt-4">It’s a Draw 🤝</p>;
  return <p className="text-2xl font-bold mt-4"> {isXTurn ? "X" : "O"}'s Turn</p>;
};

export default GameState;
