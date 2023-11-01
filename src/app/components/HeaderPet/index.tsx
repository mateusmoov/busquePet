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
            variant="arrowLeft"
            height={20}
            width={17}
            className="ml-4 text-fuchsia-800"
          />
        </button>
        <span className="font-header font-semibold text-fuchsia-800 text-xl">
          {petName}
        </span>
        <button onClick={favClick}>
          <Icon variant="favorite" height={24} width={24} className="ml-4 " />
        </button>
      </header>
    </>
  );
};
