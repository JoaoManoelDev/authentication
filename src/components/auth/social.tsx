"use client"

import { signIn } from "next-auth/react"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { DEFAULT_LOGIN_REDIRECT } from "@/routes"

export const Social = () => {
  const onClick = (provider: "github" | "google") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    })
  }

  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => onClick("google")}
      >
        <Icons.google className="w-5 h-5" />
      </Button>

      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => onClick("github")}
      >
        <Icons.gitHub className="w-5 h-5" />
      </Button>
    </div>
  )
}
