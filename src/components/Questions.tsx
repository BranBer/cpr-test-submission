import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  selectAnswer,
  selectQuestion,
} from "../redux/slices/questionnaireSlice";
import Choice from "./Choice";
import QuestionsControlsContainer from "./QuestionsControlsContainer";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

const Questions = () => {
  const { question, choices, selectedAnswerIndex } =
    useAppSelector(selectQuestion);

  const dispatch = useAppDispatch();

  return (
    <motion.div
      layout
      className="flex flex-col flex-nowrap items-start justify-start w-full h-full gap-y-4 p-questions"
    >
      <LayoutGroup>
        <AnimatePresence mode="wait" initial={false} presenceAffectsLayout>
          <motion.div
            className="flex flex-col flex-nowrap items-start justify-between gap-y-4"
            key={question}
            layout
            transition={{
              type: "tween",
              ease: "easeInOut",
            }}
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
          >
            <motion.h1 className="text-primary w-full text-3xl" layout>
              {question}
            </motion.h1>
            <motion.div
              layout
              className="flex-1 w-full grid grid-rows-choice grid-cols-choice gap-x-4 gap-y-4"
            >
              {choices.map(({ choice }, index) => {
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
            </motion.div>
          </motion.div>
        </AnimatePresence>
        <motion.div className="w-full" layout>
          <QuestionsControlsContainer />
        </motion.div>
      </LayoutGroup>
    </motion.div>
  );
};

export default Questions;
