import { HTMLProps } from "react";
import { Icon } from "@/app/components";
import { IconName } from "../Icon";

type HeaderProps = HTMLProps<HTMLDivElement> & {
  title: string;
  handleBackClick?: () => void;
  rightIconClick?: () => void;
  rightIcon?: IconName;
};

export const SimpleHeader = ({
  title,
  handleBackClick,
  rightIconClick,
  rightIcon,
  ...rest
}: HeaderProps) => {
  return (
    <>
      <header
        className="w-full flex justify-between shadow-md shadow-bottom py-2 px-4"
        {...rest}
      >
        <button onClick={handleBackClick}>
          <Icon icon="ArrowLeft" className="ml-4 text-fuchsia-800 h-5 w-4" />
        </button>
        <span className="font-header font-semibold text-fuchsia-800 text-xl">
          {title}
        </span>
        <button onClick={rightIconClick}>
          {rightIcon ? (
            <Icon icon={rightIcon} className="ml-4 w-6 h-6" />
          ) : (
            <p className="text-cyan-700 font-medium font-body text-xs">Limpar</p>
          )}
        </button>
      </header>
    </>
  );
};
