import { Button } from "@/components/ui/button"
import { LoginButton } from "@/components/auth/login-button"
import { icons } from "@/components/icons"

export default function Home() {
  return (
    <main className="flex flex-col h-full items-center justify-center">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-semibold drop-shadow-md flex items-center justify-center gap-1">
          <icons.keyRound className="w-14 h-14" />
          <span>Auth</span>
        </h1>

        <p className="text-lg">Um serviço de autenticação</p>

        <div>
          <LoginButton>
            <Button size="lg">
              Entrar
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  )
}
