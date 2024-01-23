"use server"

import { AuthError } from "next-auth"

import { signIn } from "@/auth"
import { LoginInput, loginSchema } from "@/schemas"
import { DEFAULT_LOGIN_REDIRECT } from "@/routes"
import { getUserByEmail } from "@/data/user"
import { generateVerificationToken } from "@/lib/token"
import { sendVerificationEmail } from "@/lib/mail"

export const login = async (data: LoginInput) => {
  const validateFields = loginSchema.safeParse(data)

  if (!validateFields.success) {
    return { error: "Campos inválidos." }
  }

  const { email, password } = validateFields.data

  const existingUser = await getUserByEmail(email)

  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: "Esse email não existe." }  
  }

  if (!existingUser.emailVerified) {
    const verificationToken = await generateVerificationToken(existingUser.email)

    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token,
    )

    return { success: "Email de confirmação enviado." }
  }

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
          return { error: "Algo deu errado. Tente mais tarde." }
      }
    }

    throw error
  }
}
