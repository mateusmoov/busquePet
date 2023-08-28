import { HTMLProps } from "react";
import { twMerge } from "tailwind-merge";

type VariantProps = Record<string, string>;
type VariantKeyProps = keyof typeof variants;

type HeaderProps = HTMLProps<HTMLDivElement> & {
  variant: VariantKeyProps;
};

const variants = {
  adopter: "bg-adopter-header",
  donor: "bg-donor-header",
} satisfies VariantProps;

export const Header = ({ children, variant, className, ...rest }: HeaderProps) => {
  return (
    <>
      <header
        className={twMerge(variants[variant], className, "w-full")}
        {...rest}
      >
        {children}
      </header>
    </>
  );
};