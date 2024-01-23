"use client"

import { useState, useTransition } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useSearchParams } from "next/navigation"

import { LoginInput, loginSchema } from "@/schemas"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { CardWrapper } from "@/components/auth/card-wrapper"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FormError } from "@/components/form-error"
import { FormSuccess } from "@/components/form-success"

import { login } from "@/actions/login"

export const LoginForm = () => {
  const searchParams = useSearchParams()
  const urlError = searchParams.get("error") === "OAuthAccountNotLinked"
    ? "Email já esta em uso em um provedor diferente."
    : ""

  const [error, setError] = useState<string | undefined>("")
  const [success, setSuccess] = useState<string | undefined>("")

  const [isPending, startTransition] = useTransition()
  
  const loginForm = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    }
  })

  const onSubmit = (data: LoginInput) => {
    setError("")
    setSuccess("")

    startTransition(async () => {
      const response = await login(data)
      if (response?.error) setError(response.error)
      if (response?.success) setSuccess(response.success)
    })
  }

  return (
    <CardWrapper
      headerLabel="Bem-vindo de volta"
      backButtonLabel="Não possui uma conta?"
      backButtonHref="/auth/register"
      showSocial
    >
      <Form {...loginForm}>
        <form onSubmit={loginForm.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={loginForm.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="email@example.com"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={loginForm.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      placeholder="********"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormSuccess message={success} />
          <FormError message={error || urlError} />

          <Button
            className="w-full"
            type="submit"
            disabled={isPending}
          >
            Entrar
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}
