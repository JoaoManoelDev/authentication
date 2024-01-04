"use client"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export const Social = () => {
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => {}}
      >
        <Icons.google className="w-5 h-5" />
      </Button>

      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => {}}
      >
        <Icons.gitHub className="w-5 h-5" />
      </Button>
    </div>
  )
}
