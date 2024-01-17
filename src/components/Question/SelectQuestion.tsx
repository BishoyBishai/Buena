import { FC, InputHTMLAttributes, useState } from "react";
import { IRadioQuestion } from "@/interfaces/question";
import { Checkbox } from "../ui/checkbox";
import { Label } from "@radix-ui/react-label";

interface IQuestionProps extends InputHTMLAttributes<HTMLInputElement> {
  defaultValue: string;
  question: IRadioQuestion;
  onAnswer: (value: string) => void;
}

export const SelectQuestion: FC<IQuestionProps> = ({
  onAnswer,
  question,
  defaultValue,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>(defaultValue);

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  const handleAnswer = () => {
    onAnswer(selectedOption);
  };

  return (
    <div>
      {question.options.map((option) => (
        <div className="flex py-2  items-center gap-4 ">
          <Checkbox
            key={option.value}
            id={option.value}
            value={option.value}
            checked={selectedOption === option.value}
            onClick={() => handleOptionChange(option.value)}
            onBlur={handleAnswer}
          />
          <Label htmlFor={option.value}>{option.label}</Label>
        </div>
      ))}
    </div>
  );
};
