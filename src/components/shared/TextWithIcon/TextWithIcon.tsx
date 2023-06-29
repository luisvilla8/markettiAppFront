import { Paragraph } from "@/components/base/Paragraph/Paragraph"
import styles from './TextWithIcon.module.css'

type Props = {
  children: React.ReactNode
  text: string
  inverted?: boolean
}

export const TextWithIcon = ({ text = "", inverted = false, children }: Props) => {
  return (
    <div className={styles.container} 
      style={{ flexDirection: `${inverted ? 'row-reverse' : 'row'}`}}
    >
      <Paragraph fontFamily="var(--secondFontFamily)">
        { text }
      </Paragraph>
      { children }
    </div>
  )
}
