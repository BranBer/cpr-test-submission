import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  selectAnswer,
  selectQuestion,
} from "../redux/slices/questionnaireSlice";
import Choice from "./Choice";
import QuestionsControlsContainer from "./QuestionsControlsContainer";

const Questions = () => {
  const { question, choices, selectedAnswerIndex } =
    useAppSelector(selectQuestion);

  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col flex-nowrap items-start justify-between w-full h-full gap-y-4 p-questions">
      <h1 className="text-primary w-full text-3xl h-question">{question}</h1>
      <div className="flex-1 w-full grid grid-rows-choice grid-cols-choice gap-x-4 gap-y-4">
        {choices.map((choice, index) => {
          const selected = selectedAnswerIndex === index;
          return (
            <Choice
              choice={choice}
              selected={selected}
              onClick={() => {
                dispatch(selectAnswer(index));
              }}
              key={`${choice}${question}${index}`}
            />
          );
        })}
      </div>
      <QuestionsControlsContainer />
    </div>
  );
};

export default Questions;
