import { Outlet, useNavigate } from "react-router-dom"
import { useAppSelector } from "@/hooks";
import { PATHS } from "@/constants";

export const MustAuth = () => {

  const { isAuth } = useAppSelector( state => state.auth);
  const navigate = useNavigate();

  if (!isAuth) navigate(PATHS.SIGNIN)

  return (
    <Outlet />
  )
}
