import Image from "next/image";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonIconProps {
  children: ReactNode;
  icon: string;
}

interface Icon {
  image: string;
  alt: string;
}

interface Icons {
  [key: string]: Icon;
}

const icons: Icons = {
  whatsapp: {
    image: "/whatsapp-logo.webp",
    alt: "WhatsApp Logo",
  },
};

export const ButtonIcon = ({ icon, children }: ButtonIconProps) => {
  return (
    <>
      {children}
      <Image
        src={icons[icon].image}
        alt={icons[icon].alt}
        width={19}
        height={19}
        priority
      />
    </>
  );
};
