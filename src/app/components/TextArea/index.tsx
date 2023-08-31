import { ComponentPropsWithRef, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type TextAreaProps = ComponentPropsWithRef<"textarea"> & {
  label: string;
  className?: string;
};

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, className, ...rest }, ref) => {
    return (
      <div className="flex flex-col">
        <label
          htmlFor={label}
          className={
            "text-xs font-body mb-2 text-cyan-700"
          }
        >
          {label}
        </label>
        <textarea
          id={label}
          className={twMerge(
            className,
            "text-black font-body py-3 rounded-xl border pl-2 pr-2 placeholder:text-neutral-200 border-cyan-700"
          )}
          {...rest}
          ref={ref}
        />
      </div>
    );
  }
);

TextArea.displayName = "textarea";
