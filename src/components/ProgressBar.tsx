import { useAppSelector } from "../redux/hooks";
import { selectProgressPercentage } from "../redux/slices/questionnaireSlice";

export const ProgressBar = () => {
  const progress = useAppSelector(selectProgressPercentage);

  return (
    <div className="bg-lightGray h-progress w-full rounded-lg flex flex-row justify-start items-center">
      <div
        className="bg-secondary h-full rounded-lg transition-width ease-in-out duration-300"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
