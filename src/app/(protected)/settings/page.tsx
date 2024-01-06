import { auth, signOut } from "@/auth"

import { Button } from "@/components/ui/button"

const SettingsPage = async () => {
  const session = await auth()

  return (
    <div>
      <h1>Minha sessão</h1>
      {JSON.stringify(session, null, 2)}

      <form action={async () => {
        "use server"
        await signOut()
      }}>
        <Button>
          Sair
        </Button>
      </form>
    </div>
  )
}

export default SettingsPage