import { Typography } from '@mui/material';
import { NextPage } from 'next';
import React from 'react';
import MainLayout from '../layouts/MainLayout';

const Login: NextPage = () => {
  return (
    <MainLayout title="Авторизация">
      <div className="auth">
        <Typography variant="h5" component="h5">
          Авторизация
        </Typography>
      </div>
    </MainLayout>
  );
};

export default Login;
