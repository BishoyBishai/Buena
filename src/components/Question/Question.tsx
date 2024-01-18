import { TQuestion } from "@/interfaces/question";
import { FC } from "react";
import { TextQuestion } from "./TextQuestion";
import { SelectQuestion } from "./SelectQuestion";
import { motion } from "framer-motion";
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
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 100, opacity: 0 }}
        transition={{ type: "tween", duration: 0.5 }}
        className="flex flex-col flex-1 items-center py-16"
      >
        <div className=" scale-150 p-8">{question.icon}</div>
        <h2 className="text-xl font-bold">{question.label}</h2>

        {question.type === "radio" ? (
          <SelectQuestion
            question={question}
            defaultValue={defaultValue || question.value}
            className="md:w-1/2 mt-8"
            onAnswer={onAnswer}
          />
        ) : (
          <TextQuestion
            className="md:w-1/2 mt-8"
            defaultValue={defaultValue || question.value}
            onAnswer={onAnswer}
          />
        )}
      </motion.div>
    )
  );
};
