import type React from "react";

interface ChoiceProps {
  choice: string;
  selected: boolean;
  onClick: () => void;
}

const Choice: React.FC<ChoiceProps> = ({ selected, choice, onClick }) => {
  const selectedBorder = selected
    ? "border-selectedChoice border-secondary"
    : "border-choice border-lightGray";

  const inverseSelectedBorder = selected
    ? "border-choice border-transparent"
    : "border-selectedChoice border-transparent";

  const hoverBorderTransition = selected
    ? ""
    : "transition-colors ease-in-out duration-300 hover:border-gray-400";
  return (
    <div
      className={`relative flex w-full h-full border-transparent rounded-lg cursor-pointer ${inverseSelectedBorder}`}
      onClick={onClick}
    >
      <div
        className={`relative w-full h-full p-4 border-lightGray rounded-lg ${selectedBorder} ${hoverBorderTransition}`}
      >
        <p className="text-primary text-choice">{choice}</p>
      </div>
    </div>
  );
};

export default Choice;
