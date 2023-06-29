import { useAppSelector } from "@/hooks";
import { useNavigate } from "react-router-dom";
import { PATHS } from "@/constants";
import { useEffect } from "react";

type Prop = typeof PATHS.HOME.path | typeof PATHS.SIGNIN.path | typeof PATHS.SIGNUP.path;

export const useRouteValidator = (pathToRedirect: Prop ) => {
  const { isAuth } = useAppSelector( state => state.auth);
  const navigate = useNavigate();

  const redirectTo = () => {
    navigate(pathToRedirect);
  }

  useEffect(() => {
    if (!isAuth) redirectTo()
  }, [isAuth])

  return {
    isAuth,
    redirectTo
  }
}
