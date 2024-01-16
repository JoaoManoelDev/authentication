"use server"

import bcrypt from "bcryptjs"

import { RegisterInput, registerSchema } from "@/schemas"
import { db } from "@/lib/db"
import { getUserByEmail } from "@/data/user"

export const register = async (data: RegisterInput) => {
  const validateFields = registerSchema.safeParse(data)

  if (!validateFields.success) {
    return { error: "Credenciais inválidas." }
  }

  const { name, email, password } = validateFields.data
  const salt = 10
  const hashedPassword = await bcrypt.hash(password, salt)

  const userAlreadyExists = await getUserByEmail(email)

  if (userAlreadyExists) return { error: "Esse Email já esta em uso." }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword
    }
  })

  // TODO: Send verification toke email

  return { success: "Usuário criado." }
}
