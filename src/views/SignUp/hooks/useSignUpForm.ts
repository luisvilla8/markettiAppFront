import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { SignUpFormSchema } from '@/constants'
import { useAppDispatch } from '@/hooks';
import { signUp } from '@/redux';

export const useSignUpForm = () => {

  const dispatch = useAppDispatch()

  const {
    register,
    handleSubmit: baseHandleSubmit,
    formState: { errors, isDirty, isValid },
    reset
  } = useForm({
    defaultValues: { email: '', password: '', name: '', lastName: '' },
    resolver: yupResolver(SignUpFormSchema),
    mode: 'all'
  });

  const onSubmit = async (data: any) => dispatch(signUp(data))

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