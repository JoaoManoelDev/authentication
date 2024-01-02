import { CardWrapper } from "@/components/auth/card-wrapper"

export const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel="Bem-vindo de volta"
      backButtonLabel="Não possui uma conta?"
      backButtonHref="/auth/register"
      showSocial
    >
      Login Form
    </CardWrapper>
  )
}
