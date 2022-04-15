import { NextPage } from 'next';
import React from 'react';
import { AdminPanel } from '../components/AdminPanel';
import MainLayout from '../layouts/MainLayout';
import { wrapper } from '../store';
import { getCountries } from '../store/actions/country';

const Admin: NextPage = () => {
  return (
    <MainLayout title="Админ панель">
      <AdminPanel />
    </MainLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  await store.dispatch(getCountries());
  return { props: {} };
});

export default Admin;
