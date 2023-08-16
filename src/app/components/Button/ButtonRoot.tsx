import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonRootProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const ButtonRoot = ({ children }: ButtonRootProps) => {
  return (
    <button>
      { children }
    </button>
  );
};
