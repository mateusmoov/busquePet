"use client"

import { Input, Header, Button, Section } from "@/app/components";
import { useFormContext } from "react-hook-form";

type DonorContactDataType = {
  number: string;
  email: string;
  password: string
};


export const DonorContactData = () => {
    const {
      register,
      formState: { errors },
    } = useFormContext<DonorContactDataType>();
  return (
    <>
      <main>
        <Section>
          <div className="flex min-h-[calc(100vh_-_10rem)] flex-col">
            <span className="mb-11 mt-6 font-header text-cyan-700 font-semibold text-lg flex justify-center">
              Seus Dados para Contato
            </span>
            <div className="flex flex-col gap-y-5">
              <Input
                label="Seu número"
                type="number"
                variant="donor"
                placeholder="(xx) 9 9999-9999"
                {...register("number", { required: true })}
              />
              <span className="font-body text-sm text-red-800">
                {errors.number?.message}
              </span>
              <Input
                label="Seu e-mail"
                type="email"
                variant="donor"
                placeholder="exemplo@email.com"
                {...register("email", { required: true })}
              />
              <span className="font-body text-sm text-red-800">
                {errors.email?.message}
              </span>
              <Input
                label="Repita seu e-mail"
                type="email"
                variant="donor"
                placeholder="exemplo@email.com"
              />
              <Input
                togglePasswordVisibility
                label="Crie uma senha"
                type="password"
                variant="donor"
                placeholder="********"
                {...register("password", { required: true })}
              />
              <span className="font-body text-sm text-red-800">
                {errors.password?.message}
              </span>
              <Input
                togglePasswordVisibility
                label="Repita a sua senha"
                type="password"
                variant="donor"
                placeholder="********"
              />
            </div>
          </div>
        </Section>
      </main>
    </>
  );
};

