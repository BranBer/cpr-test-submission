import AIReadinessScore from "./AIReadinessScore";
import { ProgressBar } from "./ProgressBar";
import Questions from "./Questions";

const AIStrategyQuestionnaire = () => {
  return (
    <div className="flex items-center justify-center w-full h-full p-content">
      <div className="bg-white flex flex-row w-full h-5/6 gap-x-10 items-stretch">
        <div className="bg-white h-full flex-1 flex-col items-center justify-center gap-y-2 z-50 overflow-hidden">
          <ProgressBar />

          <div className="flex-1 h-questions">
            <Questions />
          </div>
        </div>
        <div className="bg-lightGray flex-1 h-full bg-lightGray z-100">
          <AIReadinessScore />
        </div>
      </div>
    </div>
  );
};

export default AIStrategyQuestionnaire;
