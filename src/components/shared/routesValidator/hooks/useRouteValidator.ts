import { useAppSelector } from "@/hooks";
import { useNavigate } from "react-router-dom";
import { PATHS } from "@/constants";
import { useEffect } from "react";

type Prop = typeof PATHS.HOME | typeof PATHS.SIGNIN | typeof PATHS.SIGNUP;

export const useRouteValidator = (pathToRedirect: Prop ) => {
  const { isAuth } = useAppSelector( state => state.auth);
  console.log("isAuth", isAuth)
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
