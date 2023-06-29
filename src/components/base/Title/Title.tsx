import { ReactNode, Ref, forwardRef } from "react"
import { motion } from "framer-motion"
import styles from './Title.module.css'

type Props = {
  fontSize?: string
  fontWeight?: string
  fontStyle?: string
  children: ReactNode
}

export const Title = forwardRef(({ fontSize = "2rem", fontWeight = "bold", fontStyle = "normal", children }: Props, ref: Ref<HTMLHeadingElement>) => {
  return (
    <h1 className={styles.title} style={{ fontSize, fontWeight, fontStyle }} ref={ref}>
      { children }
    </h1>
  )
})

export const MotionTitle = motion(Title)