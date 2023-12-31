import { HeaderPet, Section, PetDetail, Button, Modal } from "@/app/components";
import Image from "next/image";

type PetInfoType = {
  name: string
  adopterName: string,
  image: string
  age: string
  size: string
  gender: string
  address: string
  description: string
}

export const PetDetails = ({petInfo}: {petInfo: PetInfoType}) => {
  return (
    <>
      <HeaderPet petName={petInfo.name} />
      <Section className="mt-2">
        <div className="w-full max-w-full">
          <Image
            src={petInfo.image}
            alt="Imagem de um cachorro muito massa"
            layout="responsive"
            width={500}
            height={272}
            className="rounded"
          />
        </div>

        <div className="flex flex-col gap-y-2 mt-6">
          <section className="flex justify-between">
            <PetDetail title="Nome" content={petInfo.name} />
            <PetDetail title="Idade" content={petInfo.age} />
          </section>
          <section className="flex justify-between">
            <PetDetail title="Porte" content={petInfo.size} />
            <PetDetail title="Gênero" content={petInfo.gender} />
          </section>
          <PetDetail title="Localização" content={petInfo.address} />
          <PetDetail title="Doador" content={petInfo.name} />
          <PetDetail title="Descrição" content={petInfo.description} />
        </div>
      </Section>
      <div className="flex justify-center mt-3 mb-8">
        <Button
          variant="gradient"
          className="text-white px-[74px] py-2 font-body font-medium"
        >
          Quero Adotar
        </Button>
      </div>
    </>
  );
};