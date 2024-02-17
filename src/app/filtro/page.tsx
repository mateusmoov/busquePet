"use client";

import { ageRanges } from "@/utils/age";
import { SimpleHeader, Section } from "../components";
import { ButtonFilter, CheckboxFilter } from "../components/Filter";
import { useState } from "react";

const Filter = () => {
  const [kilometers, setKilometers] = useState<number>(0);

  const handleRangeKilometers = (event: any) => {
    setKilometers(event.target.value);
  };

  return (
    <>
      <SimpleHeader title="Filtrar " />
      <Section className="mt-11">
      <div>
          <span className="font-semibold text-xs font-header text-black mb-4">
            Espécie
          </span>
          <div className="flex gap-x-6 mt-3">
            <ButtonFilter label="Cachorro" icon="DogFilter" variant="column" />
            <ButtonFilter label="Gato" icon="CatFilter" variant="column" />
          </div>
        </div>

        <div className="mt-5">
          <span className="font-semibold text-xs font-header text-black mb-4">
            Gênero
          </span>
          <div className="flex gap-x-6 mt-3">
            <ButtonFilter label="Macho" icon="PetMale" variant="inline" />
            <ButtonFilter label="Fêmea" icon="PetFemale" variant="inline" />
          </div>
        </div>

        <div className="mt-5">
          <span className="font-semibold text-xs font-header text-black mb-4">
            Porte
          </span>
          <div className="flex gap-x-6 mt-3">
            <ButtonFilter
              label="Pequeno"
              icon="PetSmallFilter"
              variant="column"
            />
            <ButtonFilter
              label="Gato"
              icon="PetMediumFilter"
              variant="column"
            />
            <ButtonFilter
              label="Cachorro"
              icon="PetLargeFilter"
              variant="column"
            />
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-y-3">
          <span className="font-semibold text-xs font-header text-black mb-4">
            Idade
          </span>
          {ageRanges.map((age, index) => (
            <CheckboxFilter key={index} label={age.name} />
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
            onChange={handleRangeKilometers}
          />
        </div>
      </Section>
    </>
  );
};

export default Filter;
