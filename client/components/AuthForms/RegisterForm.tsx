import React from 'react';
import { Box, Button, Paper, Typography } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterFormSchema } from '../../utils/validations';
import { FormField } from '../FormField';
import styles from './AuthForms.module.scss';
import { LinkItem } from '../LinkItem';

export const RegisterForm: React.FC = () => {
  const methods = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(RegisterFormSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Paper classes={{ root: styles.root }}>
      <Typography variant="h4" component="h4">
        Регистрация
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <FormField type="text" label="Имя" name="name" />
          <FormField type="email" label="Email" name="email" />
          <FormField type="password" label="Пароль" name="password" />
          <Button type="submit" variant="contained" disabled={methods.formState.isSubmitting}>
            Войти
          </Button>
        </form>
      </FormProvider>
      <Box className={styles.foot}>
        <Typography variant="body1" component="div">
          Есть аккаунт?
        </Typography>
        <LinkItem href="/login">
          <Button variant="text">Войдите</Button>
        </LinkItem>
      </Box>
    </Paper>
  );
};
