import { TQuestion } from "@/interfaces/question";
import { FC } from "react";
import { TextQuestion } from "./TextQuestion";
import { SelectQuestion } from "./SelectQuestion";

interface IQuestionProps {
  question: TQuestion;
  defaultValue: string;
  onAnswer: (value: string) => void;
}

export const Question: FC<IQuestionProps> = ({
  question,
  onAnswer,
  defaultValue,
}) => {
  return (
    question && (
      <div className="flex flex-col flex-1 items-center py-16">
        <div className=" scale-150 p-8">{question.icon}</div>
        <h2 className="text-xl font-bold">{question.label}</h2>

        {question.type === "radio" ? (
          <SelectQuestion
            question={question}
            defaultValue={defaultValue || question.value}
            className="w-1/2 mt-8"
            onAnswer={onAnswer}
          />
        ) : (
          <TextQuestion
            className="w-1/2 mt-8"
            defaultValue={defaultValue || question.value}
            onAnswer={onAnswer}
          />
        )}
      </div>
    )
  );
};
