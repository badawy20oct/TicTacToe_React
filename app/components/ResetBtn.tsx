import React from "react";

type ResetBtnProps = {
  resetGame: () => void;
};

const ResetBtn: React.FC<ResetBtnProps> = ({ resetGame }) => {
  return (
    <button
      onClick={resetGame}
      className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-900"
    >
      Reset Game
    </button>
  );
};

export default ResetBtn;
