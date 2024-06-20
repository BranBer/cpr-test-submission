import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface Choice {
  choice: string;
  points: number;
}
interface Question {
  question: string;
  choices: Choice[];
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
        {
          choice: "We are exploring but have not yet formulated an AI strategy",
          points: 10,
        },
        {
          choice:
            "We are actively developing an AI strategy and defining goals",
          points: 20,
        },
        { choice: "We are executing on our AI strategy", points: 30 },
        {
          choice:
            "We are continuously iterating and improving on our mature AI strategy",
          points: 40,
        },
      ],
      selectedAnswerIndex: null,
    },
    {
      question:
        "How would you describe the state of data in your organization?",
      choices: [
        {
          choice:
            "We do not know where data resides. It is challenging to find the data we need",
          points: 10,
        },
        {
          choice:
            "We know where data resides, but it is located in disconnected locations. We need guidance.",
          points: 20,
        },
        {
          choice:
            "We have the connected data we need, but do not always trust its quality",
          points: 30,
        },
        {
          choice: "We have mature data governance, management, and quality",
          points: 40,
        },
      ],
      selectedAnswerIndex: null,
    },
    {
      question:
        "Which statement best describes how your organization develops AI?",
      choices: [
        {
          choice:
            "We’re not developing our own AI models but planning to use AI tools",
          points: 10,
        },
        {
          choice: "We are experimenting with pre-training AI models",
          points: 20,
        },
        {
          choice: "We are training and fine tuning our own AI models",
          points: 30,
        },
        {
          choice:
            "We have implemented generative AI into customer-facing processes",
          points: 40,
        },
      ],
      selectedAnswerIndex: null,
    },
    {
      question: "How are you currently using AI applications?",
      choices: [
        {
          choice:
            "We are not using AI applications and analyze data manually using Excel.",
          points: 10,
        },
        {
          choice:
            "We have identified goals and are exploring AI applications to use.",
          points: 20,
        },
        {
          choice: "We are implementing AI applications but have not used them.",
          points: 30,
        },
        {
          choice:
            "We have used AI applications that provide critical insights on our business.",
          points: 40,
        },
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
      ) {
        state.questions[state.currentQuestionIndex].selectedAnswerIndex = null;
        const previousChoice =
          state.questions[state.currentQuestionIndex].choices[action.payload];
        state.score -= previousChoice.points;
      } else {
        const currentQuestion = state.questions[state.currentQuestionIndex];
        const previousSelectedIndex = currentQuestion.selectedAnswerIndex;

        if (previousSelectedIndex !== null) {
          const previousChoice = currentQuestion.choices[previousSelectedIndex];
          state.score -= previousChoice.points;
        }

        const newChoice = currentQuestion.choices[action.payload];
        state.score += newChoice.points;

        state.questions[state.currentQuestionIndex].selectedAnswerIndex =
          action.payload;
      }
    },
    nextQuestion(state) {
      if (state.currentQuestionIndex + 1 < state.questions.length)
        state.currentQuestionIndex++;
    },
    prevQuestion(state) {
      if (state.currentQuestionIndex > 0) state.currentQuestionIndex--;
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

export const computeScorePercentage = (state: RootState) => {
  const maxScore = state.questionnaire.questions.reduce((acc, question) => {
    const sumOfMaxPoints = question.choices.reduce(
      (max, choice) => Math.max(max, choice.points),
      0
    );
    return acc + sumOfMaxPoints;
  }, 0);
  return (state.questionnaire.score / maxScore) * 100;
};

export const { nextQuestion, prevQuestion, selectAnswer } =
  questionnaireSlice.actions;
