"use client";

import { ageRanges } from "@/utils/age";
import { SimpleHeader, Section, Button } from "../components";
import { ButtonFilter, CheckboxFilter } from "../components/Filter";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type InputFilterType = {
  petType: string;
  petGender: string;
  petSize: string[];
  petAge: string[];
  petLocationRange: string;
};

const Filter = () => {
  const [kilometers, setKilometers] = useState<number>(0);
  const { register, handleSubmit, reset } = useForm<InputFilterType>({
    defaultValues: {
      petType: "",
      petGender: "",
      petSize: [],
      petAge: [],
      petLocationRange: "",
    },
  });


  const handleRangeKilometers = (event: any) => {
    setKilometers(event.target.value);
  };

  const onSubmit: SubmitHandler<InputFilterType> = (data) => console.log(data);

  return (
    <>
      <SimpleHeader title="Filtrar" rightIconClick={() => reset()} />
      <Section className="mt-11">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <span className="font-semibold text-xs font-header text-black mb-4">
              Espécie
            </span>
            <div className="flex gap-x-6 mt-3">
              <ButtonFilter
                label="Cachorro"
                icon="DogFilter"
                variant="column"
                value={"dog"}
                {...register("petType")}
              />
              <ButtonFilter
                label="Gato"
                icon="CatFilter"
                variant="column"
                value={"cat"}
                {...register("petType")}
              />
            </div>
          </div>

          <div className="mt-5">
            <span className="font-semibold text-xs font-header text-black mb-4">
              Gênero
            </span>
            <div className="flex gap-x-6 mt-3">
              <ButtonFilter
                label="Macho"
                icon="PetMale"
                variant="inline"
                value="male"
                {...register("petGender")}
              />
              <ButtonFilter
                label="Fêmea"
                icon="PetFemale"
                variant="inline"
                value="female"
                {...register("petGender")}
              />
            </div>
          </div>

          <div className="mt-5">
            <span className="font-semibold text-xs font-header text-black mb-4">
              Porte
            </span>
            <div className="flex gap-x-6 mt-3">
              <ButtonFilter
                label="Pequeno"
                value="small_pet"
                icon="PetSmallFilter"
                variant="column"
                {...register("petSize")}
              />
              <ButtonFilter
                label="Medio"
                value="medium_pet"
                icon="PetMediumFilter"
                variant="column"
                {...register("petSize")}
              />
              <ButtonFilter
                label="Grande"
                value="large_pet"
                icon="PetLargeFilter"
                variant="column"
                {...register("petSize")}
              />
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-y-3">
            <span className="font-semibold text-xs font-header text-black mb-4">
              Idade
            </span>
            {ageRanges.map((age, index) => (
              <CheckboxFilter
                key={index}
                label={age.name}
                value={age.value}
                {...register("petAge")}
              />
            ))}
          </div>

          <div className="mt-5 flex flex-col mb-5">
            <span className="font-semibold text-xs font-header text-black mb-4">
              Localização
            </span>

            <span className="text-xs font-header">{kilometers}km</span>
            <input
              type="range"
              min="0"
              max="100"
              {...register("petLocationRange")}
              onChange={handleRangeKilometers}
            />
          </div>

          <Button
            type="submit"
            value="submit"
            variant="filled"
            className="bg-fuchsia-800 flex px-14 py-3 items-center font-medium text-white w-full text-center justify-center"
          >
            Entrar
          </Button>
        </form>
      </Section>
    </>
  );
};

export default Filter;
