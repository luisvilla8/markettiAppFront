import { ReactNode } from "react"
import { Title } from "@/components"

type Props = {
  children: ReactNode
}

export const LogoTitle = ({ children }: Props) => {
  return (
    <Title fontSize="1rem">{ children }</Title>
  )
}
