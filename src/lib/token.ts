import { randomUUID } from "crypto"

import { db } from "@/lib/db"
import { getVerificationTokenByEmail } from "@/data/verification-token"

export const generateVerificationToken = async (email: string) => {
  const token = randomUUID()
  const oneHour = 60 * 60
  const expires = new Date(new Date().getTime() + oneHour * 1000)

  const existingToken = await getVerificationTokenByEmail(email)

  if (existingToken) {
    await db.verificationToken.delete({
      where: {
        id: existingToken.id
      }
    })
  }

  const verificationToken = await db.verificationToken.create({
    data: {
      email,
      token,
      expires
    }
  })

  return verificationToken
}