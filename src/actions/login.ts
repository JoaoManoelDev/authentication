"use server"

import { LoginInput, loginSchema } from "@/schemas"

export const login = async (data: LoginInput) => {
  const validateFields = loginSchema.safeParse(data)

  if (!validateFields.success) {
    return { error: "Campo inválido" }
  }

  return { success: "Tudo certo" }
}
