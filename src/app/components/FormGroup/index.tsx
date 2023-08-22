import { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type VariantsProps = {
  label: string;
  outlined: string;
};

type FormGroupProps = {
  label: string;
  variant: VariantProps;
};

type VariantProps = keyof typeof variants;

const variants = {
  donor: {
    label: "text-fuchsia-800",
    outlined: "border-fuchsia-800",
  },
  adopter: {
    label: "text-cyan-700",
    outlined: "border-cyan-700",
  },
} satisfies Record<string, VariantsProps>;

export const FormGroup = ({ label, variant, ...rest }: FormGroupProps) => {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={label}
        className={twMerge(variants[variant].label, "text-sm font-body mb-2")}
      >
        {label}
      </label>
      <div
        className={twMerge(
          variants[variant].outlined,
          "rounded-lg outline outline-1"
        )}
      ></div>
    </div>
  );
};
