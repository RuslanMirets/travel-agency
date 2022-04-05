import { Typography } from '@mui/material';
import { NextPage } from 'next';
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { wrapper } from '../store';
import { getUsers } from '../store/actions/user';
import { useAppSelector } from '../store/hooks';

const Users: NextPage = () => {
  const { users } = useAppSelector((state) => state.user);
  return (
    <MainLayout title="Пользователи">
      {users.map((user) => (
        <Typography variant="body1" key={user.id}>
          {user.name} | {user.email} | {user.role[0].description}
        </Typography>
      ))}
    </MainLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  await store.dispatch(getUsers());
  return { props: {} };
});

export default Users;
