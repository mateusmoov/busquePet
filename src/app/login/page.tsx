"use client";

import Image from "next/image";
import { Input, Button, Section } from "../components";
import { useForm, SubmitHandler } from "react-hook-form";

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
          <div className="flex justify-center mb-18 mt-14">
            <Image
              alt="Logo do BusquePet"
              src="/logos/busquepet_logo_letter.svg"
              width="222"
              height="192"
            />
          </div>
          <div className="flex flex-col gap-3 mb-14">
            <Input
              type="email"
              placeholder="exemplo@exemplo.com"
              label="E-mail"
              variant="adopter"
              className="pl-2"
              {...register("email", { required: true })}
            />
            <Input
              togglePasswordVisibility
              type="password"
              label="Senha"
              variant="adopter"
              className="pl-2"
              {...register("password", { required: true })}
            />
            <div className="flex justify-end">
              <a
                href="/"
                className="font-body font-medium text-sky-700 underline underline-offset-2"
              >
                Esqueci minha senha
              </a>
            </div>
            <div className="flex justify-center mt-4">
              <Button
                type="submit"
                value="submit"
                variant="filled"
                className="bg-fuchsia-800 flex px-14 py-3 items-center font-medium text-white w-full text-center justify-center"
              >
                Entrar
              </Button>
            </div>
          </div>
          <div className="flex flex-col text-center mb-14">
            <span className="font-body">Ainda não possui conta?</span>
            <a
              href="/"
              className="font-body font-medium text-sky-700 underline underline-offset-2"
            >
              Cadastre-se
            </a>
          </div>
        </form>
      </Section>
    </main>
  );
};

export default Login;
