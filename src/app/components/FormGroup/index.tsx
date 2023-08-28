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
};

type VariantProps = keyof typeof variants;

const variants = {
  adopter: {
    label: "text-cyan-700",
    outlined: "outline-cyan-700 px-4 pl-4 ",
  },
} satisfies Record<string, VariantsProps>;

export const FormGroup = ({ label, variant, children }: FormGroupProps) => {
  return (
    <>
      <label
        htmlFor={label}
        className={twMerge(
          variants[variant].label,
          "text-sm font-body mb-2 block"
        )}
      >
        {label}
      </label>
      <div
        className={twMerge(
          variants[variant].outlined,
          "rounded-lg outline outline-1 block px-4 pl-4"
        )}
      >
        {children}
      </div>
    </>
  );
};
