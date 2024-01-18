import { TAnswers, TQuestion } from "@/interfaces/question";

/**
 * getQuestionAnswer returns the answer of the question based on the question type
 */
export const getQuestionAnswer = (question: TQuestion, answers: TAnswers) => {
  // if the question is radio return the label text of the question's answer
  if (question.type == "radio") {
    const selectedOption = question.options.filter(
      (option) => option.value === answers[question.name]
    );
    // if question is text return the question answer directly
    return selectedOption[0] && selectedOption[0].label;
  }
  return answers[question.name];
};
