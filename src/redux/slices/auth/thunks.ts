import { authService } from "@/services";
import { AppThunk, SignInForm, SignUpForm } from "@/types";
import { setAuthDataOnFail, setAuthDataOnSuccess } from "./authSlice";


export const signInThunk = (payload:SignInForm, callback: Function):AppThunk => async (dispatch) => {
  try {
    const data = await authService.signIn(payload);
    if (data.status === 200) {
      const { user, token } = data.data.response;
      dispatch(setAuthDataOnSuccess({ user, token, isAuth: true}))
      callback()
    } else {
      dispatch(setAuthDataOnFail(data.data.message))
    }
  } catch (err: any) {
    dispatch(setAuthDataOnFail(err.message))
  }
};

export const signUpThunk = (payload:SignUpForm, callback: Function):AppThunk => async (dispatch) => {
  try {
    const data = await authService.signUp(payload);
    if (data.status === 200) {
      const { user, token } = data.data.response;
      dispatch(setAuthDataOnSuccess({ user, token, isAuth: true}))
      callback()
    } else {
      dispatch(setAuthDataOnFail(data.data.message))
    }
  } catch (err) {

  }
}