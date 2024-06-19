import { ProgressBar } from "./ProgressBar";
import Questions from "./Questions";

const AIStrategyQuestionnaire = () => {
  return (
    <div className="flex flex-row w-full h-full gap-x-4 border-4 p-4">
      <div className="bg-white h-full flex flex-col items-start justify-start gap-y-2 w-1/2">
        <div className="w-3/4">
          <ProgressBar />
        </div>

        <Questions />
      </div>
    </div>
  );
};

export default AIStrategyQuestionnaire;
