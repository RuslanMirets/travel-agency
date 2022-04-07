import { NextPage } from 'next';
import React from 'react';
import { RegisterForm } from '../components/AuthForms/RegisterForm';
import MainLayout from '../layouts/MainLayout';

const Register: NextPage = () => {
  return (
    <MainLayout title="Авторизация">
      <RegisterForm />
    </MainLayout>
  );
};

export default Register;
