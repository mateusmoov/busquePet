import { HTMLProps } from "react";
import { twMerge } from "tailwind-merge";
import { Icon } from "@/app/components";

type VariantProps = Record<string, string>;
type VariantKeyProps = keyof typeof variants;

type HeaderProps = HTMLProps<HTMLDivElement> & {
  variant: VariantKeyProps;
  icon?: boolean;
};

const variants = {
  adopter: "bg-adopter-header",
  donor: "bg-donor-header",
} satisfies VariantProps;

export const Header = ({ children, variant, className, icon, ...rest }: HeaderProps) => {
  return (
    <>
      <header
        className={twMerge(variants[variant], className, "w-full flex ")}
        {...rest}
      >
        <button>
          {icon && <Icon variant="arrowLeft" className="ml-4" />}
        </button>
        {children}
      </header>
    </>
  );
};