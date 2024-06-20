import QuestionsControls from "./QuestionsControls";
import {
  nextQuestion,
  prevQuestion,
  selectCurrentQuestionIndex,
  selectIsChoiceSelected,
  selectQuestionsLength,
} from "../redux/slices/questionnaireSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const QuestionsControlsContainer = () => {
  const dispatch = useAppDispatch();
  const questionsLength = useAppSelector(selectQuestionsLength);
  const currentQuestionIndex = useAppSelector(selectCurrentQuestionIndex);
  const isChoiceSelected = useAppSelector(selectIsChoiceSelected);

  const disableNext =
    currentQuestionIndex + 1 === questionsLength || !isChoiceSelected;
  const disabledBack = currentQuestionIndex === 0;

  return (
    <QuestionsControls
      onBack={() => {
        dispatch(prevQuestion());
      }}
      onNext={() => {
        dispatch(nextQuestion());
      }}
      disabledNext={disableNext}
      disabledBack={disabledBack}
    />
  );
};

export default QuestionsControlsContainer;
