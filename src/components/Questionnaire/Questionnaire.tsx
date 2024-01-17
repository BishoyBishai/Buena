import { TAnswers, TQuestion } from "@/interfaces/question";
import { FC, useState } from "react";
import { QuestionMode } from "./QuestionMode";
import Summary from "./Summary";

interface IQuestionnaireProps {
  questions: TQuestion[];
}

export const Questionnaire: FC<IQuestionnaireProps> = ({ questions }) => {
  const [mode, setMode] = useState<"questions" | "summary">("questions");
  const [answers, setAnswers] = useState<TAnswers>({});

  const handleCompleteQuestionnaire = (questionnaireAnswers: TAnswers) => {
    setAnswers(questionnaireAnswers);
    setMode("summary");
  };
  const handleResetQuestionnaire = () => {
    setMode("questions");
  };

  return (
    <div className="flex">
      {mode === "questions" ? (
        <QuestionMode
          questions={questions}
          onComplete={handleCompleteQuestionnaire}
        />
      ) : (
        <Summary
          questions={questions}
          answers={answers}
          onResetQuestionnaire={handleResetQuestionnaire}
        />
      )}
    </div>
  );
};
