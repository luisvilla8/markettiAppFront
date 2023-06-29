import { ImSearch } from "react-icons/im"
import { Input } from "@/components"
import styles from "./SearchInput.module.css"

export const SearchInput = () => {
  return (
    <div className={styles.container}>
      <Input name="search" type="text" />
      <ImSearch />
    </div>
  )
}
