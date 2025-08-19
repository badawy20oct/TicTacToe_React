import React from "react";

type ScoreBoardProps = {
  xWins: number;
  oWins: number;
  draws: number;
};

const ScoreBoard: React.FC<ScoreBoardProps> = ({ xWins, oWins, draws }) => {
  return (
    <div className="p-4 border-2 border-gray-500 rounded-lg w-[200px] text-center">
      <h2 className="text-xl font-bold mb-2">Scoreboard</h2>
      <div className="grid grid-cols-3 gap-2">
        <div className="font-bold">X</div>
        <div className="font-bold">O</div>
        <div className="font-bold">Draw</div>

        <div>{xWins}</div>
        <div>{oWins}</div>
        <div>{draws}</div>
      </div>
    </div>
  );
};

export default ScoreBoard;
