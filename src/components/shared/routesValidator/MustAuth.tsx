import { Outlet } from "react-router-dom"
import { PATHS } from "@/constants";
import { Header } from "@/components";
import { useRouteValidator } from "./hooks";
import styles from './MustAuth.module.css'

export const MustAuth = () => {

  useRouteValidator(PATHS.SIGNIN.path);
  
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.body}>
          <Outlet />
        </div>
      </div>
    </>
  )
}
