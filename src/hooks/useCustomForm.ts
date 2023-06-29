import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';

type onSubmit = (prop: any) => Promise<any>

export const useCustomForm = (defaultValues: any, schema: any, onSubmit: onSubmit) => {

  const {
    register,
    handleSubmit: baseHandleSubmit,
    formState: { errors, isDirty, isValid },
    reset
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
    mode: 'all'
  });

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