import { brazilStates } from "@/utils/stateBrazil";
import { Header, Button, Section, Input, Select } from "@/app/components";
import { useFormContext } from "react-hook-form";

type AdopterPersonContactType = {
  cep: string;
  email: number;
  city: string
  address: string;
  neighbourhood: string;
};

export const AdopterLocationData = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<AdopterPersonContactType>();

  return (
    <main>
      <Section>
        <div className="flex min-h-[calc(100vh_-_10rem)] flex-col">
          <span className="mb-11 mt-6 font-header text-fuchsia-800 font-semibold text-lg flex justify-center">
            Seus Dados para Contato
          </span>
          <div className="flex flex-col gap-y-5">
            <Input
              label="Seu CEP"
              type="number"
              variant="donor"
              placeholder="00000-000"
              {...register("cep", { required: true })}
            />
            <span className="font-body text-sm text-red-800">
              {errors.cep?.message}
            </span>
            <Select
              selectItems={brazilStates}
              label="Seu e-mail"
              variant="donor"
              {...register("email", { required: true })}
            />
            <span className="font-body text-sm text-red-800">
              {errors.email?.message}
            </span>
            <Input
              label="Sua Cidade"
              type="text"
              variant="donor"
              {...register("city", { required: true })}
            />
            <span className="font-body text-sm text-red-800">
              {errors.city?.message}
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
            <Input
              label="Seu Bairro"
              type="text"
              variant="donor"
              {...register("neighbourhood", { required: true })}
            />
            <span className="font-body text-sm text-red-800">
              {errors.neighbourhood?.message}
            </span>
          </div>
        </div>
      </Section>
    </main>
  );
};
