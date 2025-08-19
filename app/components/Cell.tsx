import React from "react";

type CellProps = {
  value: string | null;
  onClick: () => void;
};

const Cell: React.FC<CellProps> = ({ value, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex justify-center items-center text-[2em] border border-gray-400 cursor-pointer"
    >
      {value}
    </div>
  );
};

export default Cell;
