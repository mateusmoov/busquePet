'use client'

import { ComponentPropsWithRef, forwardRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Icon } from "@/app/components";

type VariantsProps = {
  label: string;
  input: string;
};

type InputProps = ComponentPropsWithRef<"input"> & {
  label: string;
  type: string;
  variant: VariantProps;
  className?: string;
  hint?: string;
  togglePasswordVisibility?: boolean
};

type VariantProps = keyof typeof variants;

const variants = {
  adopter: {
    label: "text-fuchsia-800",
    input: "border-fuchsia-800",
  },
  donor: {
    label: "text-cyan-700",
    input: "border-cyan-700",
  },
} satisfies Record<string, VariantsProps>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, variant, hint, className, togglePasswordVisibility = false, ...rest }, ref) => {
    const [isPasswordVisible, setPasswordVisible] = useState(false);

const handleTogglePasswordVisibility = (
  event: React.MouseEvent<HTMLElement>
) => {
  event.preventDefault();
  setPasswordVisible(!isPasswordVisible);
};

const inputType = isPasswordVisible ? "text" : rest.type



    return (
      <div className="flex flex-col relative">
        <label
          htmlFor={label}
          className={twMerge(
            variants[variant].label,
            "text-xs font-body mb-2 relative"
          )}
        >
          {label}
        </label>
        <input
          id={label}
          className={twMerge(
            variants[variant].input,
            className,
            "text-black font-body py-3 rounded-xl border pl-2 pr-2 placeholder:text-neutral-200"
          )}
          {...rest}
          type={inputType}
          ref={ref}
        />
        {togglePasswordVisibility && (
          <button
            className="absolute right-3 bottom-5"
            onClick={(event) => handleTogglePasswordVisibility(event)}
          >
            <Icon variant="eyes" />
          </button>
        )}
        <span className="text-xs font-body font-medium text-zinc-500 mt-1">
          {hint}
        </span>
      </div>
    );
  }
);

Input.displayName = "input";
