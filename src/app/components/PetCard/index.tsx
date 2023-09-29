import Image from "next/image";

type PetCardProps = {
  name: string;
  age: string;
  size: SizeProps;
  gender: GenderProps;
  address: string;
};

type PetImageProps = {
  image: string,
  alt: string
}

type SizeProps = keyof typeof petSize;
type GenderProps = keyof typeof petGender;


const petSize = {
  small: {
    image: "pet-s.svg",
    alt: "Tamanho Pequeno",
  },
  medium: {
    image: "pet-m.svg",
    alt: "Tamanho Médio",
  },
  large: {
    image: "pet-l.svg",
    alt: "Tamanho Grande",
  },
} satisfies Record<string, PetImageProps>;


const petGender = {
  male: {
    image: "pet-male.svg",
    alt: "Macho",
  },
  female: {
    image: "pet-female.svg",
    alt: "Femea",
  },
} satisfies Record<string, PetImageProps>;

export const PetCard = ({ name, age, size, gender, address }: PetCardProps) => {
  return (
    <div className="flex w-full max-h-[136px]">
      <Image
        width="192"
        height="136"
        src="/cachorro.jpg"
        alt="Pet"
        className="rounded-l-lg"
      />
      <div className="w-full p-1 rounded-r-lg border border-neutral-200 border-l-0">
        <div className="flex flex-col ml-4 gap-y-1 align-center">
          <span className="font-body text-fuchsia-800 font-semibold">
            {name}
          </span>
          <span className="font-body text-zinc-800">{age}</span>
          <div className="flex justify-between items-center">
            <Image
              width="49"
              height="22"
              src={petSize[size].image}
              alt="Porte do Animal"
            />
            <Image
              width="30"
              height="30"
              src={petGender[gender].image}
              alt="Genero do Animal"
            />
          </div>
          <div className="flex align-baseline">
            <Image
              width="6"
              height="10"
              src="/place.svg"
              alt="Localização"
              className="mr-2"
            />
            <span className="font-body text-xs">{address}</span>
          </div>
        </div>
      </div>
    </div>
  );
};