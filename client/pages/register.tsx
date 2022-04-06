import { Box, Button, Typography } from '@mui/material';
import { NextPage } from 'next';
import React, { useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormField } from '../components/FormField';
import MainLayout from '../layouts/MainLayout';
import { RegisterFormSchema } from '../utils/validations';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { useRouter } from 'next/router';

const Register: NextPage = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);

  const methods = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(RegisterFormSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const router = useRouter();
  useEffect(() => {
    if (user) router.push('/');
  }, [user]);

  if (user !== null) {
    return <MainLayout title="Регистрация"></MainLayout>;
  }

  return (
    <MainLayout title="Регистрация">
      <Box className="auth">
        <Typography variant="h4" component="h4">
          Регистрация
        </Typography>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <FormField type="text" label="Имя" name="name" />
            <FormField type="email" label="Email" name="email" />
            <FormField type="password" label="Пароль" name="password" />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={methods.formState.isSubmitting}>
              Войти
            </Button>
            <Box className="auth__foot">
              <Typography variant="body1" component="div">
                Есть аккаунт?
              </Typography>
              <Link href="/login">
                <a>
                  <Button variant="text" color="primary">
                    Войти
                  </Button>
                </a>
              </Link>
            </Box>
          </form>
        </FormProvider>
      </Box>
    </MainLayout>
  );
};

export default Register;
