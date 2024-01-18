import { TAnswers, TQuestion } from "@/interfaces/question";
import { FC } from "react";
import { Button } from "../ui/Button";
import { toPlainText } from "@/lib/toPlainText";
import { getQuestionAnswer } from "./utils";
import { motion } from "framer-motion";

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
    <div className="py-8 w-full md:w-1/4 flex flex-col">
      <h3 className="text-lg font-bold"> Here is your answers</h3>
      {questions.map((question, index) => (
        <motion.div
          key={question.name}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.5 }}
          className="flex gap-4 py-2 justify-between"
        >
          <div className="flex gap-2">
            {question.icon}
            <p className="capitalize">{toPlainText(question.name)}:</p>
          </div>
          <div>{getQuestionAnswer(question, answers)}</div>
        </motion.div>
      ))}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: questions.length * 0.5 }}
      >
        <Button
          className="self-center mt-0 w-1/2 md:w-auto md:self-end"
          onClick={onResetQuestionnaire}
        >
          Reset
        </Button>
      </motion.div>
    </div>
  );
};

export default Summary;
