"use client";

import Image from "next/image";
import { Input, Button, Section, PetCard } from "@/app/components";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";

type InputLoginType = {
  email: string;
  password: string;
};

const loginSchema = z.object({
  email: z
    .string()
    .nonempty("O e-mail é obrigatório")
    .email("Formato de e-mail inválido"),
  password: z.string().nonempty("A senha é obrigatória"),
});

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<InputLoginType>({
    resolver: zodResolver(loginSchema),
  });

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
            <div>
              <Input
                type="email"
                placeholder="exemplo@exemplo.com"
                label="E-mail"
                variant="adopter"
                className="pl-2"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="font-body text-sm text-red-800">
                  {errors.email?.message}
                </span>
              )}
            </div>
            <div>
              <Input
                togglePasswordVisibility
                type="password"
                label="Senha"
                variant="adopter"
                className="pl-2"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="font-body text-sm text-red-800">
                  {errors.password?.message}
                </span>
              )}
            </div>
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
            <Link
              href="/decisao"
              className="font-body font-medium text-sky-700 underline underline-offset-2"
            >
              Cadastre-se
            </Link>
          </div>
        </form>
      </Section>
    </main>
  );
};

export default Login;
