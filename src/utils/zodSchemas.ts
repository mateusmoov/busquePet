import { z } from 'zod'

export const RegisterStepsSchema = [
  z.object({
    name: z.string(),
    birthDate: z.string()
  }),
  z.object({
    numero: z.string().refine((value) => /^\(\d{2}\)\s\d\s\d{4}-\d{4}$/.test(value), {
      message: "Número de telefone inválido. Use o formato (xx) x xxx-xxxx",
    }),
    email: z.string().email({ message: "Endereço de e-mail inválido" }),
    senha: z.string().min(8, { message: "A senha deve ter pelo menos 8 caracteres" }),
  }),
  z.object({
    cep: z.string().refine((value) => /^\d{5}-\d{3}$/.test(value), {
      message: "CEP inválido. Use o formato 00000-000",
    }),
    endereco: z.string(),
    uf: z.string(),
    cidade: z.string(),
    bairro: z.string(),
  }),
  z.object({
    type: z.string().nonempty("O tipo do pet é obrigatório"),
    gender: z.string().nonempty("O genero do pet é obrigatório"),
    size: z.string().nonempty("O porte do pet é obrigatório"),
    ageRange: z.string().nonempty("A idade do pet é obrigatória"),
  }),
  z.object({
    nomeBichinho: z.string(),
    vacinas: z.enum(["todasVacinas", "naoVacinas", "algumasVacinas", "naosabe"]),
    descricaoBichinho: z.string(),
  }),
]