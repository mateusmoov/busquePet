import { z } from 'zod'

export const registerStepsSchema = [
  z.object({
    name: z.string().nonempty("O e-mail é obrigatório"),
    birthDate: z.string().nonempty("O data é obrigatória")
  }),
  z.object({
    number: z.string().refine((value) => /^\(\d{2}\)\s\d\s\d{4}-\d{4}$/.test(value), {
      message: "Número de telefone inválido. Use o formato (xx) x xxx-xxxx",
    }),
    email: z.string().email({ message: "Endereço de e-mail inválido" }),
    password: z.string().min(8, { message: "A senha deve ter pelo menos 8 caracteres" }),
  }),
  z.object({
    cep: z.string().refine((value) => /^\d{5}-\d{3}$/.test(value), {
      message: "CEP inválido. Use o formato 00000-000",
    }),
    address: z.string(),
    uf: z.string(),
    city: z.string(),
    neighborhood: z.string(),
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