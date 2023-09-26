"use client";

import { brazilStates } from "@/utils/stateBrazil";
import { Header, Button, Section, Input, Select } from "@/app/components";
import { useQuery } from "@tanstack/react-query";
import { getLocationData } from "@/services/api";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

type LocalizationType = {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
};

type DonorLocationDataType = {
  cep: string;
  address: string;
  uf: string;
  city: string;
  neighborhood: string;
};

export const DonorLocationData = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<DonorLocationDataType>();
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
              {...register("cep", { required: true })}
              onChange={(e) => setInputCep(e.target.value)}
              maxLength={8}
            />
            <span className="font-body text-sm text-red-800">
              {errors.cep?.message}
            </span>
            <Input
              label="Seu Endereço"
              type="text"
              variant="donor"
              placeholder="Ex.: Rua dos Bichinhos Felizes"
              {...register("address", { required: true })}
            />
            <span className="font-body text-sm text-red-800">
              {errors.address?.message}
            </span>
            <Select
              selectItems={brazilStates}
              label="Seu estado"
              variant="donor"
              value={selectUf}
              {...register("uf", { required: true })}
              onChange={(e) => setSelectUf(e.target.value)}
            />
            <span className="font-body text-sm text-red-800">
              {errors.uf?.message}
            </span>
            <Input
              label="Sua Cidade"
              type="text"
              variant="donor"
              defaultValue={data?.localidade}
              {...register("city", { required: true })}
            />
            <span className="font-body text-sm text-red-800">
              {errors.city?.message}
            </span>
            <Input
              label="Seu Bairro"
              type="text"
              variant="donor"
              defaultValue={data?.bairro}
              {...register("neighborhood", { required: true })}
            />
            <span className="font-body text-sm text-red-800">
              {errors.neighborhood?.message}
            </span>
          </div>
        </div>
      </Section>
    </main>
  );
};
