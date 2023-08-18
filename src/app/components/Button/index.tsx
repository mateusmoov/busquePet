import { ReactNode } from "react";

type VariantProps = Record<string, string>
type VariantKeyProps = keyof typeof variants

interface ButtonProps {
  children: ReactNode;
  variant: VariantKeyProps;
}

const variants = {
  filled: "rounded-lg bg-fuchsia-800 py-2 px-11 font-body flex",
  outlined:
    "rounded-lg outline outline-1 outline-fuchsia-800 py-2 px-11 font-body",
  gradient:
    "rounded-full bg-gradient-to-r from-purple-800 to-teal-500 py-2 px-6 font-body",
} satisfies VariantProps;

export const Button = ({ children, variant }: ButtonProps ) => {


  return (
    <button className={variants[variant]}>
      {children}
    </button>
  );
};