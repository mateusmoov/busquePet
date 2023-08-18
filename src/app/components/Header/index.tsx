import { HTMLProps, ReactNode } from "react";



type VariantProps = Record<string, string>;
type VariantKeyProps = keyof typeof variants;

type HeaderProps = HTMLProps<HTMLDivElement> & {
  children: ReactNode;
  variant: VariantKeyProps;
};

const variants = {
  adopter: "bg-adopter-header",
  donor: "bg-donor-header",
} satisfies VariantProps;

export const Header = ({ children, variant, ...rest }: HeaderProps) => {
  return (
    <>
      <div className={variants[variant]} {...rest}>
        {children}
      </div>
    </>
  );
};