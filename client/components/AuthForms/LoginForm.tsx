import React from 'react';
import { Box, Button, Paper, Typography } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginFormSchema } from '../../utils/validations';
import { FormField } from '../FormField';
import styles from './AuthForms.module.scss';
import { LinkItem } from '../LinkItem';
import { useAppDispatch } from '../../store/hooks';
import { login } from '../../store/actions/user';

export const LoginForm: React.FC = () => {
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
    <Paper classes={{ root: styles.root }}>
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
        </form>
      </FormProvider>
      <Box className={styles.foot}>
        <Typography variant="body1" component="div">
          У вас нет аккаунта?
        </Typography>
        <LinkItem href="/register">
          <Button variant="text">Зарегистрируйтесь</Button>
        </LinkItem>
      </Box>
    </Paper>
  );
};
