import { TAnswers, TQuestion } from "@/interfaces/question";
import { FC } from "react";
import { Button } from "../ui/Button";
import { toPlainText } from "@/lib/toPlainText";
import { getQuestionAnswer } from "./utils";

interface ISummaryProps {
  questions: TQuestion[];
  answers: TAnswers;
  onResetQuestionnaire: () => void;
}

const Summary: FC<ISummaryProps> = ({
  questions,
  answers,
  onResetQuestionnaire,
}) => {
  return (
    <div className="py-8  w-1/4 flex flex-col">
      <h3 className="text-lg font-bold"> Here is your answers</h3>
      {questions.map((question) => (
        <div key={question.name} className="flex gap-4 py-2 justify-between">
          <div className="flex gap-2">
            {question.icon}
            <p className="capitalize">{toPlainText(question.name)}:</p>
          </div>
          <div>{getQuestionAnswer(question, answers)}</div>
        </div>
      ))}
      <Button className="self-end" onClick={onResetQuestionnaire}>
        Reset
      </Button>
    </div>
  );
};

export default Summary;
