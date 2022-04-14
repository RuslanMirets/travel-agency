import { Box } from '@mui/material';
import { NextPage } from 'next';
import React from 'react';
import { CityItem } from '../../../components/CityItem';
import { Title } from '../../../components/Title';
import MainLayout from '../../../layouts/MainLayout';
import { wrapper } from '../../../store';
import { getRussianCities } from '../../../store/actions/city';
import { useAppSelector } from '../../../store/hooks';

const Russia: NextPage = () => {
  const { cities } = useAppSelector((state) => state.city);

  return (
    <MainLayout title="Туры по России">
      <Box>
        <Title>Отдых и экскурсии по городам России</Title>
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '30px 20px' }}>
          {cities.map((city) => (
            <CityItem key={city.id} city={city} />
          ))}
        </Box>
      </Box>
    </MainLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  await store.dispatch(getRussianCities());
  return { props: {} };
});

export default Russia;
