import * as yup from 'yup';

export const SignInFormSchema = yup
  .object({
    email: yup
      .string()
      .required("Email es requerido")
      .email("Email debe ser válido"),
    password: yup
      .string()
      .required("Password es requerido")
      .matches(/[A-Z]+/, "Password debe contenter al menos una mayúscula")
      .matches(/[a-z]+/, "Password debe contenter al menos una minúscula")
      .matches(/[0-9]+/, "Password debe contenter al menos un número")
      .min(8, "Password debe contenter al menos 8 caracteres")
      .matches(
        /[^A-Za-z0-9]+/,
        "Password debe contenter al menos un caracter especial"
      ),
  })
  .required();

export const SignUpFormSchema = yup
  .object({
    name: yup.string().required("Nombre es requerido"),
    lastName: yup.string().required("Apellido es requerido"),
    email: yup
      .string()
      .required("Email es requerido")
      .email("Email debe ser válido"),
    password: yup
      .string()
      .required("Password es requerido")
      .matches(/[A-Z]+/, "Password debe contenter al menos una mayúscula")
      .matches(/[a-z]+/, "Password debe contenter al menos una minúscula")
      .matches(/[0-9]+/, "Password debe contenter al menos un número")
      .min(8, "Password debe contenter al menos 8 caracteres")
      .matches(
        /[^A-Za-z0-9]+/,
        "Password debe contenter al menos un caracter especial"
      ),
  })
  .required();