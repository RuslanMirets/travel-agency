import { NextPage } from 'next';
import React from 'react';
import { LoginForm } from '../components/AuthForms/LoginForm';
import MainLayout from '../layouts/MainLayout';

const Login: NextPage = () => {
  return (
    <MainLayout title="Авторизация">
      <LoginForm />
    </MainLayout>
  );
};

export default Login;
