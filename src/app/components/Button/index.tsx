import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type VariantProps = Record<string, string>;
type VariantKeyProps = keyof typeof variants;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant: VariantKeyProps;
  className?: string;
};

const variants = {
  filled: "rounded-lg bg-fuchsia-800 py-2 px-11 font-body flex",
  outlined: "rounded-lg outline outline-1 py-2 px-11 font-body",
  gradient:
    "rounded-full bg-gradient-to-r from-purple-800 to-teal-500 py-2 px-6 font-body",
} satisfies VariantProps;

export const Button = ({
  children,
  variant,
  className,
  ...rest
}: ButtonProps) => {
  return (
    <button className={twMerge(variants[variant], className)} {...rest}>
      {children}
    </button>
  );
};
