import { FC } from "react";
import { Button } from "../ui/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface IQuestionnaireNavProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  isFirst: boolean;
  isLast: boolean;
  canGoNext: boolean;
  onNext: () => void;
  onPrev: () => void;
}

const QuestionnaireNav: FC<IQuestionnaireNavProps> = ({
  isFirst,
  isLast,
  onNext,
  onPrev,
  canGoNext,
  ...props
}) => {
  return (
    <div className="flex" {...props}>
      {/* Prev */}
      {!isFirst && (
        <Button onClick={onPrev} variant="outline" size="icon">
          <ChevronLeft className="h-4 w-4" />
        </Button>
      )}
      {/* Next */}
      {!isLast && (
        <Button
          disabled={!canGoNext}
          onClick={onNext}
          variant="outline"
          size="icon"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
};

export default QuestionnaireNav;
