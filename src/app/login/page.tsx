'use client'


import Image from "next/image"
import { Input, Button, Icon } from "../components";

const Login = () => {
  return (
    <>
      <main>
        <section>
          <div>
            <Image
              alt="Logo do BusquePet"
              src="/icons/busquepet_logo.svg"
              width="222"
              height="192"
            />
          </div>
          <div>
            <Input label="E-mail" variant="donor" />
            <Input label="Senha" variant="donor" />
          </div>
          <div>
            <span>Ainda não possui conta?</span>
            <a href="">Cadastre-se</a>
            {/* aria-labelledby */}
          </div>
          <div>
            <Button
              variant="filled"
              icon="checkmark"
              className="bg-fuchsia-800 flex px-14 py-3 items-center font-medium"
            >
              Entrar
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}


export default Login
