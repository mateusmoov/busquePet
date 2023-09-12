import { z } from 'zod'

export const RegisterStepsSchema = z.object({
  name: z.string(),
  birthDate: z.string()
})