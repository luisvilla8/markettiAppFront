import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginFormSchema } from '@/constants'
import { SignInForm } from '@/types';
import { useAppDispatch } from '@/hooks';
import { signIn } from '@/redux';

export const useSignInForm = () => {

  const dispatch = useAppDispatch()

  const {
    register,
    handleSubmit: baseHandleSubmit,
    formState: { errors, isDirty, isValid },
    reset
  } = useForm({
    defaultValues: { email: '', password: '' } as SignInForm,
    resolver: yupResolver(LoginFormSchema),
    mode: 'all'
  });

  const onSubmit = (data: SignInForm) => dispatch(signIn(data))

  const handleSubmit = baseHandleSubmit(onSubmit)

  return {
    register,
    handleSubmit,
    errors,
    isDirty,
    isValid,
    reset
  }
}