import { SignInForm, SignInResponse, SignUpForm } from "@/types";
import instance from "@/services";

const signIn = async (payload: SignInForm) => {
  try {
    const data:SignInResponse = await instance.post("/auth", payload);
    return data;
  } catch (err: any) {
    const data:SignInResponse = {
      status: err.response.status,
      data: {
        message: err.response.data.message
      }
    }
    return data
  }
}

const signUp = async (payload: SignUpForm) => {
  const data = await instance.post("/auth/sign-up", payload);
  return data;
}

export const authService = {
  signIn,
  signUp
}