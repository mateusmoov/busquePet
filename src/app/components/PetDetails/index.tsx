import { HeaderPet, Section, PetDetail } from "@/app/components";
import Image from "next/image";

export const PetDetails = () => {
  return (
    <>
      <HeaderPet petName="Aquiles" />
      <Section className="mt-2">
        <div className="w-full max-w-full">
          <Image
            src="/cachorro.jpg"
            alt="Imagem de um cachorro muito massa"
            layout="responsive"
            width={500}
            height={272}
            className="rounded"
          />
        </div>

        <div className="flex flex-col gap-y-2 mt-6">
          <section className="flex justify-between">
            <PetDetail title="Nome" content="Aquiles" />
            <PetDetail title="Idade" content="12 anos" />
          </section>
          <section className="flex justify-between">
            <PetDetail title="Porte" content="Grande" />
            <PetDetail title="Gênero" content="Macho" />
          </section>
            <PetDetail title="Localização" content="Brasilia - DF" />
            <PetDetail title="Doador" content="Mateus Vasconcelos" />
          <PetDetail
            title="Descrição"
            content="Esse cachorrão subiu em cima da minha cama e não quer sair, alguém
              por favor me ajuda a arrumar um lar pra ele!"
          />
        </div>
      </Section>
    </>
  );
};
