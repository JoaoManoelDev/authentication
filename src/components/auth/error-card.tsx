import { CardWrapper } from "@/components/auth/card-wrapper"
import { Icons } from "@/components/icons"

export const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops, Algo deu errado!"
      backButtonHref="/aut/login"
      backButtonLabel="Voltar para o login"
    >
      <div className="w-full flex justify-center align-center">
        <Icons.alertTriangle className="text-destructive" />
      </div>
    </CardWrapper>
  )
}
