import { ReactNode } from "react"
import { Button } from "@/components"

type Props = {
  children: ReactNode
  onClick: () => void
  style?: React.CSSProperties
}

export const CancelButton = ({ children, onClick, style }: Props) => {
  return (
    <Button
      style={{
        styles: style,
        role: "cancel"
      }}
      onClick={onClick}
    >
      { children }
    </Button>
  )
}
