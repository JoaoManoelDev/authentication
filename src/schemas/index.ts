import { z } from "zod"

export const loginSchema = z.object({
  email: z.string().min(1, "O Email não pode estar vazio.").email("Digite um Email válido."),
  password: z.string().min(1, "A senha não pode estar vazia.")
})

export type LoginInput = z.infer<typeof loginSchema>

export const registerSchema = z.object({
  email: z.string().min(1, "O Email não pode estar vazio.").email("Digite um Email válido."),
  password: z.string().min(6, "A senha deve conter no mínimo 6 caracteres."),
  name: z.string().min(3, "O nome deve conter no mínimo 3 caracteres.")
})

export type RegisterInput = z.infer<typeof registerSchema>
