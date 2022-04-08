import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { RegisterForm } from '../components/AuthForms/RegisterForm';
import MainLayout from '../layouts/MainLayout';
import { useAppSelector } from '../store/hooks';

const Register: NextPage = () => {
  const { user } = useAppSelector((state) => state.user);

  const router = useRouter();
  useEffect(() => {
    user && router.push('/');
  }, [user]);

  if (user) return <MainLayout title="Регистрация"></MainLayout>;

  return (
    <MainLayout title="Регистрация">
      <RegisterForm />
    </MainLayout>
  );
};

export default Register;
