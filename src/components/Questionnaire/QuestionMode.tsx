import { TAnswers, TQuestion } from "@/interfaces/question";
import { FC, useCallback, useState } from "react";
import { Question } from "../Question";
import { Progress } from "../ui/progress";
import QuestionnaireNav from "./QuestionnaireNav";

interface IQuestionnaireProps {
  questions: TQuestion[];
  onComplete: (answers: TAnswers) => void;
}

export const QuestionMode: FC<IQuestionnaireProps> = ({
  questions,
  onComplete,
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<TAnswers>({});

  const progressValue = ((currentQuestion + 1) / questions.length) * 100;
  const question = questions[currentQuestion];

  const handleNextQuestion = useCallback(() => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  }, []);

  const handlePrevQuestion = useCallback(() => {
    setCurrentQuestion((prevQuestion) => prevQuestion - 1);
  }, []);

  const handleAnswerQuestion = useCallback(
    (value: string) => {
      setAnswers((prevAnswers) => ({
        ...prevAnswers,
        [question.name]: value,
      }));
    },
    [question.name]
  );

  const handleCompleteQuestionnaire = () => {
    onComplete(answers);
  };

  const canGoNext = !question.required || !!answers[question.name];

  return (
    <div className="flex flex-col w-full flex-1 my-4 ">
      <Progress
        className="w-1/2 self-center shadow-inner"
        value={progressValue}
      />
      <Question
        key={question.name}
        defaultValue={answers[question.name]}
        question={question}
        onAnswer={handleAnswerQuestion}
      />
      <QuestionnaireNav
        className="flex justify-end"
        isFirst={currentQuestion === 0}
        isLast={currentQuestion === questions.length - 1}
        onNext={handleNextQuestion}
        onPrev={handlePrevQuestion}
        onComplete={handleCompleteQuestionnaire}
        canGoNext={canGoNext}
      />
    </div>
  );
};
