import Image from "next/image";
import { PetCardProps, PetImageProps } from "./PetCard.types";

export const petSize = {
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

export const petGender = {
  male: {
    image: "pet-male.svg",
    alt: "Macho",
  },
  female: {
    image: "pet-female.svg",
    alt: "Femea",
  },
} satisfies Record<string, PetImageProps>;

export const PetCard = ({
  name,
  petImage,
  age,
  size,
  gender,
  address,
  cardType,
}: PetCardProps) => {
  return cardType === "horizontal" ? (
    <div className="flex w-full max-h-[136px]">
      <Image
        width="192"
        height="136"
        src={petImage}
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
  ) : (
    <div className="flex w-full max-h-[184px] flex-col ">
      <Image
        width="168"
        height="112"
        src={petImage}
        alt="Pet"
        className="rounded-t-lg w-full"
      />
      <div className="h-full  px-2 py-2 shadow-md rounded-b-lg">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-body text-fuchsia-800 font-semibold">
              {name}
            </span>
            <span className="font-body text-zinc-800 text-xs">{age}</span>
          </div>
          <div>
            <Image
              width="30"
              height="30"
              src={petGender[gender].image}
              alt="Genero do Animal"
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
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
          <div>
            <Image
              width="28"
              height="14"
              src={petSize[size].image}
              alt="Porte do Animal"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
