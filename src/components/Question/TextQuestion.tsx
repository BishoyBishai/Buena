import { FC, InputHTMLAttributes, useState } from "react";
import { Input } from "../ui/input";

interface IQuestionProps extends InputHTMLAttributes<HTMLInputElement> {
  defaultValue: string;
  onAnswer: (value: string) => void;
}

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
