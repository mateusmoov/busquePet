import { petSize, petGender } from ".";


export type PetCardProps = {
  name: string;
  petImage: string;
  age: string;
  size: SizeProps;
  gender: GenderProps;
  address: string;
};

export type PetImageProps = {
  image: string,
  alt: string
}

type SizeProps = keyof typeof petSize;
type GenderProps = keyof typeof petGender;