"use client";

import { brazilStates } from "@/utils/stateBrazil";
import { Header, Button, Section, Input, Select } from "@/app/components";
import { useQuery } from "@tanstack/react-query";
import { getLocationData } from "@/services/api";
import { useEffect, useState } from "react";

type LocalizationType = {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
};

export const DonorLocationData = ({ register, errors }) => {
  const [inputCep, setInputCep] = useState("");

  const { data, isLoading } = useQuery<LocalizationType>({
    queryKey: ["localizationInfo"],
    queryFn: () => getLocationData(inputCep),
    enabled: inputCep?.length === 8,
  });

  const [selectUf, setSelectUf] = useState("");

  useEffect(() => {
    if (data) {
      setSelectUf(data.uf);
    }
  }, [data]);

  return (
    <main>
      <Section>
        <div className="flex min-h-[calc(100vh_-_10rem)] flex-col">
          <span className="mb-11 mt-6 font-header text-cyan-700 font-semibold text-lg flex justify-center">
            Seus Dados para Localização
          </span>
          <div className="flex flex-col gap-y-5">
            <Input
              label="Seu CEP"
              type="number"
              variant="donor"
              placeholder="00000-000"
              onChange={(e) => setInputCep(e.target.value)}
              maxLength={8}
            />
            <Input
              label="Seu Endereço"
              type="text"
              variant="donor"
              placeholder="Ex.: Rua dos Bichinhos Felizes"
            />
            <Select
              selectItems={brazilStates}
              label="Seu estado"
              variant="donor"
              value={selectUf}
              onChange={(e) => setSelectUf(e.target.value)}
            />
            <Input
              label="Sua Cidade"
              type="text"
              variant="donor"
              defaultValue={data?.localidade}
            />
            <Input
              label="Seu Bairro"
              type="text"
              variant="donor"
              defaultValue={data?.bairro}
            />
          </div>
        </div>
      </Section>
    </main>
  );
};
