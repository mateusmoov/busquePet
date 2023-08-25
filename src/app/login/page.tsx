"use client";

import Image from "next/image";
import { Input, Button, Section } from "../components";
import { useForm, SubmitHandler } from "react-hook-form";
import { error } from "console";

type InputLoginType = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<InputLoginType>();

  const onSubmit: SubmitHandler<InputLoginType> = (data) => console.log(data);
  return (
    <main className="flex items-center justify-center h-screen">
      <Section>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-center mb-20 mt-14">
            <Image
              alt="Logo do BusquePet"
              src="/icons/busquepet_logo.svg"
              width="222"
              height="192"
            />
          </div>
          <div className="flex flex-col gap-3 mb-14">
            <Input
              type="email"
              placeholder="exemplo@exemplo.com"
              label="E-mail"
              variant="donor"
              className="pl-2"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="font-body text-pink-700 font-medium">
                Campo de email é obrigatório
              </span>
            )}
            <Input
              type="password"
              label="Senha"
              variant="donor"
              className="pl-2"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="font-body text-pink-700 font-medium">
                Campo de senha é obrigatório
              </span>
            )}
          </div>
          <div className="flex flex-col text-center mb-14">
            <span className="font-body">Ainda não possui conta?</span>
            <a
              href="/"
              className="font-body font-medium text-sky-700 underline underline-offset-2"
            >
              Cadastre-se
            </a>
            <a
              href="/"
              className="font-body font-medium text-sky-700 underline underline-offset-2"
            >
              Esqueci minha senha
            </a>
          </div>
          <div className="flex justify-end">
            <Button
              type="submit"
              value="submit"
              variant="filled"
              icon="checkmark"
              className="bg-fuchsia-800 flex px-14 py-3 items-center font-medium"
            >
              Entrar
            </Button>
          </div>
        </form>
      </Section>
    </main>
  );
};

export default Login;
