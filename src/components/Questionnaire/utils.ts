import { TAnswers, TQuestion } from "@/interfaces/question";

export const getQuestionAnswer = (question: TQuestion, answers: TAnswers) => {
  if (question.type == "radio") {
    const selectedOption = question.options.filter(
      (option) => option.value === answers[question.name]
    );
    return selectedOption[0] && selectedOption[0].label;
  }
  return answers[question.name];
};
