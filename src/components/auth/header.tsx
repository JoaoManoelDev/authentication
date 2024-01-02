import { icons } from "@/components/icons"

interface HeaderProps {
  label: string
}

export const Header = ({
  label
}: HeaderProps) => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-y-4">
      <h1 className="text-3xl font-semibold drop-shadow-md flex items-center justify-center gap-1">
        <icons.keyRound className="w-7 h-7" />
        <span>Auth</span>
      </h1>
      <p className="text-muted-foreground text-sm">
        {label}
      </p>
    </div>
  )
}
