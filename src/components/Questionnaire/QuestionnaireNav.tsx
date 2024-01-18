import { FC } from "react";
import { Button } from "../ui/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface IQuestionnaireNavProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  isFirst: boolean;
  isLast: boolean;
  canGoNext: boolean;
  onNext: () => void;
  onComplete: () => void;
  onPrev: () => void;
}

const QuestionnaireNav: FC<IQuestionnaireNavProps> = ({
  isFirst,
  isLast,
  onNext,
  onPrev,
  onComplete,
  canGoNext,
  ...props
}) => {
  return (
    <div className="flex" {...props}>
      {/* If the question index is first hide previous button */}
      {/* Prev */}
      {!isFirst && (
        <Button onClick={onPrev} variant="outline">
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>
      )}

      {/* If the question index is not last display next button */}
      {/* Next */}
      {!isLast && (
        <Button disabled={!canGoNext} onClick={onNext} variant="outline">
          Next
          <ChevronRight className="h-4 w-4" />
        </Button>
      )}

      {/* If the question index is last display Submit button to call complete questionnaire */}
      {/* Summary */}
      {isLast && (
        <Button disabled={!canGoNext} onClick={onComplete} variant="outline">
          Submit
        </Button>
      )}
    </div>
  );
};

export default QuestionnaireNav;
