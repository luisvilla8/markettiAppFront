import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { PATHS } from "@/constants"
import { useAppDispatch } from "@/hooks"
import { setAuthDataOnFail } from "@/redux/slices/auth/authSlice"

export const Logout = () => {

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setAuthDataOnFail("Logout"))
    navigate(PATHS.SIGNIN.path)
  }, [])

  return <></>
}
