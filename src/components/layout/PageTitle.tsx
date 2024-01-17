import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

interface IPageTitleProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  title: string;
  subTitle?: ReactNode;
}
/**
 * PageTitle is reusable component to display page title and description
 */
export const PageTitle: FC<IPageTitleProps> = ({
  title,
  subTitle,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-y-2 justify-between md:flex-row",
        className
      )}
    >
      <div
        className="flex flex-col justify-between space-y-2 items-center md:items-start"
        {...props}
      >
        <h2 className="text-xl font-bold tracking-tight">{title}</h2>
        {subTitle && (
          <h3 className="max-w-[750px] text-muted-foreground text-base  max-md:text-center">
            {subTitle}
          </h3>
        )}
      </div>
    </div>
  );
};
