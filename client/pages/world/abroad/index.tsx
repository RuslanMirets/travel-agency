import { Box } from '@mui/material';
import { NextPage } from 'next';
import React from 'react';
import { CountryItem } from '../../../components/CountryItem';
import { Title } from '../../../components/Title';
import MainLayout from '../../../layouts/MainLayout';
import { wrapper } from '../../../store';
import { getAbroadCountries } from '../../../store/actions/country';
import { useAppSelector } from '../../../store/hooks';

const Abroad: NextPage = () => {
  const { countries } = useAppSelector((state) => state.country);

  return (
    <MainLayout title="Отдых за границей">
      <Box>
        <Title>Отдых и экскурсии по зарубежным странам</Title>
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '30px 20px' }}>
          {countries.map((country) => (
            <CountryItem key={country.id} country={country} />
          ))}
        </Box>
      </Box>
    </MainLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  await store.dispatch(getAbroadCountries());
  return { props: {} };
});

export default Abroad;
