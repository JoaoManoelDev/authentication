"use server"

import { signIn } from "@/auth"
import { LoginInput, loginSchema } from "@/schemas"
import { DEFAULT_LOGIN_REDIRECT } from "@/routes"
import { AuthError } from "next-auth"

export const login = async (data: LoginInput) => {
  const validateFields = loginSchema.safeParse(data)

  if (!validateFields.success) {
    return { error: "Campo inválido" }
  }

  const { email, password } = validateFields.data

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT
    })
  } catch (error) {
    if (error instanceof AuthError) {
      switch(error.type) {
        case "CredentialsSignin":
          return { error: "Email ou senha incorretos." }
        default:
          return { error: "Algo deu errado." }
      }
    }

    throw error
  }
}
