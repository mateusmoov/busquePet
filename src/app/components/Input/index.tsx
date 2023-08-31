import { ComponentPropsWithRef, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

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

export const Input = forwardRef<HTMLInputElement,InputProps>(({ label, variant, hint, className, ...rest }, ref) => {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={label}
        className={twMerge(variants[variant].label, "text-xs font-body mb-2")}
      >
        {label}
      </label>
      <input
        id={label}
        className={twMerge(
          variants[variant].input,
          className, "text-black font-body py-3 rounded-xl border pl-2 pr-2 placeholder:text-neutral-200"
        )}
        {...rest}
        ref={ref}
      />
      <span className="text-xs font-body font-medium text-zinc-500">{hint}</span>
    </div>
  );
});

Input.displayName = 'input'
