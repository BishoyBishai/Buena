import { FC, InputHTMLAttributes, useState } from "react";
import { Input } from "../ui/Input";

interface IQuestionProps extends InputHTMLAttributes<HTMLInputElement> {
  defaultValue: string;
  onAnswer: (value: string) => void;
}
/**
 * TextQuestion is component for render question with input tag
 */
export const TextQuestion: FC<IQuestionProps> = ({
  defaultValue,
  onAnswer,
  ...props
}) => {
  const [value, setValue] = useState(defaultValue);

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const handleAnswer = () => {
    onAnswer(value);
  };

  return (
    <Input
      {...props}
      value={value}
      onChange={handleValueChange}
      onBlur={handleAnswer}
    />
  );
};
