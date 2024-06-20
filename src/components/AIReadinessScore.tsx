import { useAppSelector } from "../redux/hooks";
import { computeScorePercentage } from "../redux/slices/questionnaireSlice";

const AIReadinessScore = () => {
  const score = useAppSelector(computeScorePercentage);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h1 className="text-mediumGray text-xl">AI Readiness Score</h1>
      <h1 className="text-secondary text-score font-semibold">{score}%</h1>
    </div>
  );
};

export default AIReadinessScore;
