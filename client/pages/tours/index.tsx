import { Box, Typography } from '@mui/material';
import { NextPage } from 'next';
import React from 'react';
import { Title } from '../../components/Title';
import { TypeItem } from '../../components/TypeItem';
import MainLayout from '../../layouts/MainLayout';
import { wrapper } from '../../store';
import { getTypes } from '../../store/actions/type';
import { useAppSelector } from '../../store/hooks';

const Tours: NextPage = () => {
  const { types } = useAppSelector((state) => state.type);

  return (
    <MainLayout title="Все виды отдыха">
      <Box>
        <Title>Все виды отдыха</Title>
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '30px 20px' }}>
          {types.map((type) => (
            <TypeItem key={type.id} type={type} />
          ))}
        </Box>
      </Box>
    </MainLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  await store.dispatch(getTypes());
  return { props: {} };
});

export default Tours;
