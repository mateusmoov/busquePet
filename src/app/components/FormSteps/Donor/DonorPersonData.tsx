import { Section, Input } from "@/app/components";
import { useFormContext } from "react-hook-form";


type DonorPersonDataType = {
  name: string
  birthDate: string
}

export const DonorPersonData = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<DonorPersonDataType>();


  return (
    <main>
      <Section>
        <div className="flex min-h-[calc(100vh_-_10rem)] flex-col">
          <span className="mb-11 mt-6 font-header text-cyan-700 font-semibold text-lg flex justify-center">
            Seus Dados Pessoais
          </span>
          <div className="flex flex-col gap-y-5">
            <Input
              label="Seu Nome Completo"
              type="text"
              variant="donor"
              {...register("name", { required: true })}
            />
            <span className="font-body text-sm text-red-800">
              {errors.name?.message}
            </span>
            <Input
              label="Data de nascimento"
              type="date"
              variant="donor"
              {...register("birthDate", { required: true })}
            />
            <span className="font-body text-sm text-red-800">
              {errors.birthDate?.message}
            </span>
          </div>
        </div>
      </Section>
    </main>
  );
};
