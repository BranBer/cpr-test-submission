import type React from "react";
import Button from "./Button";

interface QuestionsControlsProps {
  onBack: () => void;
  disabledBack?: boolean;
  onNext: () => void;
  disabledNext?: boolean;
}

const QuestionsControls: React.FC<QuestionsControlsProps> = ({
  onBack,
  onNext,
  disabledBack = false,
  disabledNext = false,
}) => {
  return (
    <div className="flex flex-row justify-between w-full">
      <Button variant="outlined" onClick={onBack} disabled={disabledBack}>
        Back
      </Button>
      <Button onClick={onNext} disabled={disabledNext}>
        Next
      </Button>
    </div>
  );
};

export default QuestionsControls;
