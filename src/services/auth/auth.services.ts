import { SignInForm, SignInResponse, SignUpForm } from "@/types";
import instance from "@/services";

const signIn = async (payload: SignInForm) => {
  const data:SignInResponse = await instance.post("/auth", payload);
  return data;
}

const signUp = async (payload: SignUpForm) => {
  const data = await instance.post("/auth/sign-up", payload);
  return data;
}

export const authService = {
  signIn,
  signUp
}