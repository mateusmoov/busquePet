import { Header, Button, Section, Input } from "@/app/components";
import { useFormContext } from "react-hook-form";

type AdopterPersonDataType = {
  name: string;
  age: number;
  email: string;
  password: string;
};

export const AdopterContactData = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<AdopterPersonDataType>();

  return (
    <main>
      <Section>
        <div className="flex min-h-[calc(100vh_-_10rem)] flex-col">
          <span className="mb-11 mt-6 font-header text-fuchsia-800 font-semibold text-lg flex justify-center">
            Seus Dados Pessoais
          </span>
          <div className="flex flex-col gap-y-5">
            <Input
              label="Seu Nome Completo"
              type="text"
              variant="adopter"
              {...register("name", { required: true })}
            />
            <span className="font-body text-sm text-red-800">
              {errors.name?.message}
            </span>
            <Input
              label="Sua idade"
              type="number"
              variant="adopter"
              {...register("age", { required: true })}
            />
            <span className="font-body text-sm text-red-800">
              {errors.name?.message}
            </span>
            <Input
              label="Seu E-mail"
              type="email"
              variant="adopter"
              {...register("email", { required: true })}
            />
            <span className="font-body text-sm text-red-800">
              {errors.name?.message}
            </span>
            <Input
              label="Crie uma senha"
              type="password"
              variant="adopter"
              {...register("password", { required: true })}
            />
            <span className="font-body text-sm text-red-800">
              {errors.name?.message}
            </span>
            <Input
              togglePasswordVisibility
              label="Confirme sua senha"
              type="password"
              variant="adopter"
            />
            <span className="font-body text-sm text-red-800">
              {errors.name?.message}
            </span>
          </div>
        </div>
        <div className="flex justify-end mb-9">
          <Button
            variant="filled"
            icon="arrowRight"
            className="bg-fuchsia-800 flex px-14 py-3 items-center font-medium text-white"
          >
            Próximo
          </Button>
        </div>
      </Section>
    </main>
  );
};
