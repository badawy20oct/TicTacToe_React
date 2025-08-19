import React from "react";
import Cell from "./Cell";

type BoardProps = {
  cells: (string | null)[];
  onCellClick: (index: number) => void;
};

const Board: React.FC<BoardProps> = ({ cells, onCellClick }) => {
  return (
    <div className="grid grid-cols-3 grid-rows-3 w-[300px] h-[300px] border-2 border-gray-500">
      {cells.map((cell, index) => (
        <Cell key={index} value={cell} onClick={() => onCellClick(index)} />
      ))}
    </div>
  );
};

export default Board;
