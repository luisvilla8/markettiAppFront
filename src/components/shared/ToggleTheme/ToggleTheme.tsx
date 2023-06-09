import { TbMoonFilled, TbMoon, TbSunHigh, TbSunFilled } from "react-icons/tb"
import { useAppDispatch, useAppSelector } from "@/hooks"
import { THEMES } from "@/constants"
import styles from "./ToggleTheme.module.css"
import { setThemeThunk } from "@/redux"

export const ToggleTheme = () => {

  const { theme } = useAppSelector(state => state.theme)
  const dispatch = useAppDispatch()

  return (
    <div className={styles.toggle_theme__container}>
      <span onClick={ () => dispatch(setThemeThunk(THEMES.DARK)) } style={{ padding: '.85rem .7rem'}}>
        {
          theme === THEMES.DARK ?
          <TbMoonFilled
            color={`${theme === THEMES.DARK ? 'var(--secondaryColor)' : 'var(--mainTextColor)'}`}
          /> :
          <TbMoon
            color={`${theme === THEMES.DARK ? 'var(--secondaryColor)' : 'var(--mainTextColor)'}`}
          />
        }
      </span>
      <span onClick={ () => dispatch(setThemeThunk(THEMES.LIGHT)) } >
        {
          theme === THEMES.LIGHT ? 
          <TbSunFilled
            fontSize={'1.3rem'}
            color={`${theme === THEMES.LIGHT ? 'var(--secondaryColor)' : 'var(--mainTextColor)'}`}
          /> : 
          <TbSunHigh
            fontSize={'1.3rem'}
            color={`${theme === THEMES.LIGHT ? 'var(--secondaryColor)' : 'var(--mainTextColor)'}`}
          />
        }
      </span>
    </div>
  )
}
