import { Button, Typography } from '@mui/material';
import { NextPage } from 'next';
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormField } from '../components/FormField';
import MainLayout from '../layouts/MainLayout';
import { LoginFormSchema } from '../utils/validations';
import Link from 'next/link';
import { useAppDispatch } from '../store/hooks';
import { login } from '../store/actions/user';

const Login: NextPage = () => {
  const dispatch = useAppDispatch();

  const methods = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(LoginFormSchema),
  });

  const onSubmit = (data: any) => {
    dispatch(login(data));
  };

  return (
    <MainLayout title="Авторизация">
      <div className="auth">
        <Typography variant="h4" component="h4">
          Авторизация
        </Typography>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <FormField type="email" label="Email" name="email" />
            <FormField type="password" label="Пароль" name="password" />
            <Button type="submit" variant="contained" disabled={methods.formState.isSubmitting}>
              Войти
            </Button>
            <div>
              У вас нет аккаунта?
              <Link href="/register">
                <a>
                  <Button variant="text">Зарегистрироваться</Button>
                </a>
              </Link>
            </div>
          </form>
        </FormProvider>
      </div>
    </MainLayout>
  );
};

export default Login;
