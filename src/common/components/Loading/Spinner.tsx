import { SVGProps, memo } from "react";
import { twMerge } from "tailwind-merge";

interface LoadingSpinnerProps extends SVGProps<SVGSVGElement> {
  circleProps?: SVGProps<SVGCircleElement>;
}

const LoadingSpinner = ({ className, circleProps, ...props }: LoadingSpinnerProps) => {
  return (
    <svg className={twMerge("h-8 w-8 stroke-primary", className, "spinner")} viewBox="0 0 50 50" {...props}>
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="5"
        strokeLinecap="round"
        {...circleProps}
      />
    </svg>
  );
};

export default memo(LoadingSpinner);
