import { ReactNode } from "react"
import { Button } from "@/components"

type Props = {
  children: ReactNode
  onClick: () => void
}

export const CancelButton = ({ children, onClick }: Props) => {
  return (
    <Button style={{ backgroundColor: "var(--semiSoftBgColor)", color: "var(--labelTextColor)", width: "100%" }} onClick={onClick}>
      { children }
    </Button>
  )
}
