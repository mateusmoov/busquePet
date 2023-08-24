import Image from "next/image";

interface VariantsProps { 
  image: string;
  alt: string;
}

export type IconVariantProps = keyof typeof variants

type IconProps = {
  variant: IconVariantProps;
  className?: string;
};

const variants = {
  arrowRight: {
    image: "/icons/arrow_back.svg",
    alt: "avançar",
  },
  checkmark: {
    image: "/icons/checkmark.svg",
    alt: "checkmark",
  },
} satisfies Record<string, VariantsProps>;

export const Icon = ({ variant, className }: IconProps) => {
  return (
    <Image
      src={variants[variant].image}
      alt={variants[variant].alt}
      width="20"
      height="20"
      className={className}
    />
  );
};