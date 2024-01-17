import { ReactNode } from "react";

export type TTextQuestionType = "text" | "email";

interface IBasicQuestion {
  label: string;
  name: string;
  value: string;
  required?: boolean;
  icon?: ReactNode;
}

interface ITextQuestion extends IBasicQuestion {
  type: TTextQuestionType;
}
interface IOption {
  value: string;
  label: string;
}

export interface IRadioQuestion extends IBasicQuestion {
  type: "radio";
  options: IOption[];
}

export type TQuestion = ITextQuestion | IRadioQuestion;

export type TAnswers = Record<string, string>;
