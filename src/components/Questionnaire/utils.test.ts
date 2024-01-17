import { IRadioQuestion, TAnswers, TQuestion } from "@/interfaces/question";
import { getQuestionAnswer } from "./utils";

describe("getQuestionAnswer", () => {
  const questionRadio: IRadioQuestion = {
    name: "questionRadio",
    type: "radio",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
    ],
    label: "",
    value: "",
  };

  const questionText: TQuestion = {
    name: "questionText",
    type: "text",
    label: "",
    value: "",
  };

  const answers: TAnswers = {
    questionRadio: "option1",
    questionText: "Some text",
  };

  it("should return the label of the selected radio option", () => {
    expect(getQuestionAnswer(questionRadio, answers)).toBe("Option 1");
  });

  it("should return the answer for a non-radio question", () => {
    expect(getQuestionAnswer(questionText, answers)).toBe("Some text");
  });

  it("should return undefined for an unanswered question", () => {
    expect(getQuestionAnswer(questionText, {})).toBeUndefined();
  });
});
