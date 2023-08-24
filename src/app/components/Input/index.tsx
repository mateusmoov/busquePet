import { InputHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type VariantsProps = {
  label: string;
  input: string;
};

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  variant: VariantProps;
};

type VariantProps = keyof typeof variants;

const variants = {
  donor: {
    label: "text-fuchsia-800",
    input: "border-fuchsia-800",
  },
  adopter: {
    label: "text-cyan-700",
    input: "border-cyan-700",
  },
} satisfies Record<string, VariantsProps>;

export const Input = forwardRef<HTMLInputElement,InputProps>(({ label, variant, ...rest }, ref) => {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={label}
        className={twMerge(variants[variant].label, "text-sm font-body mb-2")}
      >
        {label}
      </label>
      <input
        type="text"
        id={label}
        className={twMerge(
          variants[variant].input,
          "text-black font-body py-3 rounded-xl border-2 "
        )}
        {...rest}
        ref={ref}
      />
    </div>
  );
});

Input.displayName = 'input'
