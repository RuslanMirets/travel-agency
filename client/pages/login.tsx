import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { LoginForm } from '../components/AuthForms/LoginForm';
import MainLayout from '../layouts/MainLayout';
import { useAppSelector } from '../store/hooks';

const Login: NextPage = () => {
  const { user } = useAppSelector((state) => state.user);

  const router = useRouter();
  useEffect(() => {
    user && router.push('/');
  }, [user]);

  if (user) return <MainLayout title="Авторизация"></MainLayout>;

  return (
    <MainLayout title="Авторизация">
      <LoginForm />
    </MainLayout>
  );
};

export default Login;
