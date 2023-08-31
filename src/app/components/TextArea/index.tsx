import { ComponentPropsWithRef, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type TextAreaProps = ComponentPropsWithRef<"textarea"> & {
  label: string;
  className?: string;
  hint?: string;
};

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, hint, className, ...rest }, ref) => {
    return (
      <div className="flex flex-col">
        <label
          htmlFor={label}
          className={"text-xs font-body mb-2 text-cyan-700"}
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
        <span className="text-xs font-body font-medium text-zinc-500 mt-1">
          {hint}
        </span>
      </div>
    );
  }
);

TextArea.displayName = "textarea";
