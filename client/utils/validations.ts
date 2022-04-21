import * as yup from 'yup';

export const LoginFormSchema = yup.object().shape({
  email: yup.string().email('Некорректная почта').required('Почта обязательная'),
  password: yup
    .string()
    .min(6, 'Пароль должен быть не менее 6 символов')
    .required('Пароль обязательный'),
});

export const RegisterFormSchema = yup
  .object()
  .shape({
    name: yup.string().required('Имя обязательно'),
  })
  .concat(LoginFormSchema);

export const ComplexFormSchema = yup.object().shape({
  name: yup.string().required('Введите название комплекса'),
});

export const HotelFormSchema = yup.object().shape({
  name: yup.string().required('Введите название отеля'),
  location: yup.string().required('Введите расположение отеля'),
  complexId: yup.string().required('Выберите строение'),
  image: yup.mixed().required('Загрузите изображение'),
});
