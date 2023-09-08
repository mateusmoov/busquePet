"use client"

import { brazilStates } from "@/utils/stateBrazil";
import { Header, Button, Section, Input, Select } from "../components";
import { useQuery } from "@tanstack/react-query";
import { getLocationData } from "@/services/api";

type LocalizationType = {
  logradouro: string
  bairro: string
  localidade: string
}


const PersonContact = () => {

  const { data, isLoading } = useQuery<LocalizationType[]>({
    queryKey: ["localizationInfo"],
    queryFn: () => getLocationData(71720023),
  });

  console.log(data)


  return (
    <>
      <Header variant="donor" icon>
        <div className="flex flex-col gap-x-2 ml-7 py-4">
          <span className="font-header text-white text-xl font-semibold">
            Você quer doar!
          </span>
          <span className="font-header text-white text-sm">
            Só mais um pouquinho, certo?!
          </span>
        </div>
      </Header>
      <main>
        <Section>
          <div className="flex min-h-[calc(100vh_-_10rem)] flex-col">
            <span className="mb-11 mt-6 font-header text-cyan-700 font-semibold text-lg flex justify-center">
              Seus Dados para Contato
            </span>
            <div className="flex flex-col gap-y-5">
              <Input
                label="Seu CEP"
                type="number"
                variant="donor"
                placeholder="00000-000"
              />
              <Select
                selectItems={brazilStates}
                label="Seu e-mail"
                variant="donor"
              />
              <Input
                label="Sua Cidade"
                type="text"
                variant="donor"
              />
              <Input
                  label="Seu Bairro"
                  type="text"
                  variant="donor"
                />
              <Input
                label="Seu Endereço"
                type="text"
                variant="donor"
                placeholder="Ex.: Rua dos Bichinhos Felizes"
              />
            </div>
          </div>
          <div className="flex justify-end mb-9">
            <Button
              variant="filled"
              icon="arrowRight"
              className="bg-cyan-700 flex px-14 py-3 items-center font-medium"
            >
              Próximo
            </Button>
          </div>
        </Section>
      </main>
    </>
  );
};

export default PersonContact;
