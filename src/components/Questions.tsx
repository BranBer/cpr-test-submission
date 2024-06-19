import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  selectAnswer,
  selectQuestion,
} from "../redux/slices/questionnaireSlice";
import Choice from "./Choice";
import QuestionsControls from "./QuestionsControls";

const Questions = () => {
  const { question, choices, selectedAnswerIndex } =
    useAppSelector(selectQuestion);

  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col flex-nowrap items-start justify-start w-full h-full gap-y-10">
      <h1 className="text-primary w-full text-3xl">{question}</h1>
      <div className="grid grid-rows-2 grid-cols-2 gap-x-4 gap-y-4">
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
      <QuestionsControls />
    </div>
  );
};

export default Questions;
