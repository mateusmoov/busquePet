"use client";

import { ageRanges } from "@/utils/age";
import {
  Section,
  FormGroup,
  RadioButton,
  Select,
} from "@/app/components";
import { useFormContext } from "react-hook-form";

type DonorRegisterStep1Data = {
  type: "cachorro" | "gato";
  gender: "macho" | "femea";
  size: "pequeno" | "medio" | "grande";
  ageRange: string;
};

export const PetRegister1 = () => {
      const {
        register,
        formState: { errors },
      } = useFormContext<DonorRegisterStep1Data>();

  return (
    <main>
      <Section>
        <div className="flex min-h-[100vh] flex-col gap-y-8">
          <div className="mt-7">
            <FormGroup label="Seu pet é um:" variant="donor" className="py-4">
              <div className="flex flex-col gap-y-4">
                <RadioButton label="Cachorro" value="cachorro" />
                <RadioButton label="Gato" value="gato" />
              </div>
            </FormGroup>
          </div>
          <div>
            <FormGroup
              label="O gênero do seu bichinho é:"
              variant="donor"
              className="py-4"
            >
              <div className="flex flex-col gap-y-4">
                <RadioButton label="Fêmea" value="femea" />
                <RadioButton label="Macho" value="macho" />
              </div>
            </FormGroup>
            <span className="font-body text-sm text-red-800">
              {errors.type?.message}
            </span>
          </div>
          <FormGroup
            label="Qual o porte do bichinho?"
            variant="donor"
            className="py-4"
          >
            <div className="flex flex-col gap-y-4">
              <RadioButton label="Pequeno" value="pequeno" />
              <RadioButton label="Médio" value="medio" />
              <RadioButton label="Grande" value="grande" />
            </div>
          </FormGroup>
          <span className="font-body text-sm text-red-800">
            {errors.size?.message}
          </span>
          <Select
            label="Qual a idade do seu bichinho?"
            variant="donor"
            selectItems={ageRanges}
            {...register("ageRange", { required: true })}
          />
          <span className="font-body text-sm text-red-800">
            {errors.ageRange?.message}
          </span>
        </div>
      </Section>
    </main>
  );
};
