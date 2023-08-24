'use client'


import Image from "next/image"
import { Input, Button, Icon, Section } from "../components";

const Login = () => {
  return (
    <>
      <main>
        <Section>
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
              className="placeholder:pl-3"
            />
            <Input
              type="password"
              label="Senha"
              variant="donor"
            />
          </div>
          <div className="flex flex-col text-center mb-14">
            <span className="font-body">Ainda não possui conta?</span>
            <a
              href=""
              className="font-body font-medium text-sky-700 underline underline-offset-2"
            >
              Cadastre-se
            </a>
          </div>
          <div className="flex justify-end">
            <Button
              variant="filled"
              icon="checkmark"
              className="bg-fuchsia-800 flex px-14 py-3 items-center font-medium"
            >
              Entrar
            </Button>
          </div>
        </Section>
      </main>
    </>
  );
}


export default Login
