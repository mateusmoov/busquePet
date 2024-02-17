'use client'

import { HTMLAttributes, useMemo } from "react";
import { icons } from "./icons";
import { twMerge } from "tailwind-merge";

export type IconName = keyof typeof icons;

interface Props extends HTMLAttributes<HTMLDivElement> {
  icon: IconName;
  className?: string;
  rotate?: number;
}

export const Icon = ({ icon, className, rotate, color, ...rest }: Props) => {
  const SvgIcon = useMemo(() => icons[icon], [icon]);
  
  if (!SvgIcon) return null;

  return (
    <div
      className={twMerge("flex", className)}
      aria-label={icon}
      color={color}
      role="img"
      style={{
        transform: rotate ? `rotate(${rotate}deg)` : undefined,
        color: color
      }}
      {...rest}
    >
        <SvgIcon  />
    </div>
  );
};
