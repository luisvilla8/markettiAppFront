import { authService } from "@/services";
import { AppThunk, SignInForm, SignUpForm } from "@/types";
import { setAuthDataOnFail, setAuthDataOnSuccess } from "./authSlice";

export const signIn = (payload:SignInForm):AppThunk => async (dispatch) => {
  try {
    const data = await authService.signIn(payload);
    if (data.data.response) {
      const { user, token } = data.data.response;
      dispatch(setAuthDataOnSuccess({ user, token, isAuth: true}))
    } else {
      dispatch(setAuthDataOnFail(data.data.message))
    }
  } catch (err) {
    dispatch(setAuthDataOnFail(err))
  }
};

export const signUp = (payload:SignUpForm):AppThunk => async (dispatch) => {
  try {
    const data = await authService.signUp(payload);
    if (data.data.response) {
      const { user, token } = data.data.response;
      dispatch(setAuthDataOnSuccess({ user, token, isAuth: true}))
    } else {
      dispatch(setAuthDataOnFail(data.data.message))
    }
  } catch (err) {

  }
}