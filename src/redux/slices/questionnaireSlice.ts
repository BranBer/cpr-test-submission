import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface Question {
  question: string;
  choices: string[];
  selectedAnswerIndex: number | null;
}

interface QuestionnaireState {
  questions: Question[];
  currentQuestionIndex: number;
  score: number;
}

const initialState: QuestionnaireState = {
  questions: [
    {
      question: "Does your organization have an AI strategy?",
      choices: [
        "We are exploring but have not yet formulated an AI strategy",
        "We are actively developing an AI strategy and defining goals",
        "We are executing on our AI strategy",
        "We are continuously iterating and improving on our mature AI strategy",
      ],
      selectedAnswerIndex: null,
    },
    {
      question:
        "How would you describe the state of data in your organization?",
      choices: [
        "We do not know where data resides. It is challenging to find the data we need",
        "We know where data resides, but it is located in disconnected locations. We need guidance.",
        "We have the connected data we need, but do not always trust its quality",
        "We have mature data governance, management, and quality",
      ],
      selectedAnswerIndex: null,
    },
    {
      question:
        "Which statement best describes how your organization develops AI?",
      choices: [
        "We’re not developing our own AI models but planning to use AI tools",
        "We are experimenting with pre-training AI models",
        "We are training and fine tuning our own AI models",
        "We have implemented generative AI into customer-facing processes",
      ],
      selectedAnswerIndex: null,
    },
    {
      question: "How are you currently using AI applications?",
      choices: [
        "We are not using AI applications and analyze data manually using Excel.",
        "We have identified goals and are exploring AI applications to use.",
        "We are implementing AI applications but have not used them.",
        "We have used AI applications that provide critical insights on our business.",
      ],
      selectedAnswerIndex: null,
    },
  ],
  currentQuestionIndex: 0,
  score: 0,
};

export const questionnaireSlice = createSlice({
  name: "questionnaire",
  initialState,
  reducers: {
    selectAnswer(state, action) {
      if (
        state.questions[state.currentQuestionIndex].selectedAnswerIndex ===
        action.payload
      )
        state.questions[state.currentQuestionIndex].selectedAnswerIndex = null;
      else
        state.questions[state.currentQuestionIndex].selectedAnswerIndex =
          action.payload;
    },
    nextQuestion(state) {
      if (state.currentQuestionIndex + 1 < state.questions.length)
        state.currentQuestionIndex++;
    },
    prevQuestion(state) {
      if (state.currentQuestionIndex > 0) state.currentQuestionIndex--;
    },
    setScore(state, action) {
      state.score = action.payload;
    },
  },
});

export const selectQuestion = (state: RootState) => {
  return state.questionnaire.questions[
    state.questionnaire.currentQuestionIndex
  ];
};

export const selectCurrentQuestionIndex = (state: RootState) => {
  return state.questionnaire.currentQuestionIndex;
};
export const selectQuestionsLength = (state: RootState) =>
  state.questionnaire.questions.length;

export const selectProgressPercentage = (state: RootState) => {
  const percentage =
    ((state.questionnaire.currentQuestionIndex + 1) /
      state.questionnaire.questions.length) *
    100;
  console.log("Percentage ", percentage);
  return percentage;
};

export const selectIsChoiceSelected = (state: RootState) =>
  state.questionnaire.questions[state.questionnaire.currentQuestionIndex]
    .selectedAnswerIndex !== null;

export const selectScore = (state: RootState) => state.questionnaire.score;

export const { nextQuestion, prevQuestion, selectAnswer, setScore } =
  questionnaireSlice.actions;
