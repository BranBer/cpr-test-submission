import { useAppSelector } from "../redux/hooks";
import { selectScore } from "../redux/slices/questionnaireSlice";

const AIReadinessScore = () => {
  const score = useAppSelector(selectScore);
  return (
    <div className="w-full h-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className="text-mediumGray">AI Readiness Score</h1>
      <h1 className="text-secondary text-score">{score}%</h1>
    </div>
  );
};

export default AIReadinessScore;
