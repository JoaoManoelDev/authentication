"use server"

import { RegisterInput, registerSchema } from "@/schemas"

export const register = async (data: RegisterInput) => {
  const validateFields = registerSchema.safeParse(data)

  if (!validateFields.success) {
    return { error: "Campo inválido" }
  }

  return { success: "Tudo certo" }
}
