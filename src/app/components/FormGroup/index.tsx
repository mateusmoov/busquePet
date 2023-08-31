import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type VariantsProps = {
  label: string;
  outlined: string;
};

type FormGroupProps = {
  label: string;
  variant: VariantProps;
  children: ReactNode;
  className: string
};

type VariantProps = keyof typeof variants;

const variants = {
  adopter: {
    label: "text-cyan-700",
    outlined: "outline-cyan-700 px-4 pl-4 ",
  },
} satisfies Record<string, VariantsProps>;

export const FormGroup = ({ label, variant, children, className }: FormGroupProps) => {
  return (
      <div className="flex flex-col">
        <label
          htmlFor={label}
          className={twMerge(
            variants[variant].label,
            "font-body mb-2 flex flex-col text-xs"
          )}
        >
          {label}
        </label>
        <div
          className={twMerge(
            variants[variant].outlined,
            className,
            "rounded-lg outline outline-1 block px-4 pl-4"
          )}
        >
          {children}
        </div>
      </div>
  );
};
