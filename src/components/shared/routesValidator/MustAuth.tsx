import { Outlet } from "react-router-dom"
import { PATHS } from "@/constants";
import { useRouteValidator } from "./hooks";

export const MustAuth = () => {

  useRouteValidator(PATHS.SIGNIN);
  
  return (
    <Outlet />
  )
}
