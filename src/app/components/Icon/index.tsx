import Image from "next/image";

interface VariantsProps { 
  image: string;
  alt: string;
}

type VariantProps = keyof typeof variants

const variants = {
  arrowRight: {
    image: "/icons/arrow_back.svg",
    alt: "avançar",
  },
} satisfies Record<string, VariantsProps>;

export const Icon = ({ variant }: { variant: VariantProps }) => {
  return (
    <Image
      src={variants[variant].image}
      alt={variants[variant].alt}
      width="20"
      height="20"
    />
  );
};