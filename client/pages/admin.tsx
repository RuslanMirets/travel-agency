import { NextPage } from 'next';
import React from 'react';
import { AdminPanel } from '../components/AdminPanel';
import { Title } from '../components/Title';
import MainLayout from '../layouts/MainLayout';
import { wrapper } from '../store';
import { getComplexes } from '../store/actions/complex';

const Admin: NextPage = () => {
  return (
    <MainLayout title="Панель администратора">
      <Title>Панель администратора</Title>
      <AdminPanel />
    </MainLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  await store.dispatch(getComplexes());
  return { props: {} };
});

export default Admin;
