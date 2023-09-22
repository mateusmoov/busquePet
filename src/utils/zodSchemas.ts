import { z } from 'zod'

export const registerStepsSchema = [
  z.object({
    name: z.string().nonempty("O e-mail é obrigatório"),
    birthDate: z.string().nonempty("O data é obrigatória")
  }),
  z.object({
    number: z.string().min(11, { message: "Telefone inválido" }),
    email: z.string().email({ message: "Endereço de e-mail inválido" }),
    password: z.string().min(8, { message: "A senha deve ter pelo menos 8 caracteres" }),
  }),
  z.object({
    cep: z.string().min(8, { message: "CEP inválido" }),
    address: z.string().nonempty("O endereço é obrigatório"),
    uf: z.string().nonempty("O Estado é obrigatório"),
    city: z.string().nonempty("A cidade é obrigatório"),
    neighborhood: z.string().nonempty("O bairro é obrigatório"),
  }),
  z.object({
    type: z.string().nonempty("O tipo do pet é obrigatório"),
    gender: z.string().nonempty("O genero do pet é obrigatório"),
    size: z.string().nonempty("O porte do pet é obrigatório"),
    ageRange: z.string().nonempty("A idade do pet é obrigatória"),
  }),
  z.object({
    name: z.string(),
    vaccines: z.enum(["todasVacinas", "naoVacinas", "algumasVacinas", "naosabe"]),
    description: z.string(),
  }),
]

export const adopterRegisterStepSchema = [
  z.object({
    name: z.string().nonempty("O e-mail é obrigatório"),
    age: z.number(),
    email: z.string().email({message: "O e-mail é obrigatório"}),
    password: z.string().nonempty({message: "A senha é obrigatória"})
  }),
  z.object({
    cep: z.string().min(8, { message: "CEP inválido" }),
    address: z.string().nonempty("O endereço é obrigatório"),
    uf: z.string().nonempty("O Estado é obrigatório"),
    city: z.string().nonempty("A cidade é obrigatório"),
    neighborhood: z.string().nonempty("O bairro é obrigatório"),
  }),
]