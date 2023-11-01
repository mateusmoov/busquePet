import Image from "next/image";

interface VariantsProps { 
  image: string;
  alt: string;
}

export type IconVariantProps = keyof typeof variants

type IconProps = {
  variant: IconVariantProps;
  className?: string;
  height: number;
  width: number;
};

const variants = {
  arrowRight: {
    image: "/icons/arrow_right.svg",
    alt: "avançar",
  },
  arrowLeft: {
    image: "/icons/arrow_left.svg",
    alt: "voltar",
  },
  checkmark: {
    image: "/icons/checkmark.svg",
    alt: "checkmark",
  },
  eyes: {
    image: "/icons/eyes.svg",
    alt: "Visualizar senha",
  },
  favorite: {
    image: "/icons/favorite.svg",
    alt: "Favoritar",
  },
} satisfies Record<string, VariantsProps>;

export const Icon = ({ variant, className, height, width }: IconProps) => {
  return (
    <Image
      src={variants[variant].image}
      alt={variants[variant].alt}
      width={width}
      height={height}
      className={className}
    />
  );
};