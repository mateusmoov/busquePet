import { HTMLProps } from "react";
import { Icon } from "@/app/components";


type HeaderProps = HTMLProps<HTMLDivElement> & {
  petName: string;
  handleBackClick?: () => void;
  favClick?: () => void;
};

export const HeaderPet = ({
  petName,
  handleBackClick,
  favClick,
  ...rest
}: HeaderProps) => {
  return (
    <>
      <header
        className="w-full flex justify-between shadow-md shadow-bottom py-2 px-4"
        {...rest}
      >
        <button onClick={handleBackClick}>
          <Icon
            icon="ArrowLeft"
            className="ml-4 text-fuchsia-800 h-5 w-4"
          />
        </button>
        <span className="font-header font-semibold text-fuchsia-800 text-xl">
          {petName}
        </span>
        <button onClick={favClick}>
          <Icon icon="Favorite" className="ml-4 w-6 h-6" />
        </button>
      </header>
    </>
  );
};
