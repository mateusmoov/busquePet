import { ComponentPropsWithRef } from "react";
import { twMerge } from "tailwind-merge";
import { Icon } from "@/app/components";
import { IconVariantProps } from "../Icon";
type VariantProps = Record<string, string>;
type VariantKeyProps = keyof typeof variants;

type ButtonProps = ComponentPropsWithRef<'button'> & {
  variant: VariantKeyProps;
  icon?: IconVariantProps;
};

const variants = {
  filled: "rounded-lg font-body flex",
  outlined: "rounded-lg outline outline-1 font-body flex border",
  gradient:
    "rounded-full bg-gradient-to-r from-purple-800 to-teal-500 font-body flex",
} satisfies VariantProps;

export const Button = ({
  children,
  variant,
  className,
  icon,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={twMerge(variants[variant], className, "relative")}
      {...rest}
    >
      {children}
      {icon && <Icon variant={icon} className="absolute right-2 bottom-[14px]" height={20} width={20} />}
    </button>
  );
};
