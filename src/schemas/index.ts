import { z } from "zod"

export const loginSchema = z.object({
  email: z.string().min(1, "O Email não pode estar vazio.").email("Digite um Email válido."),
  password: z.string().min(1, "A senha não pode estar vazia.")
})

export type LoginInput = z.infer<typeof loginSchema>