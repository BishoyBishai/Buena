import { TAnswers, TQuestion } from "@/interfaces/question";
import { FC, useState } from "react";
import { QuestionMode } from "./QuestionMode";
import Summary from "./Summary";
import { motion } from "framer-motion";

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
    <motion.div
      key={mode}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
      className="flex"
    >
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
    </motion.div>
  );
};
