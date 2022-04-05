import { Typography } from '@mui/material';
import { NextPage } from 'next';
import React, { useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormField } from '../components/FormField';
import MainLayout from '../layouts/MainLayout';
import { LoginFormSchema } from '../utils/validations';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { login } from '../store/actions/user';
import { useRouter } from 'next/router';
import { Button } from '@material-ui/core';

const Login: NextPage = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);

  const methods = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(LoginFormSchema),
  });

  const onSubmit = (data: any) => {
    dispatch(login(data));
  };

  const router = useRouter();
  useEffect(() => {
    if (user) router.push('/');
  }, [user]);

  if (user !== null) {
    return <MainLayout title="Авторизация"></MainLayout>;
  }

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
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={methods.formState.isSubmitting}>
              Войти
            </Button>
            <div>
              У вас нет аккаунта?
              <Link href="/register">
                <a>
                  <Button variant="text" color="primary">
                    Зарегистрироваться
                  </Button>
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
